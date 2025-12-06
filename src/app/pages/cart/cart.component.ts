import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 
  cartService = inject(CartService);

  items = this.cartService.items; 
  total = this.cartService.total; 

  remove(id: number | undefined): void {
    if (id !== undefined) {
      this.cartService.remove(id);
    }
  }

  clear(): void {
    this.cartService.clear();
  }
  
  getTotal(): number {
    return this.cartService.total();
  }
}
