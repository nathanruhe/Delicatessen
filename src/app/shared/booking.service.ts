import { Injectable } from '@angular/core';
import { Booking } from 'src/app/models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public bookingRestaurant: Booking[] = [
    {
      tipo: "Restaurante", 
      name: "David", 
      tel: "638195564", 
      email: "david@gmail.com", 
      date: "12/12/2025", 
      time: "20.30", 
      guests: 7,
      comment: "Por favor, llamenme por teléfono para aclarar una duda, gracias.",
    },
    {
      tipo: "Restaurante", 
      name: "Carlos", 
      tel: "8435438434", 
      email: "carlos_24@gmail.com", 
      date: "15/05/2025", 
      time: "21.00", 
      guests: 4,
      comment: "llamarme por telefono por favor lo antes posible si puede ser",
    },
    {
      tipo: "Restaurante", 
      name: "María", 
      tel: "677123456", 
      email: "maria_98@gmail.com", 
      date: "22/11/2025", 
      time: "19.30", 
      guests: 5,
      comment: "reservar una mesa cerca de la ventana",
    },
    {
      tipo: "Restaurante", 
      name: "Luis", 
      tel: "699987654", 
      email: "luis_abc@gmail.com", 
      date: "10/06/2025", 
      time: "18.45", 
      guests: 3,
      comment: "sin gluten, por favor",
    },
    {
      tipo: "Restaurante", 
      name: "Ana", 
      tel: "612345678", 
      email: "ana.smith@gmail.com", 
      date: "03/08/2025", 
      time: "20.00", 
      guests: 2,
      comment: "mesa en el exterior, si es posible",
    }
  ];
  

  public bookingPub: Booking[] = [
    {
      tipo: "Pub",
      name: "Sofía",
      tel: "724638195",
      email: "user2@yahoo.com",
      date: "15/07/2025",
      time: "19.45",
      guests: 5,
      comment: "Por favor, enviar un email."
    },
    {
      tipo: "Pub",
      name: "Laura",
      tel: "817392645",
      email: "test@mail.com",
      date: "03/03/2026",
      time: "20.30",
      guests: 8,
      comment: "Llamarme si es urgente, gracias."
    }
  ];

  public bookingPrivate: Booking[] = [
  {
    tipo: "Privado", 
    name: "Laura", 
    tel: "554846546", 
    email: "laura_example@gmail.com", 
    date: "10/10/2025", 
    time: "19.00", 
    guests: 6,
    comment: "Por favor, envíenme un email para confirmar.",
  },
  {
    tipo: "Privado", 
    name: "Andrés", 
    tel: "987654321", 
    email: "andres_contact@gmail.com", 
    date: "20/08/2025", 
    time: "22.15", 
    guests: 10,
    comment: "Prefiero que me contacten por WhatsApp.",
  }
  ];

  constructor() { }

  public getBooking(type: string): Booking[] {
    if (type === 'Restaurante') {
      return this.bookingRestaurant;
    } else if (type === 'Pub') {
      return this.bookingPub;
    } else if (type === 'Privado') {
      return this.bookingPrivate;
    } else {
      return [];
    }
  }

  public addBooking(booking: Booking): void {
    if (booking.tipo === 'Restaurante') {
      this.bookingRestaurant.push(booking);
    } else if (booking.tipo === 'Pub') {
      this.bookingPub.push(booking);
    } else if (booking.tipo === 'Privado') {
      this.bookingPrivate.push(booking);
    } else {
      console.warn('Tipo de reserva no válido');
    }
  }

  public delete(booking: Booking): void {
    const bookingLists = [this.bookingRestaurant, this.bookingPub, this.bookingPrivate];
  
    for (const list of bookingLists) {
      const index = list.indexOf(booking);
      if (index !== -1) {
        list.splice(index, 1);
        console.log(`Booking eliminado de la lista correspondiente`);
        return;
      }
    }
    console.log("Error: El booking no se encontró en ninguna lista");
  }
}
