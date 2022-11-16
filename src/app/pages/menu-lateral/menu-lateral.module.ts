import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';



@NgModule({
  declarations: [
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule
  ],
  exports: [
    MenuLateralComponent
  ]
})
export class MenuLateralModule { }
