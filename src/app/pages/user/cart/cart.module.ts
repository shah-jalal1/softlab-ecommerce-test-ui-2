import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: CartComponent}
];

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
