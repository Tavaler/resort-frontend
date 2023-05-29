
import * as Yup from 'yup';

export const ServeValidate = Yup.object().shape({
    // email: Yup.string().email('อีเมล ไม่ถูกต้อง').required('กรุณากรอกอีเมล').matches(emailValidation, "รูปแบบผู้ใช้งานไม่ถูกต้อง"),
    // password: Yup.string().required("กรุณากรอกรหัสผ่าน").min(5, "รหัสผ่านต้องมากกว่า 5 ตัว"),
    name: Yup.string().required("กรุณากรอกชื่อ"),
    price:Yup.number(),
    // lastName: Yup.string().required("กรุณากรอกนามสกุล"),
    // tel: Yup.string().required("การุณากรอกเบอร์โทรศัพท์").matches(phoneRegExp,"การุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง"),
    //phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
  });