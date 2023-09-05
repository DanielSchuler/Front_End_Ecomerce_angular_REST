// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductI } from '../../model/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://127.0.0.1:8000/product/list/'; // Your API URL

  constructor(private http: HttpClient) {}

  getProducts(page: number): Observable<ProductI[]> {
    let direccion: string;

    if (page == 1) {
      direccion = this.url;
    } else {
      direccion = this.url + '?p=' + page;
    }

    return this.http.get<ProductI[]>(direccion);
  }
}

