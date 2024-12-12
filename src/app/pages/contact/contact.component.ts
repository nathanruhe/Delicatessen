import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  reviews = [];

  constructor(private toastr: ToastrService) {}

  newContact(form: NgForm) {
    if (form.valid) {
      const newContact = {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      };

      this.toastr.success('¡Contacto enviado!');
      form.resetForm();

    } else {
      console.log("Formulario de contacto inválido");
    }
  }

  newReview(form: NgForm) {
    if (form.valid) {
      const newReview = {
        rating: form.value.rating,
        name: form.value.name,
        message: form.value.reviewMessage
      };

      this.reviews.push(newReview)

      this.toastr.success('¡Gracias por tu valoración!');
      form.resetForm();

    } else {
      console.log("Formulario de valoración inválido");
    }
  }
  
}
