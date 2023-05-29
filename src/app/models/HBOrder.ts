export interface HBOrder {
    id:         string;
    status:     any;
    payimage:   string;
    total:      number;
    createDate: Date;
    itemCount:  number;
    accountId:  string;
    acmdId:     string;
    name:       string;
    price:      number;
    hbcheckIn:  Date;
    hbcheckOut: Date;
    sumDate:    number;
    sumPrice:   number;
    image:      string;
    // accountId:  string;
}

export interface HbOrderID {
    id:          string;
    status:      number;
    payimage:    string;
    total:       number;
    createDate:  Date;
    hbOrderItem: HbOrderItemId[];
}

export interface HbOrderItemId {
    id:              string;
    checkIn:         Date;
    checkOut:        Date;
    accommodationId: string;
    acmdType:        string;
    acmdName:        string;
    acmdPrice:       number;
    image:           string;
}



export interface HBOrderCreate {
    total:       number;
    accountId:   any;
    hbOrderItem: HbOrderItem[];
}

export interface HbOrderItem {
    idHBooking:      number;
    accommodationId: string;
    checkIn:         Date;
    checkOut:        Date;
    desiredDetail:   string;
}

export enum PaymentStatus
{
    WorkInProgress, // กำลังดำเนินรายการ0
    WaitingForCheck, // กำลังตรวจสอบ1
    SuccessfulTransaction,  // การทำรายการสำเร็จ2
    CancelTransaction, // ยกเลิก3
}