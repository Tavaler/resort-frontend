export interface FoodDrink {
    fdId:          string;
    fdName:        string;
    fdDescription: string;
    fdPrice:       any;
    fdIsused:      number;
    dateTime:      Date;
    fdCategoryId:  string;
    fdCategory:    FdCategory;
    fdImgs:         any[];
}

export interface FdCategory {
    fdCategoryId: string;
    name:         string;
    isUsed:       number;
    dateTime:     Date;
}

export interface FdImg {
    fdImgId:       string;
    fdImgName:     string;
    createDate:    Date;
    foodDrinkFdId: string;
}