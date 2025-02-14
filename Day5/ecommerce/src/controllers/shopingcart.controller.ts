import * as angular from 'angular';

export class ShoppingCartController {
  static $inject = ['$scope'];
  message: string;
  users: Array<any>;


  constructor(private $scope: IDataScope) {
    this.message = 'Welcome to TypeScript!';
    this.users=[
      { name: 'Shubham Kadma', email: 'shubham@gmail.com' },
    ];
    
    $scope['data'] = this;
  }
}


//angular.module('myApp').controller('MyController', MyController);
