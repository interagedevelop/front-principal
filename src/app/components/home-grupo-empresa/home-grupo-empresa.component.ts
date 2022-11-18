import {PrimeNGConfig} from 'primeng/api';
import {Component, OnInit} from '@angular/core';
import {ContratoService} from '../../service/contrato.service';
import {AuthenticationService} from 'lib';

@Component({
  selector: 'app-home-grupo-empresa',
  templateUrl: './home-grupo-empresa.component.html',
  styleUrls: ['./home-grupo-empresa.component.scss']
})
export class HomeGrupoEmpresaComponent implements OnInit {

  authUser: any;

  constructor(private primengConfig: PrimeNGConfig,
              private contratoService: ContratoService,
              private authenticationService: AuthenticationService) {
    this.authUser = this.authenticationService.authUser;
  }

  async ngOnInit() {
    if (this.authUser != null) {
      const result = await this.contratoService.buscarEmpresaUsuario(this.authUser.usuario.id);

    }
    this.primengConfig.ripple = true;
  }
}
