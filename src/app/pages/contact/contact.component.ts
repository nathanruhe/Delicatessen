import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  reviews = [
    { rating: "5", 
      name: "Alberto Garcia", 
      message: '¡Una experiencia increíble! El servicio fue excelente y la comida estuvo deliciosa. Recomiendo especialmente la pasta con mariscos, ¡espectacular!' 
    },
    { rating: "4", 
      name: "Carlos Perez", 
      message: 'El lugar tiene un ambiente acogedor y la comida estuvo muy buena, aunque el tiempo de espera fue un poco largo. Ideal para una cena tranquila.' 
    },
    { rating: "3", 
      name: "Maria Lopez", 
      message: 'La comida estaba bien, pero esperaba un poco más de sabor en algunos platos. El servicio fue amable, aunque un poco lento en algunos momentos.' 
    },
    { rating: "5", 
      name: "Sofia Fernandez", 
      message: 'Celebramos un evento privado y todo salió perfecto. El personal estuvo muy atento. El banquete fue exquisito, nuestros invitados quedaron encantados.' 
    },
  ];

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
