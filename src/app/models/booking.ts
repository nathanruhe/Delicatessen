export class Booking {

    constructor(
        public id_booking: number = 0,
        public tipo: string, 
        public name: string, 
        public tel: string, 
        public email: string, 
        public date: string, 
        public time: string, 
        public guests: number,
        public comment?: string,
        public confirmed: boolean = false,
    ){}
}
