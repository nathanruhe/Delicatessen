import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  newsletter(form: NgForm) {
    if (form.valid) {
      const nuevaLetter = {
        email: form.value.email
      };
      
      form.reset();
    } 
  }
}
