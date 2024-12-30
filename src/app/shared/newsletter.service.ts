import { Injectable } from '@angular/core';
import { Newsletter } from 'src/app/models/newsletter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  public addNewsLetter(newsletter: Newsletter) {
    return this.http.post(this.url + "/newsletter", newsletter);
  }
}
