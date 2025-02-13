function ProductController() {
    var self = this;

    // List of laptops for sale
    self.products = [
        { name: 'Dell XPS 13', description: 'Powerful 13" Laptop', price: 1200, image: 'https://via.placeholder.com/150' },
        { name: 'MacBook Pro 13', description: '13" Retina Display Laptop', price: 1400, image: 'https://via.placeholder.com/150' },
        { name: 'HP Spectre x360', description: 'Convertible Laptop', price: 1500, image: 'https://via.placeholder.com/150' }
    ];

    // Cart array
    self.cart = [];

    // Add product to cart
    self.addToCart = function(product) {
        var found = false;
        for (var i = 0; i < self.cart.length; i++) {
            if (self.cart[i].name === product.name) {
                self.cart[i].quantity += 1;
                found = true;
                break;
            }
        }
        if (!found) {
            self.cart.push({
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
    };

    // Remove product from cart
    self.removeFromCart = function(item) {
        var index = self.cart.indexOf(item);
        if (index !== -1) {
            self.cart.splice(index, 1);
        }
    };

    // Get the total price of the cart
    self.getTotal = function() {
        var total = 0;
        for (var i = 0; i < self.cart.length; i++) {
            total += self.cart[i].price * self.cart[i].quantity;
        }
        return total;
    };

    // Clear the cart
    self.clearCart = function() {
        self.cart = [];
    };

    // Checkout function
    self.checkout = function() {
        if (self.cart.length === 0) {
            alert("Your cart is empty. Please add products to checkout.");
        } else {
            alert("Proceeding to checkout...\nTotal: " + self.getTotal());
            self.clearCart();
        }
    };
}
