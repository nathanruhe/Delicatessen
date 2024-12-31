import { Injectable } from '@angular/core';
import { Review } from "src/app/models/review";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  public getReviews() {
    return this.http.get(this.url + "/review");
  }

  public addReview(review: Review) {
    return this.http.post(this.url + "/review", review);
  }
}
