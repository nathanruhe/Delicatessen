import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  templateUrl: './booking-card.component.html',
  styleUrls: ['./booking-card.component.css']
})
export class BookingCardComponent {

  booking = [
    { img: "../../../assets/img/restaurante.png", title: 'Restaurante', description: 'Todos los días de la semana en horario de 12:00 a 16:00 y de 20:00 a 23:00.' },
    { img: "../../../assets/img/pub.png", title: 'Noche', description: 'Zona VIP de jueves a domingo por la noche en horario de 24:00 a 03:00, disfruta de una experiencia exclusiva y personalizada.' },
    { img: "../../../assets/img/privada.png", title: 'Privado', description: 'A partir de 15 comensales, zona privada para empresas, celebraciones y eventos especiales. Ideal para disfrutar de un ambiente exclusivo con atención personalizada.' },
  ];
}
