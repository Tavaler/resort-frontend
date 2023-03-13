export interface HouseBooking {
    id:                 number;
    accommodationId:    string;
    checkIn:            Date;
    checkOut:           Date;
    createDate:         Date;
    sumPrice:           number;
    name:               string;
    accommodationTypes: string;
    price:              number;
    image:              string;
}
