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

  // public addEvent(newEvent: Event): void {
  //   const newId = this.events.length > 0 ? Math.max(...this.events.map(e => e.id)) + 1 : 1;
  //   newEvent.id = newId;
  //   this.events.push(newEvent);
  // }

  // public putEvent(editEvent: Event): void {
  //   const index = this.events.findIndex(event => event.id === editEvent.id);
  //   if (index !== -1) {
  //     this.events[index] = { ...editEvent };
  //   } else {
  //     console.log("Evento no encontrado para editar");
  //   }
  // }

  // public delete(event: Event): void {
  //   const index = this.events.indexOf(event);
  //   if (index !== -1) {
  //     this.events.splice(index, 1);
  //   } else {
  //     console.log("Error al eliminar el evento");
  //   }
  // }
}
