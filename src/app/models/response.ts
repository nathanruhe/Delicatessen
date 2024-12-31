import { Admin } from "./admin";
import { Booking } from "./booking";
import { Contact } from "./contact";
import { Event } from "./event";
import { Review } from "./review";
import { Newsletter } from "./newsletter";

export class Response {

    constructor(
        public error: boolean,
        public code: number,
        public message: string,
        public dataAdmin: Admin,
        public dataBooking: Booking[],
        public dataContact: Contact,
        public dataEvent: Event[],
        public dataReview: Review[],
        public dataNewsletter: Newsletter,
    ){}
}
