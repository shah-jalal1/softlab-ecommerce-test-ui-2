import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages.component";
import {CheckAuthAccessGuard} from "../../auth-guard/check-auth-access.guard";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'add-product',
        loadChildren: () => import('./products/add-product/add-product.module').then(m => m.AddProductModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'brands',
        loadChildren: () => import('./catalog/brands/brands.module').then(m => m.BrandsModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'categories',
        loadChildren: () => import('./catalog/categories/categories.module').then(m => m.CategoriesModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'image-folder',
        loadChildren: () => import('./gallery/image-folder/image-folder.module').then(m => m.ImageFolderModule),
        canActivate: [CheckAuthAccessGuard]
      },
      {
        path: 'image-gallery',
        loadChildren: () => import('./gallery/image-gallery/image-gallery.module').then(m => m.ImageGalleryModule),
        canActivate: [CheckAuthAccessGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
