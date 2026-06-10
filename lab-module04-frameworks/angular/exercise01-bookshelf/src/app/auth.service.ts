import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = signal(false);
  private username = signal('');

  constructor() {
    const username = localStorage.getItem('username');

    if (username) {
      this.username.set(username);
      this.isLoggedIn.set(true);
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'lemoncode' && password === '12345678') {
      localStorage.setItem('username', username);
      this.username.set(username);
      this.isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
    this.username.set('');
    this.isLoggedIn.set(false);
  }

  isLogged(): boolean {
    return this.isLoggedIn();
  }

  getUsername(): string {
    return this.username();
  }
}
