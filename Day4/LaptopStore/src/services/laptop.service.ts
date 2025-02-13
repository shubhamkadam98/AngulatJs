export class LaptopService {
    private laptops = [
      { id: 1, name: 'Dell XPS 13', price: 999, description: 'A powerful laptop with a sleek design.', image: 'dell-xps-13.jpg' },
      { id: 2, name: 'MacBook Pro', price: 1299, description: 'A premium laptop from Apple.', image: 'macbook-pro.jpg' },
      { id: 3, name: 'HP Spectre x360', price: 899, description: 'A versatile laptop with great performance.', image: 'hp-spectre.jpg' }
    ];
  
    getLaptops() {
      return this.laptops;
    }
  
    getLaptopById(id: number) {
      return this.laptops.find(laptop => laptop.id === id);
    }
  }
  