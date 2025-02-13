import { CartService } from '../services/cart.service';

export class CartController {
  static $inject = ['CartService'];

  cart: any[];

  constructor(private CartService: CartService) {
    this.cart = CartService.getCart();
  }

  removeFromCart(laptop) {
    this.CartService.removeFromCart(laptop);
  }
}
