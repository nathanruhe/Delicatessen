import { Injectable } from '@angular/core';
import { Admin } from "src/app/models/admin"
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public userAdmin: Admin = {
    user: "nathan",
    password: "1234"
  }

  constructor(private router: Router, private authService: AuthService) { }

  isAdmin(newAdmin: Admin): void {
    if (newAdmin.user === this.userAdmin.user && newAdmin.password === this.userAdmin.password) {
      console.log("Sesión iniciada");
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      console.log("¡Error al iniciar sesión!");
    }
  }

  logout() {
    this.authService.logout();
  }
}
