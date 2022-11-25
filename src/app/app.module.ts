import {HomeGrupoEmpresaModule} from './components/home-grupo-empresa/home-grupo-empresa.module';
import {APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from 'primeng/button';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {HomeGrupoEmpresaComponent} from './components/home-grupo-empresa/home-grupo-empresa.component';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AdmDefaultModule} from 'lib';
import {MainMenuModule} from './main-menu/main-menu.module';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'interage-development',
        url: 'https://auth.interagesistemas.com.br',
        clientId: 'front-principal'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    })
}

@NgModule({
  declarations: [
    AppComponent,
    HomeGrupoEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeGrupoEmpresaModule,
    ButtonModule,
    SidebarModule,
    BrowserModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    HttpClientModule,
    AdmDefaultModule.forRoot(environment.apiUrl, environment.nomeSistema),
    MainMenuModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
