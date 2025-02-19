import * as angular from 'angular';
import 'angular-route';

import { AuthController } from './Authentication/controller/auth.controller';
import { AuthService } from './Authentication/servises/auth.servises';
import { ProductController } from './Prodct-catlog/controller/product.controller';
import { ProductService } from './Prodct-catlog/servises/product.service';
import { OrderController } from './Orders/controller/order.controller';
import {AboutController} from './Authentication/controller/about.controller';

angular.module('ecomApp', ['ngRoute'])
    .controller('AuthController', AuthController)
    .service('AuthService', AuthService)
    .controller('ProductController', ProductController)
    .service('ProductService', ProductService)
    .controller('OrderController', OrderController);
    .controller('AboutController',AboutController);
