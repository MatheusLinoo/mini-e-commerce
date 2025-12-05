import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  private readonly service = inject(ProductService);
  private readonly cart = inject(CartService);
  private readonly router = inject(Router);

  products: Product[] = [];
  loading = false;

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading = true;
    this.service.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  onEdit(p: Product) {
    this.router.navigate(['/products', p.id, 'edit']);
  }

  onDelete(p: Product) {
    if (!p.id) return;
    if (!confirm(`Excluir "${p.name}"?`)) return;

    this.service.delete(p.id).subscribe(() => {
      this.products = this.products.filter(x => x.id !== p.id);
    });
  }

  onAddToCart(p: Product) {
    this.cart.add(p);
  }


}
