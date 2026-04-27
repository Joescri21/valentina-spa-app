
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  id: number;
  email: string;
  role: 'admin' | 'client';
  name: string;
  password?: string; // Solo para la simulación local
}

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private mockUser: User[] = [
    {
      id: 1,
      email: 'admin@valentinaspa.com',
      password: '123', role: 'admin',
      name: 'Admin Valentina'
    },
    {
      id: 2,
      email: 'cliente@correo.com',
      password: '123',
      role: 'client',
      name: 'Joel Client'
    }
  ]

  constructor(private router: Router) { }

  login(email: string, password: string): boolean{
    const user = this.mockUser.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify({
        email: user.email,
        role: user.role,
        name: user.name
      }));
      return true;
  }
  return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getUserRole(): string | null {
    const User = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return User.role || null;
  }


}
