import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImageGalleryComponent} from './image-gallery.component';

const routes: Routes = [
  {path: '', component: ImageGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageGalleryRoutingModule { }
