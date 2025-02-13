import { LaptopService } from '../services/laptop.service';
import { CartService } from '../services/cart.service';

export class HomeController {
  static $inject = ['LaptopService', 'CartService'];

  laptops: any[];

  constructor(private LaptopService: LaptopService, private CartService: CartService) {
    this.laptops = LaptopService.getLaptops();
  }

  addToCart(laptop) {
    this.CartService.addToCart(laptop);
  }
}
