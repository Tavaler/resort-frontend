export interface Role {
    roleId:     string;
    roleName:   string;
    createData: Date;
    roleIsused: string;
}
export const RoleInfo = {
    User : "User" ,
    Admin : "Admin" ,
    Customer : "Customer"
}

// export const RoleInfo = {
//     admin : "admin" ,
//     seller : "seller" ,
//     customer : "customer"
// }