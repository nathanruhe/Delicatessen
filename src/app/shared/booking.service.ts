import { Injectable } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  public getBooking() {
    return this.http.get(this.url + "/dashboard");
  };

  public addBooking(booking: Booking) {
    return this.http.post(this.url + "/booking", booking);
  };

  public updateBookingStatus(idBooking: number, confirmed: boolean) {
    return this.http.put(this.url + "/dashboard/status", { id_booking: idBooking, confirmed });
}

  public deleteBooking(idBooking: number) {
    return this.http.delete(`${this.url}/dashboard`, {body: {id_booking: idBooking}})
  };
}
