import axios, { AxiosError, AxiosResponse } from "axios";

// axios.defaults.baseURL = "http://10.103.0.30/cs63/s15/resort/backend/";

axios.defaults.baseURL = "http://10.103.0.30/cs63/s15/resort/backend2/";

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

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Account = {
    login: (value: any) => requests.post('User/Login', value),
    register: (value: any) => requests.post('User/Register', value)
};

const FoodDrink = {
    getAll: () => requests.get('FoodDrink/GetAll'),
    // getById: (value:any) => requests.get('FoodDrink/',),
    createFd: (value: any) => requests.post('FoodDrink/CreateFoodDrink', value),
    updateFd: (value: any) => requests.put('FoodDrink/UpdateFoodDrink',value) 
    // deleteFd: (value: any) => requests.delete('FoodDrink/UpdateFoodDrink',value) 


}
// const IsCheckToken = async token => {
//     var response = await GetByToken(token);
//     if (response.statusCode == 200) return true;
//     else if (response.response.status == 401) return false;
//     else return false;
// };

// export const GetByToken = async token =>{
//     try {
//         let url ="user/GetByToken";
//         var config={
//             headers :{Authorization:"Bearer " +token},
//             //รูปแบบอยู่อย่างงี้ ไม่ต้องแก้ 
//         };
//         var response =await API.get(url, config);
//         return response.data;
//     }catch(e){
//         console.log(e);
//         return e;
//     }
// };

const agent = {
    Account,
    FoodDrink,

};

export default agent;