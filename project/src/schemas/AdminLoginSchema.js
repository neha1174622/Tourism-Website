import * as YUP from 'yup'

let AdminLoginSchema = YUP.object({
    username : YUP.string().required("Insert Username"),
    password : YUP.string().required("Insert Password"),
})

export default AdminLoginSchema;