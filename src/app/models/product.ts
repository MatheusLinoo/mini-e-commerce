import { Category } from './category';
import { User } from './user';

export interface Product {
  id?: number;
  name: string;
  price: number;
  barcode?: string;
  description?: string;
  sku?: string;

  category?: Category;
  seller?: User;
}
