import axios, { AxiosError, AxiosResponse } from "axios";

// axios.defaults.baseURL = "http://10.103.0.16/cs63/s15/resort/backend2/";
// http://10.103.0.16/cs63/s15/resort/backend2/swagger/index.html
axios.defaults.baseURL = "http://10.103.0.16/cs63/s15/resort/backend2/"

// axios.defaults.baseURL = "https://localhost:5000/";
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
    getAccountID: (id: any) => requests.get(`Account/${id}`),
    getAll: () => requests.get('Account/GetUser'),
    update: (value: any) => requests.put('Account/Update',createFormData(value)),

    
    
};

const FoodDrink = {
    getAll: () => requests.get('FoodDrink/GetAll'),
    getFDAll: () => requests.get('FoodDrink/GetFoodDrink'),

    getByIdFd: (id: any) => requests.get(`FoodDrink/GetFdById/${id}`) ,
    // getById: (value:any) => requests.get('FoodDrink/',),
    createFd: (value: any) => requests.post('FoodDrink/CreateFoodDrink', createFormData(value)),
    updateFd: (value: any) => requests.put('FoodDrink/UpdateFoodDrink',createFormData(value)),
    // deleteFd: (value: any) => requests.delete('FoodDrink/UpdateFoodDrink',value) 
    deleteFd: (id: any) => requests.delete(`FoodDrink/DeleteFoodDrink/${id}`),
}

const FdImg = {
    AddFdImg: (value : any) => requests.post(`FoodDrinkImage?prodeuctId=${value.id}`,value.data),
    create: (values: any) => {
        let formData = new FormData();
        for (const key in values) formData.append(key, values[key]);
        for (let i = 0; i < values.formFiles.length; i++) formData.append("formFiles", values.formFiles[i]);
        return requests.post("FoodDrinkImage/Create", formData)
    },
}

const FdCategory = {
    getAll:() => requests.get('FoodDrinkCategory/'),

} 


const Cart = {
    GetByidCart: (id: any) => requests.get(`CartItems/GetByAccountId/${id}`),
    AddCart: (value: any) => requests.post("CartItems/CreateCartItem",value),
    DeleteCart: (id: any) => requests.delete(`CartItems/DeleteCartItem/${id}`),
    ItemPlusCart: (id: any) => requests.put("CartItems/ItemPlus",createFormData(id)),
    ItemRemoveCart: (id: any) => requests.put("CartItems/ItemRemove",createFormData(id)),

}


const HouseBooking = {
    GetByidBooking: (id: any) => requests.get(`HouseBookings/GetByAccountId/${id}`),
    AddBooking: (value: any) => requests.post("HouseBookings/CreateHouseBooking",value),
    DeleteBooking: (id: any) => requests.delete(`HouseBookings/DeleteHouseBooking/${id}`),


    // ItemPlusCart: (value: any) => requests.put("CartItems/ItemPlus/",value),
    // ItemRemoveCart: (value: any) => requests.put("CartItems/ItemRemove/",value),

}

const ServeCart = {
    GetById: (id: any) => requests.get(`ServeCart/GetByAccountId/${id}`),
    AddCartServe: (value: any) => requests.post("ServeCart/CreateCartItem",value),
    UpdateCartServe: (value: any) => requests.put("ServeCart/UpdateCartServe/",value),
    DeleteCartServe: (id: any) => requests.delete(`ServeCart/DeleteServeCart/${id}`),

    // UpdateCartServe: (value: any) => requests.put("CartItems/ItemPlus/",value),
    // ItemRemoveCart: (value: any) => requests.put("CartItems/ItemRemove/",value),

}

const Serve = {
    GetAll: () => requests.get('Serve/GetAll'),
    Create: (value: any) => requests.post("Serve/Create",createFormData(value)),
    // createFd: (value: any) => requests.post('FoodDrink/CreateFoodDrink', createFormData(value)),
    Delete: (id: any) => requests.delete(`Serve/DeleteServe/${id}`),
    Update: (value: any) => requests.put("Serve/UpdateAcmd",createFormData(value)),
    GetById: (id: any) => requests.get(`Serve/${id}`) ,
}

const ServeImg = {
    // AddFdImg: (value : any) => requests.post(`FoodDrinkImage?prodeuctId=${value.id}`,value.data),
    create: (values: any) => {
        let formData = new FormData();
        for (const key in values) formData.append(key, values[key]);
        for (let i = 0; i < values.formFiles.length; i++) formData.append("formFiles", values.formFiles[i]);
        return requests.post("ServeImage/Create", formData)
    },
}

const Accommodation = {
    getAll: () => requests.get('Accommodation/GetAll'),
    GetByIdAcmd: (id: any) => requests.get(`Accommodation/${id}`) ,
    createAcmd: (value: any) => requests.post('Accommodation/Create', createFormData(value)),
    updateAcmd: (value: any) => requests.put('Accommodation/Update',createFormData(value)),
    deleteAcmd: (id: any) => requests.delete(`Accommodation/DeleteAcmd/${id}`),

    // changeStatus: (value:any ) => requests.put('Accommodation/ChangeStatus',createFormData(value))
    changeStatus: (id: any) => requests.put(`Accommodation/ChangeStatus?id=${id}`,createFormData(id)),
    // ItemPlusCart: (id: any) => requests.put("CartItems/ItemPlus",createFormData(id)),
    // ItemRemoveCart: (id: any) => requests.put("CartItems/ItemRemove",createFormData(id)),

    // ChangeStatus
}

