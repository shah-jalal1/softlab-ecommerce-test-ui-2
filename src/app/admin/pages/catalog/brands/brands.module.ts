import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { AddNewBrandComponent } from './add-new-brand/add-new-brand.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MaterialModule} from "../../../../material/material.module";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxSpinnerModule} from "ngx-spinner";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    BrandsComponent,
    AddNewBrandComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    MatProgressSpinnerModule
  ]
})
export class BrandsModule { }
