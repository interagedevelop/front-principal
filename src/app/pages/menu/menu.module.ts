import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    RouterModule.forChild([
      {path: '', component: MenuComponent}
    ])
  ]
})
export class MenuModule { }
