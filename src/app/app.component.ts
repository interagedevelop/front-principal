import {Component, OnInit} from '@angular/core';
import {KeycloakProfile} from 'keycloak-js';
import {KeycloakService} from 'keycloak-angular';
import {AuthenticationService} from 'lib'
import {environment} from '../environments/environment';

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
  public moduloIdselecionado: number | any;

  menuSidebar = [
    {
      link_name: "Home",
      link: "#",
      icon: "fa-solid fa-house",
      sub_menu: []
    }, {
      link_name: "Categoria",
      link: null,
      icon: "fa-solid fa-house",
      sub_menu: [
        {
          link_name: "Teste",
          link: "#",
        }, {
          link_name: "Teste",
          link: "#",
        }, {
          link_name: "Teste",
          link: "#",
        }
      ]
    }, {
      link_name: "Financeiro",
      link: null,
      icon: "fa-solid fa-house",
      sub_menu: [
        {
          link_name: "Teste",
          link: "#",
        }, {
          link_name: "Teste",
          link: "#",
        }, {
          link_name: "Teste",
          link: "#",
        }
      ]
    }, {
      link_name: "Relatorios",
      link: "#",
      icon: "fa-solid fa-house",
      sub_menu: []
    }
  ];


  constructor(private readonly keycloak: KeycloakService,
              private authenticationService: AuthenticationService,
              private keycloakService: KeycloakService) {

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

        if (this.userProfile.username != null) {
         await this.authenticationService.login(this.userProfile.username, this.token, null);
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

  logoff() {
    this.authenticationService.logout();
    this.keycloakService.logout();
  }
}
