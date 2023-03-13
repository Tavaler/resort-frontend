/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { acmdSlice } from './accommodationSlice';
import { accountSlice } from './accountSlice';
import { AcmdTypeSilce } from './AcmdTypeSilce';
import { cratSlice } from './cartSlice';
import { CategorySilce } from './FdCategorySilce';
import { hbookingSlice } from './HBookingSlice';
import { menuSlice } from './menuSlice';


export const store = configureStore({
    reducer: {
        account : accountSlice.reducer,
        menu : menuSlice.reducer,
        acmd : acmdSlice.reducer,
        cartItem : cratSlice.reducer,
        fdCategory : CategorySilce.reducer,
        housebooking : hbookingSlice.reducer,
        acmdType : AcmdTypeSilce.reducer
    } ,
  });


//เป็นค่า Default ที่มีอยู่ใน store คือ store.getState, store.dispatch (ใช้ตามรูปแบบเขาเลย)
export type RootState = ReturnType<typeof store.getState>// อ่าน state ; ค่าของ state ทั้งหมด
export type AppDispatch = typeof store.dispatch;			// dispatch สำหรับเรียก action

//สำหรับเรียกใข้ dispatch และ state (ใช้ตามรูปแบบเขาเลย)
export const useAppDispatch = ()=>useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;