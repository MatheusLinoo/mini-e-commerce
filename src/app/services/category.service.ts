import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private readonly http = inject(HttpClient);
  private readonly BASE_URL = 'http://localhost:8080/v1/categorias';

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}`);
  }

  create(category: { nome: string; idCategoriaPai?: number | null }): Observable<Category> {
    return this.http.post<Category>(this.BASE_URL, category);
  }

  update(id: number, dto: { name: string; parentId?: number | null }): Observable<Category> {
    return this.http.put<Category>(`${this.BASE_URL}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
