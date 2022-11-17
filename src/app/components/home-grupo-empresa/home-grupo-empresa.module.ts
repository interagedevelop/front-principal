import { HomeGrupoEmpresaComponent } from './home-grupo-empresa.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterModule.forChild([
      {path: '', component: HomeGrupoEmpresaComponent}
    ])
  ]
})
export class HomeGrupoEmpresaModule { }
