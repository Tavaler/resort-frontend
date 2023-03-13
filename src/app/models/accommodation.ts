export interface Accommodation {
    accommodationId:     string;
    name:                string;
    quantity:            number;
    price:               number;
    detail:              string;
    isUsed:              number;
    createTime:          Date;
    accommodationTypeId: string;
    accommodationType:   AccommodationType;
    accommodationImgs:   AccommodationImg[];
    status: string;
}

export interface AccommodationImg {
    accommodationImgId: string;
    image:              string;
    createDate:         Date;
    accommodationId:    string;
}

export interface AccommodationType {
    accommodationTypeId: string;
    name:                string;
    isUsed:              number;
    dateTime:            Date;
}