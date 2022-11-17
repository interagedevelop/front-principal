import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'home-grupo-empresa',
    loadChildren: () => import('./pages/components/home-grupo-empresa/home-grupo-empresa.module').then(m => m.HomeGrupoEmpresaModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'header-footer',
    loadChildren: () => import('./pages/components/header-footer/header-footer.module').then(m => m.HeaderFooterModule),
    // canLoad: [AuthGuard]
  },
  { path: '',   redirectTo: '/header-footer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
