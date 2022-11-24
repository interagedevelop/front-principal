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

  constructor(private readonly keycloak: KeycloakService,
              private authenticationService: AuthenticationService) {

  }

  async ngOnInit() {
    this.authenticationService.carregarSessao();

    const authUser = this.authenticationService.authUser;
    if (!authUser) {
      this.isLoggedIn = await this.keycloak.isLoggedIn();

      if (this.isLoggedIn) {
        this.userProfile = await this.keycloak.loadUserProfile();
        this.token = await this.keycloak.getToken();
        if (this.userProfile.username != null) {
          this.authenticationService.login(this.userProfile.username, this.token);
        }

      } else {
        this.login()
      }
    }

  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}
