System.register([], function (exports_1, context_1) {
    "use strict";
    var CartController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CartController = /** @class */ (function () {
                function CartController(CartService) {
                    this.CartService = CartService;
                    this.cart = CartService.getCart();
                }
                CartController.prototype.removeFromCart = function (laptop) {
                    this.CartService.removeFromCart(laptop);
                };
                CartController.$inject = ['CartService'];
                return CartController;
            }());
             
        }
    };
});
