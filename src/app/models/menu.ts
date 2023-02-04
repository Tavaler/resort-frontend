export interface FoodDrink {
    fdId:          string;
    fdName:        string;
    fdDescription: string;
    fdPrice:       number;
    fdIsused:      number;
    dateTime:      Date;
    fdCategoryId:  number;
    fdCategory:    FdCategory;
    fdImg:         any[];
}

export interface FdCategory {
    fdCategoryId: number;
    name:         string;
    isUsed:       number;
    dateTime:     Date;
}
