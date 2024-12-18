import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from "src/app/models/admin"
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private adminService: AdminService) {}

  admin(form: NgForm) {
    if (form.valid) {
      const newAdmin = new Admin (
        form.value.user,
        form.value.password,
      );

      this.adminService.isAdmin(newAdmin);
      form.resetForm();

    } else {
      form.form.setErrors({ invalidLogin: true });
      console.log("Formulario inválido");
    }
  }
}
