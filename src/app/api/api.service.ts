import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private readonly httpClient: HttpClient) {
  }

  getShops(): Observable<any> {
    return this.httpClient.get<any[]>(`${environment.api}/shop/`);
  }

  getCustomers(): Observable<any> {
    return this.httpClient.get(`${environment.api}/customer/`, this.httpOptions);
  }

  loginShopOwner(data: any): Observable<any> {
    return this.httpClient.post(`${environment.api}/shop/login`, data, this.httpOptions);
  }
}
