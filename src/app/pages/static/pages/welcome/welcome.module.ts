import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { ProductListModule } from '@app/components/product-list/product-list.module';
import { SidebarModule } from '@app/components/sidebar/sidebar.module';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ProductListModule,
    SidebarModule
    
  ]
})
export class WelcomeModule { }
