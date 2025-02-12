app.controller("AuthController", function ($scope, $window) {
    if (!localStorage.getItem("loggedInUser")) {
        $window.location.href = "login.html"; // Redirect to login if user is not logged in
    }

    $scope.logout = function () {
        localStorage.removeItem("loggedInUser"); // Clear session
        $window.location.href = "login.html"; // Redirect to login page
    };
});

