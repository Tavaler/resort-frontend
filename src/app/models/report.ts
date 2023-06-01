/////Menu
export interface GetProductStatistics {
    product:   Product;
    numPercen: number;
    amount:    number;
}

export interface Product {
    fdId:          string;
    fdName:        string;
    fdDescription: string;
    fdPrice:       number;
    fdIsused:      number;
    dateTime:      Date;
    fdCategoryId:  string;
    fdCategory:    null;
    fdImgs:        any[];
}


export interface GetSalesStatistics {
    totalPrice: number;
    sales:      Sale[];
}

export interface Sale {
    percent:  number;
    price:    number;
    fullTime: Date;
    day:      number;
    month:    number;
    year:     number;
}
