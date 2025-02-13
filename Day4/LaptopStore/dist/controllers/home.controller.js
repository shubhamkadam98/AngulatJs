System.register([], function (exports_1, context_1) {
    "use strict";
    var HomeController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            HomeController = /** @class */ (function () {
                function HomeController(LaptopService, CartService) {
                    this.LaptopService = LaptopService;
                    this.CartService = CartService;
                    this.laptops = LaptopService.getLaptops();
                }
                HomeController.prototype.addToCart = function (laptop) {
                    this.CartService.addToCart(laptop);
                };
                HomeController.$inject = ['LaptopService', 'CartService'];
                return HomeController;
            }());
             
        }
    };
});
