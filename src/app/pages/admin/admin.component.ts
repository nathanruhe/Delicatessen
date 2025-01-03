import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from "src/app/models/admin"
import { AdminService } from 'src/app/shared/admin.service';
import { Response } from 'src/app/models/response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private adminService: AdminService, private router: Router) {}

  public admin(form: NgForm) {
    if (form.valid) {
      const newAdmin = new Admin(
        form.value.user,
        form.value.password,
      );

      this.adminService.isAdmin(newAdmin).subscribe((resp: Response) => {
        if (!resp.error) {
          console.log('Sesión iniciada con éxito');
          localStorage.setItem('token', resp.token);
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Error al iniciar sesión');
        }
      });
      form.resetForm();

    } else {
      form.form.setErrors({ invalidLogin: true });
      console.log("Formulario inválido");
    }
  }
}
