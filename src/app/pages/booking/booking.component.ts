import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  public modal: boolean = false;
  public typeSelected: string = '';

  openModal(type: string) {
    this.typeSelected = type;
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }
}
