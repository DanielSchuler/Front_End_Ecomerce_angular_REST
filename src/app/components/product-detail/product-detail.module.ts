import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './product-detail.component';
import { HeaderModule } from '@app/shared/plantillas/header/header.module';
import { FooterModule } from '@app/shared/plantillas/footer/footer.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule 
  ],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule { }
