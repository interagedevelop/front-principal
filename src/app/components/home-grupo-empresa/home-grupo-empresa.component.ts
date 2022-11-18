import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
// import {TesteService} from 'lib';

@Component({
  selector: 'app-home-grupo-empresa',
  templateUrl: './home-grupo-empresa.component.html',
  styleUrls: ['./home-grupo-empresa.component.scss']
})
export class HomeGrupoEmpresaComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig,
              // private testeService: TesteService
              ) { }

  ngOnInit() {

    this.primengConfig.ripple = true;
  }

  // teste() {
  //   this.testeService.teste()
  // }
}
