import  * as angular from "angular"
import 'angular-route';  

import { ProductController } from "../controllers/product.controller";
import { AuthController } from "../controllers/auth.controller";
import { ShoppingCartController } from "../controllers/shopingcart.controller";

const appModule = angular.module('ecommerce', ['ngRoute']);

appModule.config(['$routeProvider', ($routeProvider:any) => {
    $routeProvider
      .when('/auth', {
        templateUrl: 'views/login.html',  // Template for the home route
        controller: 'AuthController',  // Controller for the home route
        controllerAs: 'AuthCtrl'  // Use 'homeCtrl' as alias for the controller instance
      })
      .when('/catalog', {
        templateUrl: 'views/catalogs.html',  // Template for the about route
        controller: 'ProductController',  // Controller for the about route
        controllerAs: 'ProductCtrl'  // Use 'aboutCtrl' as alias for the controller instance
      })  
      .when('/details', {
        templateUrl: 'views/details.html',  // Template for the about route
        controller: 'ProductController',  // Controller for the about route
        controllerAs: 'ProductCtrl'  // Use 'aboutCtrl' as alias for the controller instance
      })      
      .when('/cart', {
        templateUrl: 'views/cart.html',  // Template for the about route
        controller: 'ShoppingCartController',  // Controller for the about route
        controllerAs: 'CartCtrl'  // Use 'aboutCtrl' as alias for the controller instance
      }) 
      
      .otherwise({
        redirectTo: 'catalog'  // Default route is home
      });
  }]);


appModule.controller('ProductController',ProductController);
appModule.controller('AuthController',AuthController);
appModule.controller('ShoppingCartController',ShoppingCartController)
