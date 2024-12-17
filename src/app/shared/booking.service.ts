import { Injectable } from '@angular/core';
import { Booking } from 'src/app/models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public bookingRestaurant: Booking[] = [];
  public bookingPub: Booking[] = [];
  public bookingPrivate: Booking[] = [];

  constructor() { }

  public getBooking(type: string): Booking[] {
    if (type === 'Restaurante') {
      return this.bookingRestaurant;
    } else if (type === 'Pub') {
      return this.bookingPub;
    } else if (type === 'Privado') {
      return this.bookingPrivate;
    } else {
      return [];
    }
  }

  public addBooking(booking: Booking): void {
    if (booking.tipo === 'Restaurante') {
      this.bookingRestaurant.push(booking);
    } else if (booking.tipo === 'Pub') {
      this.bookingPub.push(booking);
    } else if (booking.tipo === 'Privado') {
      this.bookingPrivate.push(booking);
    } else {
      console.warn('Tipo de reserva no válido');
    }
  }
}
