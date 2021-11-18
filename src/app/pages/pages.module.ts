import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import { AccountComponent } from './user/account/account.component';
import {MenuModule} from "../core/menu/menu.module";
import {CartModule} from "./user/cart/cart.module";


@NgModule({
  declarations: [
    PagesComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MenuModule,
    CartModule,

  ]
})
export class PagesModule { }
