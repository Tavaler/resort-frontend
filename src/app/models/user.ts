export interface Login {
    email: string;
    password: string;
}

export interface Register {
    accountId:  string;
    firstName:  string;
    lastName:   string;
    email:      string;
    password:   string;
    tel:        string;
    isUsed:     number;
    createTime: Date;
    roleId:     string;
    role:       Role;
}

export interface Role {
    roleId:     string;
    roleName:   string;
    createData: Date;
    roleIsused: string;
}
