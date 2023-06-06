export interface Community {
    totalPrice: number;
    sales:      Sale2[];
}

export interface Sale2 {
    percent:       number;
    price:         number;
    communityId:   string;
    communityName: string;
}