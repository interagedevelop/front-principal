import {Component, Injector, OnInit} from '@angular/core';
import {ContratoService} from '../../service/contrato.service';
import {PageProcessoComponent} from 'lib';

@Component({
  selector: 'app-home-grupo-empresa',
  templateUrl: './home-grupo-empresa.component.html',
  styleUrls: ['./home-grupo-empresa.component.scss']
})
export class HomeGrupoEmpresaComponent extends PageProcessoComponent implements OnInit {
  listaEmpresa: any;
  imagemTeste: any;
  listaModulos: any;

  empresaSelecionada: boolean;

  constructor(private contratoService: ContratoService,
              inj: Injector) {
    super(inj);
    this.empresaSelecionada = false;
  }

  override async ngOnInit() {
    await super.ngOnInit();//
    if (this.authenticationService.authUser != null) {
      this.listaEmpresa = this.authenticationService.authUser.empresas;
    }
  }

  async buscarContratoEmpresa(empresaId: number) {

    if (this.authenticationService.authUser) {
      this.listaModulos = await this.contratoService.buscarContratoEmpresa(empresaId,
        this.authenticationService.authUser.usuario.id);
      await this.authenticationService.setEmpresaLogada(empresaId);

    }
    if (this.listaModulos.length > 0) {
      this.empresaSelecionada = true;
    }
  }

  voltar() {
    this.empresaSelecionada = false;
  }

  async acaoAbrirSistema(modulo: any) {
    if (this.authenticationService.authUser) {
      await this.authenticationService.salvarSessao(this.dadosCompartilhadosService.empresaSelecionada.id,
        this.authenticationService.authUser.sid, this.authenticationService.authUser.usuario.id);
    }
    window.location.href = modulo.url;
  }
}
