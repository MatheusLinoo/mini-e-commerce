import { User } from './user';

export interface Category {
  id: number;
  nome: string;
}

export interface Product {
  id?: number;
  nome: string;        
  preco: number;       
  sku: string;         
  descricao?: string;
  ativo?: boolean;
  categoria?: Category; 
  categoriaId?: number; 
}