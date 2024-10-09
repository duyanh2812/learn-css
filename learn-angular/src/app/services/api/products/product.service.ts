import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product-reponse';
import { ProductRequest } from '../models/product-request';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {}

  getAllProductsWithLimit(limit: number = 5): Observable<ProductResponse[]> {
    const productUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<ProductResponse[]>(productUrl);
  }

  addNewProduct(product: ProductRequest): Observable<ProductResponse> {
    const productUrl: string = `${this.baseUrl}productssss`;
    return this.http.post<ProductResponse>(productUrl, product);
  }
}
