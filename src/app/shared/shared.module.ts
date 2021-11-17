import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogeComponent } from './components/ui/confirm-dialoge/confirm-dialoge.component';
import { SnackbarNotificationComponent } from './components/ui/snackbar-notification/snackbar-notification.component';
import { ConfirmDailogComponent } from './components/ui/confirm-dailog/confirm-dailog.component';
import {PipesModule} from './pipes/pipes.module';
import {ProductCardOneModule} from "./lazy-component/product-card-one/product-card-one.module";
import { CartViewDialogComponent } from './components/cart-view-dialog/cart-view-dialog.component';
import { BottomSheetViewComponent } from './components/ui/bottom-sheet-view/bottom-sheet-view.component';
import {GridCardModule} from "./lazy-component/grid-card/grid-card.module";
import { BreadcrumbComponent } from './lazy-component/breadcrumb/breadcrumb.component';
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ProductCardTwoModule} from "./lazy-component/product-card-two/product-card-two.module";


@NgModule({
  declarations: [
    ConfirmDialogeComponent,
    SnackbarNotificationComponent,
    ConfirmDailogComponent,
    CartViewDialogComponent,
    BottomSheetViewComponent,
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ProductCardOneModule,
    ProductCardTwoModule,
    GridCardModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
