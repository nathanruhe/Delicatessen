import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/shared/contact.service';
import { Contact } from "src/app/models/contact"
import { ReviewService } from 'src/app/shared/review.service';
import { Review } from "src/app/models/review"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private toastr: ToastrService, private contactService: ContactService, private reviewService: ReviewService) {}

  newContact(form: NgForm) {
    if (form.valid) {
      const newContact = new Contact (
        form.value.name,
        form.value.email,
        form.value.subject,
        form.value.message
      );

      this.contactService.addContact(newContact);
      this.toastr.success('¡Contacto enviado!');
      form.resetForm();

    } else {
      console.log("Formulario de contacto inválido");
    }
  }

  newReview(form: NgForm) {
    if (form.valid) {
      const newReview = new Review (
        form.value.rating,
        form.value.name,
        form.value.message
      );

      this.reviewService.addReview(newReview);
      this.toastr.success('¡Gracias por tu valoración!');
      form.resetForm();

    } else {
      console.log("Formulario de valoración inválido");
    }
  }
  
}
