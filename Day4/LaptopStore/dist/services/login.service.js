System.register([], function (exports_1, context_1) {
    "use strict";
    var LoginService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            LoginService = /** @class */ (function () {
                function LoginService() {
                }
                LoginService.prototype.authenticate = function (username, password) {
                    return username === 'admin' && password === 'password'; // Simple mock authentication
                };
                return LoginService;
            }());
             
        }
    };
});
