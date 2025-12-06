import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly BASE_URL = 'http://localhost:8080/v1/produtos';

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`);
  }

  create(product: Product): Observable<Product> {
    
    const payload = {
      produto: {
        nome: product.nome,
        descricao: product.descricao || '',
        preco: product.preco,
        sku: product.sku,
        categoriaId: product.categoriaId,
        ativo: true
      },
      quantidade: 10 
    };
    return this.http.post<Product>(this.BASE_URL, payload);
  }

  update(product: Product): Observable<Product> {
   
    const payload = {
      nome: product.nome,
      descricao: product.descricao || '',
      preco: product.preco,
      sku: product.sku,
      categoriaId: product.categoriaId,
      ativo: true
    };
    return this.http.put<Product>(`${this.BASE_URL}/${product.id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}