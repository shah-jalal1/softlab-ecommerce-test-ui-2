import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {ProductCardOneModule} from "../../shared/lazy-component/product-card-one/product-card-one.module";
import {NgxPaginationModule} from "ngx-pagination";
import {MaterialModule} from "../../material/material.module";
// import {GridCardModule} from "../../shared/lagy-component/grid-card/grid-card.module";
import {GridCardModule} from "../../shared/lazy-component/grid-card/grid-card.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductCardOneModule,
    NgxPaginationModule,
    MaterialModule,
    GridCardModule,
    GridCardModule
  ]
})
export class HomeModule { }
