import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [SidemenuComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class MainMenuModule { }
