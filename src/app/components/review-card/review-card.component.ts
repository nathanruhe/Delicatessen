import { Component } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {
  
  reviews = [
    {
      name: 'Juan Pérez',
      stars: 5,
      message: '¡Servicio excelente! Muy recomendable. La comida estuvo deliciosa, especialmente los postres que fueron una delicia. El ambiente del restaurante también es muy acogedor y perfecto para disfrutar de una buena cena.'
    },
    {
      name: 'Carlos Ramírez',
      stars: 3,
      message: 'Experiencia promedio, podría ser mejor. Los platos eran aceptables, pero esperaba más variedad en el menú. El personal fue amable, aunque no parecía muy organizado en horas punta.'
    },
    {
      name: 'Ana Gómez',
      stars: 4,
      message: 'Gran experiencia, aunque hay margen de mejora. El servicio fue muy atento y los platos muy bien presentados. Sin embargo, algunos tiempos de espera podrían ser un poco más cortos, pero en general quedé muy satisfecha.'
    },
  ];
}