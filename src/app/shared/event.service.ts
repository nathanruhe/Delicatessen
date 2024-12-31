import { Injectable } from '@angular/core';
import { Event } from "src/app/models/event"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  public getEvents() {
    return this.http.get(this.url + "/events");
  }

  public addEvent(newEvent: Event) {
    return this.http.post(this.url + "/dashboard", newEvent);
  }

  public putEvent(event: Event) {
    return this.http.put(this.url + "/dashboard", event);
  };

  public deleteEvent(eventId: number) {
    // Enviamos el id del evento en el cuerpo de la solicitud
    return this.http.delete(`${this.url}/dashboard`, {body: { id_event: eventId } 
    });
}
}
