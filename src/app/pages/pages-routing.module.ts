import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from "../auth-guard/user-auth.guard";
import { UserAuthStateGuard } from "../auth-guard/user-auth-state.guard";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: { preload: true, delay: false }
      },
      {
        path: 'login',
        canActivate: [UserAuthStateGuard],
        loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule),
        data: { preload: true, delay: false }
      },


      {
        path: 'registration',
        canActivate: [UserAuthStateGuard],
        loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule),
        data: { preload: false, delay: false }
      },

      {
        path: 'cart',
        loadChildren: () => import('./user/cart/cart.module').then(m => m.CartModule),
        data: { preload: true, delay: false }
      },
      {
        path: 'account',
        canActivate: [UserAuthGuard],
        loadChildren: () => import('./user/account/account.module').then(m => m.AccountModule),
        data: { preload: true, delay: false }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
