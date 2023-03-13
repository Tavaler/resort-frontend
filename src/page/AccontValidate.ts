import * as Yup from 'yup';
const emailValidation = /^[a-zA-Z0-9_\\.]+@[a-zA-Z]+\.[a-zA-Z0-9\\.]+$/;
const telValidation = /^\d{10}$/;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const LoginValidate = Yup.object().shape({
  email: Yup.string().email('อีเมล ไม่ถูกต้อง').required('กรุณากรอกอีเมล').matches(emailValidation, "รูปแบบผู้ใช้งานไม่ถูกต้อง"),
  password: Yup.string().required("กรุณากรอกรหัสผ่าน").min(5, "รหัสผ่านต้องมากกว่า 5 ตัว"),
  
  //phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
});

export const RegisterValidate = Yup.object().shape({
  email: Yup.string().email('อีเมล ไม่ถูกต้อง').required('กรุณากรอกอีเมล').matches(emailValidation, "รูปแบบผู้ใช้งานไม่ถูกต้อง"),
  password: Yup.string().required("กรุณากรอกรหัสผ่าน").min(5, "รหัสผ่านต้องมากกว่า 5 ตัว"),
  firstName: Yup.string().required("กรุณากรอกชื่อ"),
  lastName: Yup.string().required("กรุณากรอกนามสกุล"),
  tel: Yup.string().required("การุณากรอกเบอร์โทรศัพท์").matches(phoneRegExp,"การุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง"),
  //phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
});