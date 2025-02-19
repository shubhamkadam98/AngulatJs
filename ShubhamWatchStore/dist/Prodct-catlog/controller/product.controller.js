var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
 
var ProductController = /** @class */ (function () {
    function ProductController(productService, $window) {
        this.productService = productService;
        this.$window = $window;
        this.products = [];
        this.cart = [];
        this.loggedInUserId = null;
        this.loadProducts();
        this.loadCart();
        this.$window.scrollTo(0, 0);
    }
    ProductController.prototype.loadProducts = function () {
        var _this = this;
        this.productService.getProducts().then(function (data) {
            _this.products = data;
        });
    };
    ProductController.prototype.loadCart = function () {
        var _this = this;
        this.loggedInUserId = localStorage.getItem('loggedInUserId');
        if (!this.loggedInUserId)
            return;
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        var user = users.find(function (u) { return String(u.id) === String(_this.loggedInUserId); });
        this.cart = user ? user.cart || [] : [];
    };
    ProductController.prototype.addToCart = function (product) {
        var _this = this;
        this.loggedInUserId = localStorage.getItem('loggedInUserId');
        if (!this.loggedInUserId) {
            alert('Please log in to add items to the cart.');
            return;
        }
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        var userIndex = users.findIndex(function (user) { return String(user.id) === String(_this.loggedInUserId); });
        if (userIndex === -1)
            return;
        if (!users[userIndex].cart) {
            users[userIndex].cart = [];
        }
        var existingProduct = users[userIndex].cart.find(function (p) { return p.id === product.id; });
        if (existingProduct) {
            existingProduct.quantity = (existingProduct.quantity || 0) + 1;
        }
        else {
            users[userIndex].cart.push(__assign(__assign({}, product), { quantity: 1 }));
        }
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUserCart', JSON.stringify(users[userIndex].cart));
        this.cart = users[userIndex].cart;
        console.log('Updated Cart:', this.cart);
    };
    ProductController.prototype.updateQuantity = function (product, amount) {
        var _this = this;
        this.loggedInUserId = localStorage.getItem('loggedInUserId');
        if (!this.loggedInUserId)
            return;
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        var userIndex = users.findIndex(function (user) { return String(user.id) === String(_this.loggedInUserId); });
        if (userIndex === -1)
            return;
        var cartItem = users[userIndex].cart.find(function (p) { return p.id === product.id; });
        var productItem = this.products.find(function (p) { return p.id === product.id; }); // Find in products array
        if (cartItem) {
            cartItem.quantity = (cartItem.quantity || 0) + amount;
            if (cartItem.quantity <= 0) {
                users[userIndex].cart = users[userIndex].cart.filter(function (p) { return p.id !== product.id; });
            }
        }
        if (productItem) {
            productItem.quantity = cartItem ? cartItem.quantity : 0; // Sync with cart
        }
        // Update localStorage
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUserCart', JSON.stringify(users[userIndex].cart));
        this.cart = users[userIndex].cart;
    };
    ProductController.prototype.removeFromCart = function (product) {
        var _this = this;
        this.loggedInUserId = localStorage.getItem('loggedInUserId');
        if (!this.loggedInUserId)
            return;
        var users = JSON.parse(localStorage.getItem('users') || '[]');
        var userIndex = users.findIndex(function (user) { return String(user.id) === String(_this.loggedInUserId); });
        if (userIndex === -1)
            return;
        users[userIndex].cart = users[userIndex].cart.filter(function (p) { return p.id !== product.id; });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUserCart', JSON.stringify(users[userIndex].cart));
        this.cart = users[userIndex].cart;
    };
    ProductController.prototype.logout = function () {
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('loggedInUserId');
        localStorage.removeItem('loggedInUserCart');
        this.$window.location.href = "#!/login";
    };
    ProductController.$inject = ['ProductService', '$window'];
    return ProductController;
}());
 
angular.module('ecomApp').controller('ProductController', ProductController);
