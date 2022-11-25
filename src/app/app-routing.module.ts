import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home-grupo-empresa',
    loadChildren: () => import('./components/home-grupo-empresa/home-grupo-empresa.module').then(m => m.HomeGrupoEmpresaModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'header-footer',
    loadChildren: () => import('./components/header-footer/header-footer.module').then(m => m.HeaderFooterModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'layout',
    loadChildren: () => import('./main-menu/main-menu.module').then(m => m.MainMenuModule),
    // canLoad: [AuthGuard]
  },
  { path: '',   redirectTo: '/header-footer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
