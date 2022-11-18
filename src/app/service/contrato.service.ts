import {Injectable, Injector} from '@angular/core';
import {Service} from 'lib';

@Injectable({
  providedIn: 'root'
})
export class ContratoService extends Service {
  constructor(inj: Injector) {
    super('/auth-erp/contratos', inj)
  }

  async buscarEmpresaUsuario(usuarioId: number) {
    const url = `/contratos/buscarEmpresaUsuario/${usuarioId}`;
    const result = await this.http.getBlob(url);
  }
}
