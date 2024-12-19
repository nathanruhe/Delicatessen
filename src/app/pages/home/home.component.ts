import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { Event } from 'src/app/models/event';

declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public upcomingEvents: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    var homeSwiper = new Swiper(".home-swiper", {
      spaceBetween: 30,
      effect: "slide",
      loop: "true",
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });

    this.upcomingEvents = this.eventService.getEvents().slice(0, 2);
  }
}