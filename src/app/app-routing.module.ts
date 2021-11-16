import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import {environment} from "../environments/environment";
import {AdminAuthGuard} from "./auth-guard/admin-auth.guard";
import {AdminAuthStateGuard} from "./auth-guard/admin-auth-state.guard";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },

  {
    path: environment.adminLoginUrl,
    canActivate: [AdminAuthStateGuard],
    loadChildren: () => import('./admin/admin-auth/admin-auth.module').then(m => m.AdminAuthModule)
  },
  {
    path: environment.adminBaseUrl,
    canActivate: [AdminAuthGuard],
    loadChildren: () => import('./admin/pages/pages.module').then(m => m.PagesModule)
  }
//   {
//     path: '',
//      component: PagesModule
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
