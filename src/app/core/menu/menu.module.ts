import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from "../../material/material.module";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Header3Component } from './header3/header3.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    Header3Component
  ],
  exports: [
    HeaderComponent,
    Header3Component
  ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class MenuModule { }
