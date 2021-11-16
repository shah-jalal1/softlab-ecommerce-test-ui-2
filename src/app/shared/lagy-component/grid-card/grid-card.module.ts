import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCardComponent } from './grid-card.component';
import { QuickViewDialogComponent } from './quick-view-dialog/quick-view-dialog.component';



@NgModule({
  declarations: [
    GridCardComponent,
    QuickViewDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridCardModule { }
