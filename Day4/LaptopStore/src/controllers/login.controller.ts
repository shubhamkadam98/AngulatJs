import { LoginService } from '../services/login.service';

export class LoginController {
  static $inject = ['LoginService'];

  username: string;
  password: string;
  errorMessage: string;

  constructor(private LoginService: LoginService) {}

  login() {
    if (this.LoginService.authenticate(this.username, this.password)) {
      window.location.href = '#/home';
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
