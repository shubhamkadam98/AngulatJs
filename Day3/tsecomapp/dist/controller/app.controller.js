var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.message = 'Shubz Store';
        this.users = [
            { name: 'Shubham Kadam', email: 'shubham@gmail.com' },
            { name: 'Sushant Kadam', email: 'sushant@gmail.com' },
                ];
        $scope['vm'] = this;
    }
    MyController.$inject = ['$scope'];
    return MyController;
}());

//angular.module('myApp').controller('MyController', MyController);
