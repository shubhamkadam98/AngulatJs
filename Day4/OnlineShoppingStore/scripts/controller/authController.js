function AuthController() {
    var self = this;
    self.username = '';
    self.password = '';
    self.loginError = false;
    
    // Sample credentials for demonstration
    const validUsername = 'user123';
    const validPassword = 'password123';

    // Check if the user is logged in
    self.isLoggedIn = function() {
        return !!localStorage.getItem('isLoggedIn');
    };

    // Login function
    self.login = function() {
        if (self.username === validUsername && self.password === validPassword) {
            localStorage.setItem('isLoggedIn', true);
            self.loginError = false;
        } else {
            self.loginError = true;
        }
    };

    // Logout function
    self.logout = function() {
        localStorage.removeItem('isLoggedIn');
        self.username = '';
        self.password = '';
    };
}
