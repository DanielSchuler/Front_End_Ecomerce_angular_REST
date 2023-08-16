import { Injectable } from '@angular/core';
import { LoginI } from '../../model/login.interface';
import { ResponseI } from '../../model/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://127.0.0.1:8000/account/login-app/';

  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI): Observable<ResponseI> {
    const direccion = this.url;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Set the content type to JSON
    });

    return this.http.post<ResponseI>(direccion, JSON.stringify(form), { headers });
  }
}
