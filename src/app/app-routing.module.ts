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
    loadChildren: () => import('lib').then(m => m.AdmDefaultModule),
    // canLoad: [AuthGuard]
  },
  {
    path: 'layout',
    loadChildren: () => import('lib').then(m => m.AdmDefaultModule),
    // canLoad: [AuthGuard]
  },
  { path: '',   redirectTo: '/home-grupo-empresa', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
