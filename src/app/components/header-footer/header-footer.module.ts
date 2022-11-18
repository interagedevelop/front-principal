import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFooterComponent } from './header-footer.component';



@NgModule({
  declarations: [HeaderFooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HeaderFooterComponent}
    ]),
    ButtonModule,
    MenubarModule,
    MenuModule,
    InputTextModule,
  ]
})
export class HeaderFooterModule { }
