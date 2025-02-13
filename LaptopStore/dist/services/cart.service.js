System.register([], function (exports_1, context_1) {
    "use strict";
    var CartService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CartService = /** @class */ (function () {
                function CartService() {
                    this.cart = [];
                }
                CartService.prototype.addToCart = function (laptop) {
                    this.cart.push(laptop);
                };
                CartService.prototype.getCart = function () {
                    return this.cart;
                };
                CartService.prototype.removeFromCart = function (laptop) {
                    var index = this.cart.indexOf(laptop);
                    if (index > -1) {
                        this.cart.splice(index, 1);
                    }
                };
                return CartService;
            }());
             
        }
    };
});
