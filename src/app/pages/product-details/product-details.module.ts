import { SwiperModule } from 'swiper/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {ProductDetailsComponent} from './product-details.component';
import {MaterialModule} from '../../material/material.module';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductCardTwoModule} from '../../shared/lazy-component/product-card-two/product-card-two.module';
// import {StarRatingModule} from '../../shared/lazy-component/star-rating/star-rating.module';
// import {RatingAndReviewComponent} from './rating-and-review/rating-and-review.component';
import {ProductCardOneModule} from '../../shared/lazy-component/product-card-one/product-card-one.module';
import {PipesModule} from '../../shared/pipes/pipes.module';
import {BreadcrumbModule} from '../../shared/lazy-component/breadcrumb/breadcrumb.module';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxSpinnerModule} from "ngx-spinner";
import {MenuModule} from "../../core/menu/menu.module";
// import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
// import {ShareIconsModule} from 'ngx-sharebuttons/icons';
// import { DiscussionFormComponent } from './discussion/discussion-form/discussion-form.component';
// import { DiscussionItemComponent } from './discussion/discussion-item/discussion-item.component';
// import { DiscussionReplyItemComponent } from './discussion/discussion-reply-item/discussion-reply-item.component';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
    imports: [
        CommonModule,
        ProductDetailsRoutingModule,
        MaterialModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ProductCardTwoModule,
        // StarRatingModule,
        ProductCardOneModule,
        PipesModule,
        BreadcrumbModule,
        // ShareButtonsModule,
        // ShareIconsModule,
        SwiperModule,
        FlexLayoutModule,
        NgxSpinnerModule,
        MenuModule
    ]
})
export class ProductDetailsModule { }
