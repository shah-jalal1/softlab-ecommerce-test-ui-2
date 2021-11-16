import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialoge',
  templateUrl: './confirm-dialoge.component.html',
  styleUrls: ['./confirm-dialoge.component.scss']
})
export class ConfirmDialogeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }


}
