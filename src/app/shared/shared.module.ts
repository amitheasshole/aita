import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [ LoadingOverlayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }