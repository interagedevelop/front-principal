import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../shared/service/authentication-service';
import {ConfiguracaoEmpresaService} from '../services/configuracao-empresa.service';
import {StorageService} from '../shared/service/storage.service';


@Injectable({providedIn: 'root'})
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router,
                private auth: AuthenticationService,
                private configuracaoEmpresaService: ConfiguracaoEmpresaService,
                private storageService: StorageService) {

        this.checkCxState();
    }

    async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>> {
        return this.checkCxState();
    }


    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | boolean {

        const result = this.auth.getAuthenticatedUser();
        if (result) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

    async checkCxState() {
        const cxAberto = await this.storageService.getSessionStorage('cxAberto');
        return !cxAberto;
    }

}
