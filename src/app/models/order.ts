// export interface Order {
//     id:                 string;
//     status:             string;
//     total:              number;
//     createDate:         Date;
//     itemCount:          number;
//     productId:          string;
//     productName:        string;
//     productItemAmount:  number;
//     productPrice:       number;
//     productAmountPrice: number;
//     productImage:       string;
// }

export interface Order {
    id:                 string;
    status:             any;
    payimage:           string;
    total:              number;
    createDate:         Date;
    itemCount:          number;
    transport:          string;
    productId:          string;
    productName:        string;
    productItemAmount:  number;
    productPrice:       number;
    productAmountPrice: number;
    productImage:       string;
}

export interface OrderCreate {
    accommodationId: string;
    accountId:   any;
    total:           number;
    orderItem:       OrderItem[];
}

export interface OrderItem {
    idCartItem: number;
    fdId:       string;
    // accountId:  string;
    amount:     number;
}
