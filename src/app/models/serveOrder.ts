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
    // accountId:   string;
    amount:      number;
}
