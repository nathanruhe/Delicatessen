import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import { Event } from "src/app/models/event"
import { EventService } from '../../shared/event.service';
import { Booking } from "src/app/models/booking"
import { BookingService } from '../../shared/booking.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public event: Event[] = []
  public bookingRestaurant: Booking[] = []
  public bookingPub: Booking[] = []
  public bookingPrivate: Booking[] = []

  public showConfirmationModal: boolean = false;
  public bookingToDelete: Booking | null = null;
  public eventToDelete: Event | null = null;

  constructor(
    private router: Router,
    private adminService: AdminService, 
    private eventService: EventService,
    private bookingService: BookingService,
  ) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((resp: Response) => {
      this.event = resp.dataEvent;
    })

    this.bookingService.getBooking().subscribe((resp: Response) => {
      this.bookingRestaurant = resp.dataBooking.filter(booking => booking.tipo === "Restaurante");
      this.bookingPub = resp.dataBooking.filter(booking => booking.tipo === "Pub");
      this.bookingPrivate = resp.dataBooking.filter(booking => booking.tipo === "Privado");
    })
  }

  public updateStatus(type: string, index: number): void {
    let booking: Booking;

    if (type === 'restaurant') {
        booking = this.bookingRestaurant[index];
    } else if (type === 'pub') {
        booking = this.bookingPub[index];
    } else if (type === 'private') {
        booking = this.bookingPrivate[index];
    }

    const newStatus = !booking.confirmed;

    this.bookingService.updateBookingStatus(booking.id_booking, newStatus).subscribe((resp: Response) => {
        if (!resp.error) {
            booking.confirmed = newStatus;
            console.log('Estado de reserva actualizado correctamente');
        } else {
            console.log('Error al actualizar el estado de la reserva');
        }
    });
}

  public deleteBooking(booking: Booking): void {
    this.bookingToDelete = booking;
    this.showConfirmationModal = true;
  }

  public addEvent (form: NgForm): void {
    if (form.valid) {
      const newEvent = new Event (
        form.value.id_event,
        form.value.img,
        form.value.title,
        form.value.description,
        form.value.date,
        form.value.time
      );

      this.eventService.addEvent(newEvent).subscribe((resp: Response) => {
        if (!resp.error) {
          this.eventService.getEvents().subscribe((resp: Response) => {
            this.event = resp.dataEvent;
          })
          console.log(resp);
        } else {
          console.log(resp);
        }
      });
      form.resetForm();

    } else {
      console.log("Error al crear el evento");
    }
  }

  public editEvent(form: NgForm, event: Event): void {
    if (form.valid) {
      const newEvent = new Event (
        form.value.id_event,
        form.value.img,
        form.value.title,
        form.value.description,
        form.value.date,
        form.value.time
      )

      const newEventWithId = { ...newEvent, id_event: event.id_event };

      this.eventService.putEvent(newEventWithId).subscribe((resp: Response) => {
        if (!resp.error) {
          this.eventService.getEvents().subscribe((resp: Response) => {
            this.event = resp.dataEvent;
          })
          console.log(resp);
        } else {
          console.log(resp);
        };
      })

      form.resetForm();
    } else {
      console.log("Error al editar el evento");
    }
  }

  public deleteEvent(event: Event): void {
    this.eventToDelete = event;
    this.showConfirmationModal = true;
  }

  public confirmDelete(): void {
    if (this.eventToDelete) {
      this.eventService.deleteEvent(this.eventToDelete.id_event).subscribe((resp: Response) => {
        if (!resp.error) {
            this.eventService.getEvents().subscribe((resp: Response) => {
                this.event = resp.dataEvent;
            });
            console.log('Evento eliminado correctamente');
        } else {
            console.log('Error al eliminar el evento');
        }
      });
    }

    if (this.bookingToDelete) {
      this.bookingService.deleteBooking(this.bookingToDelete.id_booking).subscribe((resp: Response) => {
        if (!resp.error) {
            this.bookingService.getBooking().subscribe((resp: Response) => {
              this.bookingRestaurant = resp.dataBooking.filter(booking => booking.tipo === "Restaurante");
              this.bookingPub = resp.dataBooking.filter(booking => booking.tipo === "Pub");
              this.bookingPrivate = resp.dataBooking.filter(booking => booking.tipo === "Privado");
            });
            console.log('Reserva eliminada correctamente');
        } else {
            console.log('Error al eliminar la reserva');
        }
      });
    }
    this.showConfirmationModal = false;
    this.bookingToDelete = null;
    this.eventToDelete = null;
  }

  public cancelDelete(): void {
    this.showConfirmationModal = false;
    this.bookingToDelete = null;
    this.eventToDelete = null;
  }

  public logout() {
    this.adminService.logout();
    this.router.navigateByUrl("/")
  }
}
