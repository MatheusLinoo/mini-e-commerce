import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly http = inject(HttpClient);
  private readonly BASE_URL = 'http://localhost:8080/products';

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`);
  }

  create(p: Product): Observable<Product> {
    return this.http.post<Product>(`${this.BASE_URL}/product`, p);
  }

  update(p: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/update`, p);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }

}
