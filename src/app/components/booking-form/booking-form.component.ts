import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {

  @Input() typeBooking: string = '';
  @Output() closeModalEvent = new EventEmitter<void>();

  public bookingRestaurant: any[] = [];
  public bookingPub: any[] = [];
  public bookingPrivate: any[] = [];

  constructor(private toastr: ToastrService) {}

  booking(form: NgForm) {
    if (form.valid) {
      const nuevaReserva = {
        tipo: this.typeBooking,
        name: form.value.name,
        tel: form.value.tel,
        email: form.value.email,
        date: form.value.date,
        time: form.value.time,
        guests: form.value.guests,
        comment: form.value.comment
      };

      if (this.typeBooking === 'Restaurante') {
        this.bookingRestaurant.push(nuevaReserva);
      } else if (this.typeBooking === 'Pub') {
        this.bookingPub.push(nuevaReserva);
      } else if (this.typeBooking === 'Privado') {
        this.bookingPrivate.push(nuevaReserva);
      }

      this.toastr.success('¡Reserva solicitada!');
      form.reset();
      
    } else {
      this.toastr.error('No se ha podido enviar la solicitud.', 'Error');
    }
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}
