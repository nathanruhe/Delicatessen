import { Injectable } from '@angular/core';
import { Review } from "src/app/models/review"

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  public reviews: Review[] = [];

  constructor() { }

  public getReviews(): Review[] {
    return this.reviews;
  }

  public addReview(review: Review): void {
    this.reviews.push(review);
  }
}
