export interface ServeOrder {
    id:         string;
    status:     any;
    payimage:   string;
    total:      number;
    createDate: Date;
    itemCount:  number;
    serveId:    number;
    name:       string;
    amount:     number;
    checkIn:        Date;
    price:      number;
    sumPrice:   number;
    image:      string;
}

export interface ServeOrderCreate {
    total:          number;
    accountId:   any;
    serveOrderItem: ServeOrderItem[];
}

export interface ServeOrderItem {
    idServeCart: number;
    serveId:     number;
    checkIn:        Date;
    // accountId:   string;
    amount:      number;
}


export interface ServerOrderID {
    id:         string;
    status:     number;
    payimage:   null;
    total:      number;
    createDate: Date;
    orderItem:  OrderItem[];
}

export interface OrderItem {
    id:             string;
    checkIn:        Date;
    amount:         number;
    sumAmountPrice: number;
    serveId:        number;
    serveName:      string;
    productPrice:   number;
    productImage:   string;
}

