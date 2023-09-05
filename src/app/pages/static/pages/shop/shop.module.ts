import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductListModule } from '@app/components/product-list/product-list.module';
import { SidebarModule } from '@app/components/sidebar/sidebar.module';
import { FooterModule, HeaderModule } from '@app/shared';
import { ShopComponent } from './shop.component';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ProductListModule,
    SidebarModule,
    HeaderModule,
    FooterModule
  ]
})
export class ShopModule { }
