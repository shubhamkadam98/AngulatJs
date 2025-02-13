System.register(["angular", "angular-route", "./services/laptop.service", "./services/cart.service", "./services/login.service", "./controllers/home.controller", "./controllers/product-detail.controller", "./controllers/login.controller", "./controllers/cart.controller"], function (exports_1, context_1) {
    "use strict";
    var angular, laptop_service_1, cart_service_1, login_service_1, home_controller_1, product_detail_controller_1, login_controller_1, cart_controller_1, app;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {
            },
            function (laptop_service_1_1) {
                laptop_service_1 = laptop_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (home_controller_1_1) {
                home_controller_1 = home_controller_1_1;
            },
            function (product_detail_controller_1_1) {
                product_detail_controller_1 = product_detail_controller_1_1;
            },
            function (login_controller_1_1) {
                login_controller_1 = login_controller_1_1;
            },
            function (cart_controller_1_1) {
                cart_controller_1 = cart_controller_1_1;
            }
        ],
        execute: function () {
            app = angular.module('laptopStoreApp', ['ngRoute']);
           
            app.config(function ($routeProvider) {
                $routeProvider
                    .when('/home', {
                    templateUrl: 'views/home.html',
                    controller: home_controller_1.HomeController,
                    controllerAs: 'ctrl',
                })
                    .when('/product/:id', {
                    templateUrl: 'views/product-detail.html',
                    controller: product_detail_controller_1.ProductDetailController,
                    controllerAs: 'ctrl',
                })
                    .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: login_controller_1.LoginController,
                    controllerAs: 'ctrl',
                })
                    .when('/cart', {
                    templateUrl: 'views/cart.html',
                    controller: cart_controller_1.CartController,
                    controllerAs: 'ctrl',
                })
                    .otherwise({
                    redirectTo: '/home'
                });
            });
            
            app.service('LaptopService', laptop_service_1.LaptopService);
            app.service('CartService', cart_service_1.CartService);
            app.service('LoginService', login_service_1.LoginService);
            exports_1("default", app);
        }
    };
});
