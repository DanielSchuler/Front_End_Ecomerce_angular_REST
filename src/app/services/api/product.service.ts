// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductI } from '../../model/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string  = 'http://127.0.0.1:8000/product/list/'; // Your API URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductI[]> {
    const direccion = this.url;
   
    return this.http.get<ProductI[]>(direccion);
  }
}
