export class CartService {
    private cart = [];
  
    addToCart(laptop) {
      this.cart.push(laptop);
    }
  
    getCart() {
      return this.cart;
    }
  
    removeFromCart(laptop) {
      const index = this.cart.indexOf(laptop);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    }
  }
  