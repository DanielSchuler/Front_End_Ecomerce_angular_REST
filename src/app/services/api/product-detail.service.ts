import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetail } from './product-detail.model'; // Create this model interface

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  constructor(private http: HttpClient) {}

  getProductDetails(productId: number): Observable<ProductDetail> {
    const url = `http://127.0.0.1:8000/product/product/${productId}`;
    return this.http.get<ProductDetail>(url);
  }
}
