import { MenuLateralModule } from './pages/menu-lateral/menu-lateral.module';
import { MenuModule } from './pages/menu/menu.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
// import { LibModule } from 'lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    MenuLateralModule,
    ButtonModule,
    SidebarModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    // LibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
 })