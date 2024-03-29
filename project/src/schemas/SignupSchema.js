import * as YUP from 'yup';

let SignupSchema = YUP.object({
  name : YUP.string().required("Insert Your Full Name"),
  email : YUP.string().required("Insert Your Email Id"),
  password : YUP.string().required("Insert Your Password"),
  repassword : YUP.string().required("Insert Your Re-Password"),
  address : YUP.string().required("Insert Your Address"),
  gender : YUP.string().required("Select Your Gender"),
  state : YUP.string().required("Select Your State"),
  city : YUP.string().required("Select Your City"),
  contact : YUP.string().required("Insert Your Contact Number")
});

export default SignupSchema;