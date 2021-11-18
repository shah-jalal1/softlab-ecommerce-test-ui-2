import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {PipesModule} from "../../../shared/pipes/pipes.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FlexLayoutModule,
    PipesModule,
    FormsModule
  ]
})
export class CartModule { }
