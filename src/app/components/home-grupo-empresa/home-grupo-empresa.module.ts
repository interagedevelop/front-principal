import { HomeGrupoEmpresaComponent } from './home-grupo-empresa.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PageProcessoModule} from 'lib'



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    PageProcessoModule,
    RouterModule.forChild([
      {path: '', component: HomeGrupoEmpresaComponent}
    ])
  ]
})
export class HomeGrupoEmpresaModule { }
