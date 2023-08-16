// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/services/api/product.service';
import { ProductI } from '@app/model/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductI[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.results;
    });
  }
  
  
}
