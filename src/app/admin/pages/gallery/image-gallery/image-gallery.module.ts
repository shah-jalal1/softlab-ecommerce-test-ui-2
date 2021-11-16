import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageGalleryRoutingModule } from './image-gallery-routing.module';
import { ImageGalleryComponent } from './image-gallery.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {MaterialModule} from "../../../../material/material.module";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxDropzoneModule} from "ngx-dropzone";


@NgModule({
  declarations: [
    ImageGalleryComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    ImageGalleryRoutingModule,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDropzoneModule
  ]
})
export class ImageGalleryModule { }
