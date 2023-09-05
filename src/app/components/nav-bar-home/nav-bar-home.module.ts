import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarHomeComponent } from './nav-bar-home.component';



@NgModule({
  declarations: [NavBarHomeComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[NavBarHomeComponent]
})
export class NavBarHomeModule { }
