export interface ServeCart {
    id:             number;
    serveId:        number;
    checkIn:        Date;
    amount:         number;
    createDate:     Date;
    sumAmountPrice: number;
    name:           string;
    price:          number;
    image:          string;
}

export interface AddServeCart {
    serveId:        number;
    accountId:      string,
    checkIn:        Date;
    amount:         number;

}
