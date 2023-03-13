import axios, { AxiosError, AxiosResponse } from "axios";
import { GetByIdAcmd } from "../store/accommodationSlice";

// axios.defaults.baseURL = "http://10.103.0.30/cs63/s15/resort/backend/";

// axios.defaults.baseURL = "http://10.103.0.30/cs63/s15/resort/backend2/";

axios.defaults.baseURL = "https://localhost:5000/";
// https://localhost:5000/swagger/index.html



const sleep = () => new Promise(resolve => setTimeout(resolve, 100));

const responseBody = (response: AxiosResponse) => response.data; //ให้ส่งข้อมูลออกไป

axios.interceptors.response.use(async response => {
   await sleep();


    return response
}, (error: AxiosError) => {
    return Promise.reject(error.response) //ส่งไปให้ catch(error) นำไปใช้ได้เลย
});

const createFormData = (item: any) => {
    let formData = new FormData();
    for (const key in item) formData.append(key, item[key]);
    return formData;
};

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Account = {
    login: (value: any) => requests.post('Account/Login', value),
    register: (value: any) => requests.post('Account/Register', value),
    getAccountID: (id: any) => requests.get(`Account/${id}`)
    // getById: (value :any) => requests.get('User/',value)
    
};

const FoodDrink = {
    getAll: () => requests.get('FoodDrink/GetAll'),
    getByIdFd: (id: any) => requests.get(`FoodDrink/${id}`) ,
    // getById: (value:any) => requests.get('FoodDrink/',),
    createFd: (value: any) => requests.post('FoodDrink/CreateFoodDrink', createFormData(value)),

    updateFd: (value: any) => requests.put('FoodDrink/UpdateFoodDrink',createFormData(value)),

    // deleteFd: (value: any) => requests.delete('FoodDrink/UpdateFoodDrink',value) 
    deleteFd: (id: any) => requests.delete(`FoodDrink/DeleteFoodDrink/${id}`),
}

const FdImg = {
    AddFdImg: (value : any) => requests.post(`FoodDrinkImage?prodeuctId=${value.id}`,value.data)
}

const FdCategory = {
    getAll:() => requests.get('FoodDrinkCategory/'),

} 


const Cart = {
    GetByidCart: (id: any) => requests.get(`CartItems/GetByAccountId/${id}`),
    AddCart: (value: any) => requests.post("CartItems/CreateCartItem",value),
    DeleteCart: (id: any) => requests.delete(`CartItems/DeleteCartItem/${id}`),

    ItemPlusCart: (value: any) => requests.put("CartItems/ItemPlus/",value),
    ItemRemoveCart: (value: any) => requests.put("CartItems/ItemRemove/",value),

}

const HouseBooking = {
    GetByidBooking: (id: any) => requests.get(`HouseBookings/GetByAccountId/${id}`),
    AddBooking: (value: any) => requests.post("HouseBookings/CreateHouseBooking",value),
    DeleteBooking: (id: any) => requests.delete(`HouseBookings/DeleteHouseBooking/${id}`),

    // ItemPlusCart: (value: any) => requests.put("CartItems/ItemPlus/",value),
    // ItemRemoveCart: (value: any) => requests.put("CartItems/ItemRemove/",value),

}

// const Cart = {  HouseBookings/CreateHouseBooking
//     GetByidCrat: (idAccount: any) => requests.get(Cart/GetCartCustomerAll?idAccount=${idAccount}),
//     AddCrat: (value: any) => requests.post("Cart/AddCartCustomer",value),
//     DeleteCrat: (id: any) => requests.delete(Cart/DeleteCartCustomer/${id}),
//     UpdateCrat: (value: any) => requests.put("/Cart/UpdateCartCustomer/",value),
// }

const Accommodation = {
    getAll: () => requests.get('Accommodation/GetAll'),
    GetByIdAcmd: (id: any) => requests.get(`Accommodation/${id}`) ,
    createAcmd: (value: any) => requests.post('FoodDrink/Create', createFormData(value)),
    updateFd: (value: any) => requests.put('Accommodation/Update',createFormData(value)),


}



const AccommodationType = {
    getAll: () => requests.get('AccommodationType/'),
    // GetByIdAcmd: (id: any) => requests.get(`Accommodation/${id}`) ,
}

const agent = {
    Account,
    FoodDrink,
    Accommodation,
    Cart,
    FdCategory,
    FdImg,
    HouseBooking,
    AccommodationType

};

export default agent;