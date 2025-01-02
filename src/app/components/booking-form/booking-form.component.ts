import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Booking } from "src/app/models/booking"
import { BookingService } from 'src/app/shared/booking.service';
import { Response } from 'src/app/models/response';

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
        form.value.id_booking,
        this.typeBooking,
        form.value.name,
        form.value.tel,
        form.value.email,
        form.value.date,
        form.value.time,
        form.value.guests,
        form.value.comment,
        form.value.confirmed
      );

      this.bookingService.addBooking(nuevaReserva).subscribe((resp: Response) => {
        if (!resp.error) {
          console.log(resp);
          this.toastr.success('¡Reserva solicitada!');
        } else {
          console.log(resp);
          this.toastr.error('No se ha podido enviar la solicitud.', 'Error');
        };
      });
      form.reset();
    }
  }

  closeModal() {
    this.closeModalEvent.emit();
  }
}
