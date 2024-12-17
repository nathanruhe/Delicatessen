export class Booking {

    constructor(
        public tipo: string, 
        public name: string, 
        public tel: string, 
        public email: string, 
        public date: string, 
        public time: string, 
        public guests: number,
        public comment?: string,
    ){}
}
