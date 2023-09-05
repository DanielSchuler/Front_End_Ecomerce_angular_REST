// product-list.component.ts
import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { Router,ActivatedRoute } from '@angular/router';
import { ProductService } from '@app/services/api/product.service';
import { ProductI } from '@app/model/product.interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductI[] = [];

  constructor(private productService: ProductService,
    private activatedroute: ActivatedRoute, //Inject ActivatedRoute
    private route: Router
  ) {}

  ngOnInit(): void {
    
    this.activatedroute.queryParams.subscribe(params => {
      const page = params['p'] || 1; // Get the 'p' parameter or default to 1
    this.productService.getProducts(page).subscribe((response: any) => {
        console.log()
        this.products = response.results;
        console.log(this.products)
      });
    });
  }

  productDetail(id: number): void {
    console.log(id)
    this.route.navigate(['product',id]);

  }

 
  
}
