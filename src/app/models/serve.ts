export interface Serve {
    serveId:     number;
    name:        string;
    price:       number;
    isUsed:      number;
    detail:      string;
    createdDate: Date;
    serveImgs:   ServeImg[];
}

export interface ServeImg {
    serveImgId: string;
    image:      string;
    isUsed:     number;
    dateTime:   Date;
    serveId:    number;
}
