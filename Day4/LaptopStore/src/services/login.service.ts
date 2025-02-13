export class LoginService {
    authenticate(username: string, password: string) {
      return username === 'admin' && password === 'password';  // Simple mock authentication
    }
  }
  