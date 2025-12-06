import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private readonly cart = inject(CartService);

  get items() {
    return this.cart.items();
  }

  get total() {
    return this.cart.total();
  }

  remove(id: number) {
    this.cart.remove(id);
  }

  clear() {
    this.cart.clear();
  }

}
