import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
// se importa la libreria prediseñada de spinner de angular material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
