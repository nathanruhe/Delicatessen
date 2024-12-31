import { Component } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { Event } from 'src/app/models/event';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  public allEvents: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((resp: Response) => {
      this.allEvents = resp.dataEvent;
    })
  }
}
