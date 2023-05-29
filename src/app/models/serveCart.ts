export interface ServeCart {
    id:             number;
    serveId:        number;
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
    amount:         number;

}
