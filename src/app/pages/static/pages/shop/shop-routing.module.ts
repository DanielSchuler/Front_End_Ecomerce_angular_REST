import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';

import { ProductDetailComponent } from '@app/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    
  },
  {
    path:'product/:id',
    component: ProductDetailComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}