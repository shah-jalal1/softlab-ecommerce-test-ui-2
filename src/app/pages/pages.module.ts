import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import { AccountComponent } from './user/account/account.component';
import {MenuModule} from "../core/menu/menu.module";
import { ImageCropComponent } from './user/image-crop/image-crop.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ImageCropperModule} from "ngx-image-cropper";



@NgModule({
  declarations: [
    PagesComponent,
    AccountComponent,
    ImageCropComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MenuModule,
    MatProgressSpinnerModule,
    ImageCropperModule,

  ]
})
export class PagesModule { }
