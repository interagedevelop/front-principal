import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {catchError, filter, take, switchMap, tap} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {UsuarioService} from 'lib';
import {AuthenticationService} from 'lib';
import {NgxSpinnerService} from 'ngx-spinner';
import {DadosCompartilhadosService} from 'lib';
import {KeycloakService} from 'keycloak-angular';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  constructor(private usuarioService: UsuarioService,
              private spinner: NgxSpinnerService,
              private dadosCompartilhadosService: DadosCompartilhadosService,
              private authenticationService: AuthenticationService,
              private readonly keycloak: KeycloakService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let N = environment.apiUrl.length;
    const requestToAPIServidor = request.url.substring(0, N) === environment.apiUrl;


    if (this.authenticationService.authUser && (requestToAPIServidor)) {
      request = this.addToken(request, this.authenticationService.authUser.token);
    }

    if (!this.dadosCompartilhadosService.desabilitarLoading)
      this.spinner.show();


    return next.handle(request).pipe(
      tap({
        next: (x) => {
          if (x.type !== 0) {
            if (!this.dadosCompartilhadosService.desabilitarLoading)
              this.spinner.hide();
          }
        },
        error: (err) => {
          if (!this.dadosCompartilhadosService.desabilitarLoading)
            this.spinner.hide();
        }
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403)) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      }));
  }


  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {'Authorization': `Bearer ${token}`}
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.refreshToken().pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.jwt);
          return next.handle(this.addToken(request, token.jwt));
        }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }

  private getURLBase(): string {
    return environment.apiUrl;
  }

  refreshToken(): Observable<boolean> {
    this.keycloak.getToken().then(res =>{
      if (this.authenticationService.authUser != null) {
        this.authenticationService.authUser.token = res;
      }
    });
    return of(true);
  }


}