const AcmdImg = {
    
    AddFdImg: (value : any) => requests.post(`AccommodationImage?accommodationId=${value.id}`,value.data),
    create: (values: any) => {
        let formData = new FormData();
        for (const key in values) formData.append(key, values[key]);
        for (let i = 0; i < values.formFiles.length; i++) formData.append("formFiles", values.formFiles[i]);
        return requests.post("AccommodationImage/Create", formData)
    },
}

const HBOrder = {
    getAll: () => requests.get('HBOrder/GetHBOrders'),
    GetById: (id: any) => requests.get(`HBOrder/GetById/${id}`) ,
    update: (value: any) => requests.put("HBOrder/PaymentOrder",createFormData(value) ),

    // /HBOrder/GetByAccountId/dd?pageSize=6
    GetByIdAccount: (id: any) => requests.get(`HBOrder/GetByAccountId/${id}`) ,
    GetByIdAccountV2: (id: any) => requests.get(`HBOrder/GetByAccountIdV2/${id}`) ,
    GetByIdAccountStatus0: (id: any) => requests.get(`HBOrder/GetByAccountId/${id}?status=0`) ,
    GetByIdAccountStatus1: (id: any) => requests.get(`HBOrder/GetByAccountId/${id}?status=1`) ,
    GetByIdAccountStatus2: (id: any) => requests.get(`HBOrder/GetByAccountId/${id}?status=2`) ,
    GetByIdAccountStatus3: (id: any) => requests.get(`HBOrder/GetByAccountId/${id}?status=2`) ,



    create:(value: any) =>requests.post('HBOrder/CreateHBOrder', value),
    putconfirm:(value:any) => requests.put("HBOrder/ConfirmStatusOrder", createFormData(value)),
    cancelStatusOrder:(value:any) => requests.put("HBOrder/CancelStatusOrder", createFormData(value)),
    SuccessStatusOrder:(value:any) => requests.put("HBOrder/SuccessStatusOrder", createFormData(value)),
    // GetHBOrders?currentPage=1&pageSize=10
    // GetByIdAcmd: (id: any) => requests.get(`Accommodation/${id}`) ,
}

const Order = {
    getAll: () => requests.get('Orders/GetOrders'),
    GetById: (id: any) => requests.get(`Orders/GetById/${id}`) ,
    // /HBOrder/GetByAccountId/dd?pageSize=6
    GetByIdAccount: (id: any) => requests.get(`Orders/GetByAccountId/${id}`) ,
    // getConfirm: () => requests.get('OrderAccount/GetConfirmOrder' ),
    create:(value: any) =>requests.post('Orders/CreateOrder', value),
    putconfirm:(value:any) => requests.put("Orders/ConfirmStatusOrder", createFormData(value)),
    cancelStatusOrder:(value:any) => requests.put("Orders/CancelStatusOrder", createFormData(value)),
    SuccessStatusOrder:(value:any) => requests.put("Orders/SuccessStatusOrder", createFormData(value)),
    // GetHBOrders?currentPage=1&pageSize=10
    // GetByIdAcmd: (id: any) => requests.get(`Accommodation/${id}`) ,
}

const AccommodationType = {
    getAll: () => requests.get('AccommodationType/'),
    // GetByIdAcmd: (id: any) => requests.get(`Accommodation/${id}`) ,
}

// const Order = {
//     getAll: () => requests.get('AccommodationType/'),
//     create:(value: any) =>requests.post('Orders/CreateOrder', value),
//     // GetByIdAcmd: (id: any) => requests.get(`Accommodation/${id}`) ,
// }

const ServeOrder = {
    getAll: () => requests.get('ServeOrder/GetOrders'),
    GetById: (id: any) => requests.get(`ServeOrder/GetById/${id}`) ,
    // /HBOrder/GetByAccountId/dd?pageSize=6
    GetByIdAccount: (id: any) => requests.get(`ServeOrder/GetByAccountId/${id}`) ,
    create:(value: any) =>requests.post('ServeOrder/CreateOrder', value),
    putconfirm:(value:any) => requests.put("ServeOrder/ConfirmStatusOrder", createFormData(value)),
    cancelStatusOrder:(value:any) => requests.put("ServeOrder/CancelStatusOrder", createFormData(value)),
    SuccessStatusOrder:(value:any) => requests.put("ServeOrder/SuccessStatusOrder", createFormData(value)),
}

const agent = {
    Account,
    FoodDrink,
    Accommodation,
    AcmdImg,
    Cart,
    FdCategory,
    FdImg,
    HouseBooking,
    AccommodationType,
    Serve,
    ServeImg,
    ServeCart,
    HBOrder,
    Order,
    ServeOrder
    
    // ServeOrder,


};

export default agent;