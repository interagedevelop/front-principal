import {Injectable, Injector} from '@angular/core';
import {Service} from 'lib';

@Injectable({
  providedIn: 'root'
})
export class ContratoService extends Service {
  constructor(inj: Injector) {
    super('/auth-erp/contratos', inj)
  }

  async buscarEmpresaUsuario(usuarioId: number): Promise<any> {
    const url = `${this.http.apiUrl}/auth-erp/contratos/buscarEmpresaUsuario/${usuarioId}`;
    return await this.http.httpCliente.get(url).toPromise();
  }

  async buscarContratoEmpresa(empresaId: number, usuarioId: number): Promise<any> {
    const url = `${this.http.apiUrl}/auth-erp/contratos/buscarContratoEmpresa/${empresaId}/${usuarioId}`;
    return await this.http.httpCliente.get(url).toPromise();


  }
}
