import {PrimeNGConfig} from 'primeng/api';
import {Component, OnInit} from '@angular/core';
import {ContratoService} from '../../service/contrato.service';
import {AuthenticationService} from 'lib';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-home-grupo-empresa',
  templateUrl: './home-grupo-empresa.component.html',
  styleUrls: ['./home-grupo-empresa.component.scss']
})
export class HomeGrupoEmpresaComponent implements OnInit {

  authUser: any;
  listaEmpresa: any;
  imagemTeste: any;
  listaModulos: any;

  empresaSelecionada: boolean;

  constructor(private primengConfig: PrimeNGConfig,
              private contratoService: ContratoService,
              private authenticationService: AuthenticationService,
              private keycloakService: KeycloakService)
  {
    this.empresaSelecionada = false;
  }

  async ngOnInit() {
    this.authUser = this.authenticationService.authUser;

    if (this.authUser != null) {
      this.listaEmpresa = await this.contratoService.buscarEmpresaUsuario(this.authUser.usuario.id);
    }
  }

  async buscarContratoEmpresa(empresaId: number) {
    this.authUser.empresaId = empresaId;
    this.listaModulos = await this.contratoService.buscarContratoEmpresa(empresaId, this.authUser.usuario.id);
    if (this.listaModulos.length > 0) {
      this.empresaSelecionada = true;

    }
  }

  voltar() {
    this.empresaSelecionada = false;
  }

  logoff() {
    this.authenticationService.logout();
    this.keycloakService.logout();
  }
}
