import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Newsletter } from 'src/app/models/newsletter';
import { NewsletterService } from 'src/app/shared/newsletter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private newsletterService: NewsletterService) {}

  newsletter(form: NgForm) {
    if (form.valid) {
      const nuevaLetter = new Newsletter (
        form.value.email
      );
      
      this.newsletterService.addNewsLetter(nuevaLetter);
      form.reset();
    } 
  }
}
