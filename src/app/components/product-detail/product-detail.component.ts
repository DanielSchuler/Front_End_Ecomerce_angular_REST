import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '@app/services/api/product-detail.service';

import { ProductDetailI } from '@app/model/product-detail.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductDetailI;

  constructor(
    private route: ActivatedRoute,
    private productDetailService: ProductDetailService
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id');
    this.productDetailService.getProductDetails(productId).subscribe(data => {
      this.product = data;
    });
  }
}
