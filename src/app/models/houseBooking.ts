export interface HouseBooking {
    id:                 number;
    accommodationId:    string;
    checkIn:            Date;
    checkOut:           Date;
    desiredDetail:      string;
    createDate:         Date;
    sumDate:            number; 
    sumPrice:           number;
    name:               string;
    accommodationTypes: string;
    price:              number;
    image:              string;
}

export interface AddHouseBooking {
    // id:                 number;
    accountId : string,
    accommodationId:    string;
    checkIn:            Date;
    checkOut:           Date;
    desiredDetail:      string;
    // createDate:         Date;
    // sumPrice:           number;
    // name:               string;
    // accommodationTypes: string;
    // price:              number;
    // image:              string;
}