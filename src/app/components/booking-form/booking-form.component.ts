import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Booking } from "src/app/models/booking"
import { BookingService } from 'src/app/shared/booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent {

  @Input() typeBooking: string = '';
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(private toastr: ToastrService, private bookingService: BookingService) {}

  booking(form: NgForm) {
    if (form.valid) {
      const nuevaReserva = new Booking (
        this.typeBooking,
        form.value.name,
        form.value.tel,
        form.value.email,
        form.value.date,
        form.value.time,
        form.value.guests,
        form.value.comment
      );

      this.bookingService.addBooking(nuevaReserva);
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
