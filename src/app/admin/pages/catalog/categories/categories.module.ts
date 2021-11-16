import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from "../../../../material/material.module";
import {NgxSpinnerModule} from "ngx-spinner";
import {NgxPaginationModule} from "ngx-pagination";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    CategoriesComponent,
    AddNewCategoryComponent
  ],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NgxSpinnerModule,
        NgxPaginationModule,
        MatProgressSpinnerModule
    ]
})
export class CategoriesModule { }
