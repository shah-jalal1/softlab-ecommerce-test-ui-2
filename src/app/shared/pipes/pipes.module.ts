import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { CartUnitTypePipe } from './cart-unit-type.pipe';
import { CartPricePipe } from './cart-price.pipe';
import { PricePipe } from './price.pipe';
import {SafeHtmlCustomPipe} from './safe-html.pipe';
import { DiscountPipe } from './discount.pipe';
import { PriceDataPipe} from './pipe-data.pipe';



@NgModule({
    declarations: [
        SortPipe,
        CartUnitTypePipe,
        CartPricePipe,
        PricePipe,
        // SafeHtmlPipe,
        SafeHtmlCustomPipe,
        DiscountPipe,
        // PipeDataPipe,
        PriceDataPipe
    ],
  imports: [
    CommonModule
  ],
    exports: [
        SortPipe,
        CartUnitTypePipe,
        CartPricePipe,
        PricePipe,
        SafeHtmlCustomPipe,
        DiscountPipe,
        PriceDataPipe
    ]
})
export class PipesModule { }
