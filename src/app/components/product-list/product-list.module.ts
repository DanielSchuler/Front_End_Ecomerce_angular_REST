import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { WelcomeRoutingModule } from '@app/pages/static/pages/welcome/welcome-routing.module';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    //RouterModule.forRoot([])
    WelcomeRoutingModule
  ],
  exports: [ProductListComponent]
})
export class ProductListModule { }
