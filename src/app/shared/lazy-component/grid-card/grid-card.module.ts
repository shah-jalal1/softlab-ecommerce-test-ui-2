import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCardComponent } from './grid-card.component';
import { QuickViewDialogComponent } from './quick-view-dialog/quick-view-dialog.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../../material/material.module';;
import {PipesModule} from '../../pipes/pipes.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxSpinnerModule} from 'ngx-spinner';
// import {ProductRatingViewModule} from '../product-rating-view/product-rating-view.module';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import { SwiperModule } from 'swiper/angular';




@NgModule({
  declarations: [
    GridCardComponent,
    QuickViewDialogComponent
  ],
    imports: [
        CommonModule,
        PipesModule,
      RouterModule,
      MaterialModule,
      PipesModule,
      FlexLayoutModule,
      NgxSpinnerModule,
      // ProductRatingViewModule,
      LazyLoadImageModule,
      SwiperModule
    ]
})
export class GridCardModule { }
