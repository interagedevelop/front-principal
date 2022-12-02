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


  constructor(key: KeycloakService,
              authenticationService: AuthenticationService) {
    authenticationService.keycloakService = key;
  }

  async ngOnInit() {
  }
}
