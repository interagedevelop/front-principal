import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidemenuComponent} from './sidemenu/sidemenu.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from '../../../../front-base/projects/adm-default/src/lib/layout/layout.component';
import {Router, RouterModule} from '@angular/router';


@NgModule({
  declarations: [SidemenuComponent, HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {component: LayoutComponent, path: ''}
    ])
  ],
  exports: [
    SidemenuComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ]
})
export class MainMenuModule {
}
