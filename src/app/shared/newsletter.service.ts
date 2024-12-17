import { Injectable } from '@angular/core';
import { Newsletter } from 'src/app/models/newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  public newsletters: Newsletter[] = [];

  constructor() { }

  public addNewsLetter(newsletter: Newsletter): void {
    this.newsletters.push(newsletter);
  }
}
