import {Component, OnInit} from '@angular/core';
import {KeycloakProfile} from 'keycloak-js';
import {KeycloakService} from 'keycloak-angular';
import {AuthenticationService} from 'lib'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front-Principal';
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  public token: string | undefined;
  private authUser: any;
  public sid: string = '';



  constructor(private readonly keycloak: KeycloakService,
              private authenticationService: AuthenticationService) {

  }

  async ngOnInit() {
    this.authUser = this.authenticationService.authUser;

    this.authenticationService.carregarSessao();

    const authUser = this.authenticationService.authUser;
    if (!authUser) {
      this.isLoggedIn = await this.keycloak.isLoggedIn();

      if (this.isLoggedIn) {
        this.userProfile = await this.keycloak.loadUserProfile();
        this.token = await this.keycloak.getToken();

        const jwtParts: string[] = this.token.split('.');
        const jwtBody = atob(jwtParts[1]);
        const claims = JSON.parse(jwtBody);
        this.sid = claims.sid

        if (this.userProfile.username != null) {
          this.authenticationService.login(this.userProfile.username, this.token, this.sid);
        }

      } else {
        this.login()
      }
    }
    console.log(this.token);

  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}
