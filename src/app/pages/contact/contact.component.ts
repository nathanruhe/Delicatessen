import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

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

  newReview(reviewForm: NgForm) {
    if (reviewForm.valid) {
      const review = {
        rating: reviewForm.value.rating,
        message: reviewForm.value.reviewMessage
      };
  
      this.toastr.success('¡Gracias por tu valoración!');
      reviewForm.resetForm();

    } else {
      console.log("Formulario de valoración inválido");
    }
  }
  
}
