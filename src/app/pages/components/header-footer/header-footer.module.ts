import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderFooterComponent } from './header-footer.component';



@NgModule({
  declarations: [
    HeaderFooterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    RouterModule.forChild([
      {path: '', component: HeaderFooterComponent}
    ])
  ]
})
export class HeaderFooterModule { }
