import * as angular from 'angular';
import 'angular-route';  
import { LaptopService } from './services/laptop.service';
import { CartService } from './services/cart.service';
import { LoginService } from './services/login.service';

import { HomeController } from './controllers/home.controller';
import { ProductDetailController } from './controllers/product-detail.controller';
import { LoginController } from './controllers/login.controller';
import { CartController } from './controllers/cart.controller';

const app = angular.module('laptopStoreApp', ['ngRoute']);


app.config(($routeProvider: angular.route.IRouteProvider) => {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: HomeController,
      controllerAs: 'ctrl',
    })
    .when('/product/:id', {
      templateUrl: 'views/product-detail.html',
      controller: ProductDetailController,
      controllerAs: 'ctrl',
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: LoginController,
      controllerAs: 'ctrl',
    })
    .when('/cart', {
      templateUrl: 'views/cart.html',
      controller: CartController,
      controllerAs: 'ctrl',
    })
    .otherwise({
      redirectTo: '/home'
    });
});


app.service('LaptopService', LaptopService);
app.service('CartService', CartService);
app.service('LoginService', LoginService);

export default app;
