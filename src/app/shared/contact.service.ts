import { Injectable } from '@angular/core';
import { Contact } from "src/app/models/contact"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contacts: Contact[] = [];

  constructor() { }

  public getContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
}
