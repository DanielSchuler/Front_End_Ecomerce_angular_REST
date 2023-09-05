import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductDetailService } from '@app/services/api/product-detail.service';
import { ProductDetailI } from '@app/model/product-detail.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  producto: ProductDetailI = {
    product:{id: 0,
    //thumbnail: '',
    name: 'daniel',
    photo: '',
    description: '',
    price: '',
    compare_price: '',
    quantity: 0,
    sold: 0,
    date_created: '',
    date_updated: '',
    category: 0}
  };

  //product: ProductDetailI| null = null; ; 
  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    //private http: HttpClient,
    private productDetailService: ProductDetailService
  ) {}

 
  ngOnInit(): void {

    const productIdParam = this.activeroute.snapshot.paramMap.get('id');
    const productId = productIdParam ? +productIdParam : null;

    if (productId !== null) {
        //this.productDetailService.getProductDetails(productId).subscribe((response: ProductDetailI) => {
          this.productDetailService.getProductDetails(productId).subscribe(data => {
            // Your subscription logic here

            this.producto = data;
            //this.product = response;
            console.log('Received data:', data); // Log the received data
            console.log('Product details retrieved:', this.producto.product.id); //
            console.log('Product id retrieved:',);
        });
    } else {
        // Handle the case when productId is null
        // For example, display an error message or redirect to a different page
    }
    //let token = this.getToken()
    
    
    

    
  }


  //para mas adelante
  getToken(){
    return localStorage.getItem('token');
  }


/*
  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    
    this.productDetailService.getProductDetails(productId).subscribe((response: ProductDetailI) => {

      this.product = response;
      console.log('Product details retrieved:', this.product);
    });
  }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    
    this.productDetailService.getProductDetails(productId).subscribe((response: ProductDetailI) => {

      this.product = response;
      console.log('este es la informacion del producto') 
      console.log(this.product) 
    });
  }*/
  
}
