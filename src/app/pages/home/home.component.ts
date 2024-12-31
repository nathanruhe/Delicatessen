import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { Event } from 'src/app/models/event';
import { ReviewService } from 'src/app/shared/review.service';
import { Review } from 'src/app/models/review';
import { Response } from 'src/app/models/response';

declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public upcomingEvents: Event[] = [];
  public lastReviews: Review[] = [];

  constructor(private eventService: EventService, private reviewService: ReviewService) { }

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

    this.reviewService.getReviews().subscribe((resp: Response) => {
      this.lastReviews = resp.dataReview.slice(-3);
    });
  }
}