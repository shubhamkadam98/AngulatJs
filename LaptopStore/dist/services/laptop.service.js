System.register([], function (exports_1, context_1) {
    "use strict";
    var LaptopService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            LaptopService = /** @class */ (function () {
                function LaptopService() {
                    this.laptops = [
                        { id: 1, name: 'Dell XPS 13', price: 999, description: 'A powerful laptop with a sleek design.', image: 'dell-xps-13.jpg' },
                        { id: 2, name: 'MacBook Pro', price: 1299, description: 'A premium laptop from Apple.', image: 'macbook-pro.jpg' },
                        { id: 3, name: 'HP Spectre x360', price: 899, description: 'A versatile laptop with great performance.', image: 'hp-spectre.jpg' }
                    ];
                }
                LaptopService.prototype.getLaptops = function () {
                    return this.laptops;
                };
                LaptopService.prototype.getLaptopById = function (id) {
                    return this.laptops.find(function (laptop) { return laptop.id === id; });
                };
                return LaptopService;
            }());
             
        }
    };
});
