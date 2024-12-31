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

  public restauranteColor: number[] = [];
  public pubColor: number[] = [];
  public privateColor: number[] = [];

  public isAcceptedRestaurant: boolean[] = [];
  public isAcceptedPub: boolean[] = [];
  public isAcceptedPrivate: boolean[] = [];

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

    this.bookingRestaurant = this.bookingService.getBooking('Restaurante')
    this.bookingPub = this.bookingService.getBooking('Pub')
    this.bookingPrivate = this.bookingService.getBooking('Privado')

    this.isAcceptedRestaurant = this.bookingRestaurant.map(() => false);
    this.isAcceptedPub = this.bookingPub.map(() => false);
    this.isAcceptedPrivate = this.bookingPrivate.map(() => false);
  }

  public background (type: string, index: number): void {
    if (type === 'restaurant') {
      const indexInArray = this.restauranteColor.indexOf(index);
      if (indexInArray === -1) {
        this.restauranteColor.push(index);
      } else {
        this.restauranteColor.splice(indexInArray, 1);
      }
    } else if (type === 'pub') {
      const indexInArray = this.pubColor.indexOf(index);
      if (indexInArray === -1) {
        this.pubColor.push(index);
      } else {
        this.pubColor.splice(indexInArray, 1);
      }
    } else if (type === 'private') {
      const indexInArray = this.privateColor.indexOf(index);
      if (indexInArray === -1) {
        this.privateColor.push(index);
      } else {
        this.privateColor.splice(indexInArray, 1);
      }
    }
  }

  public acceptBooking(type: string, index: number): void {
    if (type === 'restaurant') {
      this.isAcceptedRestaurant[index] = !this.isAcceptedRestaurant[index];
    } else if (type === 'pub') {
      this.isAcceptedPub[index] = !this.isAcceptedPub[index];
    } else if (type === 'private') {
      this.isAcceptedPrivate[index] = !this.isAcceptedPrivate[index];
    }
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
    if (this.bookingToDelete || this.eventToDelete) {
      this.bookingService.delete(this.bookingToDelete);
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
      this.showConfirmationModal = false;
      this.bookingToDelete = null;
      this.eventToDelete = null;
    }
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
