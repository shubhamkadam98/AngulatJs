authModule.controller("LoginController", function ($scope, $window) {
    $scope.user = { email: "", password: "" };

    $scope.users = [
        { email: "shubham@gmail.com", password: "cdac" },
        { email: "sushant@gmail.com", password: "123" },
        { email: "viraj@gmail.com", password: "123" }
    ];

    $scope.onValidate = function () {
        var matchedUser = $scope.users.find(
            user => user.email === $scope.user.email && user.password === $scope.user.password
        );

        if (matchedUser) {
            localStorage.setItem("loggedInUser", matchedUser.email);
            $scope.$applyAsync(function () {
                $window.location.href = "index.html"; // Redirect to product page
            });
        } else {
            $scope.errorMessage = "Invalid credentials. Please try again.";
        }
    };
});

// app.controller("LoginController", function ($scope, $window) {
//     $scope.user = { email: "", password: "" };
//     $scope.loggedInUser = localStorage.getItem("loggedInUser") || null;
//     $scope.loggedIn = $scope.loggedInUser !== null;

//     $scope.users = [
//         { email: "sujit@gmail.com", password: "sujit" },
//         { email: "abc@gmail.com", password: "234" },
//         { email: "klm@gmail.com", password: "143323" }
//     ];

//     $scope.onValidate = function () {
//         var matchedUser = $scope.users.find(
//             user => user.email === $scope.user.email && user.password === $scope.user.password
//         );

//         if (matchedUser) {
//             localStorage.setItem("loggedInUser", matchedUser.email);
//             $scope.loggedIn = true;
//             $scope.loggedInUser = matchedUser.email;

//             $scope.$applyAsync(function () {
//                 $window.location.href = "index.html"; 
//             });
//         } else {
//             alert("Invalid User");
//         }
//     };

//     $scope.logout = function () {
//         localStorage.removeItem("loggedInUser");
//         $scope.loggedIn = false;
//         $scope.loggedInUser = null;
//         $scope.user = { email: "", password: "" };

//         $scope.$applyAsync(function () {
//             $window.location.href = "login.html"; 
//         });
//     };
// });

