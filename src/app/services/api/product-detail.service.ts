import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetailI } from '@app/model/product-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  url: string = 'http://127.0.0.1:8000/product/product/'; // Your API URL

  constructor(private http: HttpClient) {}

  getProductDetails(productId: number): Observable<ProductDetailI> {
   
    const direccion = this.url+productId;
    return this.http.get<ProductDetailI>(direccion);
  }
}
