import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "../../../material/material.module";


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MaterialModule
  ]
})
export class RegistrationModule { }
