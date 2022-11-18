import { MainMenuModule } from './../../main-menu/main-menu.module';
import { SidemenuComponent } from '../../main-menu/sidemenu/sidemenu.component';
import { AppComponent } from '../../app.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    MainMenuModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderFooterModule { }
