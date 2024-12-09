import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router: Router, private authService: AuthService) {}

  userAdmin = {
    user: "nathan",
    password: "1234"
  }

  admin(form: NgForm) {
    if (form.valid) {
      const newAdmin = {
        user: form.value.user,
        password: form.value.password,
      };

      if (newAdmin.user === this.userAdmin.user && newAdmin.password === this.userAdmin.password) {
        console.log("Sesión iniciada");
        this.authService.login();
        form.resetForm();
        this.router.navigate(['/dashboard']);
      } else {
        console.log("¡Error al iniciar sesión!");
        form.form.setErrors({ invalidLogin: true });
      }
    } else {
      console.log("Formulario inválido");
    }
  }
}
