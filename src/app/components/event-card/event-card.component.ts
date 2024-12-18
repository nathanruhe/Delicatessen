import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { Event } from "src/app/models/event"

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  events: Event[] = [];

  constructor(public eventService: EventService){}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
