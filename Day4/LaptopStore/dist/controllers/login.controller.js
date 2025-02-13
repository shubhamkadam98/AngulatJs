System.register([], function (exports_1, context_1) {
    "use strict";
    var LoginController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            LoginController = /** @class */ (function () {
                function LoginController(LoginService) {
                    this.LoginService = LoginService;
                }
                LoginController.prototype.login = function () {
                    if (this.LoginService.authenticate(this.username, this.password)) {
                        window.location.href = '#/home';
                    }
                    else {
                        this.errorMessage = 'Invalid username or password';
                    }
                };
                LoginController.$inject = ['LoginService'];
                return LoginController;
            }());
             
        }
    };
});
