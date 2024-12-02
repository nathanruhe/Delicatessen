import { Component } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {

  services = [
    { img: "../../../assets/img/reserva.png", title: 'Reservas', description: 'Disponemos de diferentes tipos de reservas a escoger.' },
    { img: "../../../assets/img/terraza.png", title: 'Terraza', description: 'Terraza adaptada para disfrutar durante todo el año.' },
    { img: "../../../assets/img/parking.png", title: 'Parking', description: 'Parking privado gratis para nuestros clientes' },
    { img: "../../../assets/img/evento.png", title: 'Eventos', description: 'Organizamos eventos especiales periódicamente.' }
  ];

}
