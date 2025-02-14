var AuthController = /** @class */ (function () {
    function AuthController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to TypeScript!';
        this.users = [
            { name: 'Shubham Kadam', email: 'shubham@gmail.com' },
        ];
        $scope['data'] = this;
    }
    AuthController.$inject = ['$scope'];
    return AuthController;
}());

//angular.module('myApp').controller('MyController', MyController);
