import React from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import { useState } from 'react'


const validtionSchiema = yup.object({
    name: yup.string().required("لا يمكن ان يكون فاضي !"),
    phoneNumber: yup.string().required("لا يمكن ان يكون فاضي !"),
    email: yup.string().required("لا يمكن ان يكون فاضي !"),
    password: yup.string().required("لا يمكن ان يكون فاضي !").min(8),
    restPassword: yup.string().required("لا يمكن ان يكون فاضي !")
})


export const Register = ({ logIn, loading }) => {
    const [userInfo , setUserInfo] = useState({email: "", password: "", phoneNumber :"" , name :""})

    const registerWithLogin = (values) => {
        Axios.post('/api/user/register' , values)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    return (
        <>
            {/* logIn(value) */}
            <Formik
                initialValues={userInfo}
                validationSchema={validtionSchiema}
                onSubmit={(value) =>registerWithLogin(value)} >
                <Form className={`Login__logInForm ${loading && "rotetXX"}`}>

                    <label htmlFor=""> الاسم</label>
                    <Field type="name" placeholder="student@hotmail.com" name="name" />
                    <div style={{ position: "relative" }}><ErrorMessage name="name" render={() => <label className="Login__erorr"> ما يتخلى فاضي</label>} /></div>
                    <label htmlFor=""> رقم الجوال</label>
                    <Field type="" placeholder="05XXXXXXX" name="phoneNumber" />
                    <div style={{ position: "relative" }}><ErrorMessage name="phoneNumber" render={() => <label className="Login__erorr"> ما يتخلى فاضي</label>} /></div>
                    <label htmlFor=""> البريد الإلكتروني</label>
                    <Field type="email" placeholder="yasser@hotmail.com" name="email" />
                    <div style={{ position: "relative" }}><ErrorMessage name="email" render={() => <label className="Login__erorr"> ما يتخلى فاضي</label>} /></div>
                    <label htmlFor="">كلمة المرور</label>
                    <Field type="password" placeholder="" name="password" />
                    <div style={{ position: "relative" }}><ErrorMessage name="password" render={() => <label className="Login__erorr"> ما يتخلى فاضي</label>} /></div>
                    <label htmlFor=""> إعادة كلمة المرور </label>
                    <Field type="password" placeholder="" name="restPassword" />
                    <div style={{ position: "relative" }}><ErrorMessage name="restPassword" render={() => <label className="Login__erorr"> ما يتخلى فاضي</label>} /></div>
                    <button type="submit" className="Login__logInForm__btn btn">تسجيل الدخول</button>

                </Form>
            </Formik>
        </>
    )
}

export default Register


//   <div className="Login__logInForm">
{/* <label htmlFor=""> الاسم</label>
<input type="email" placeholder="الاسم" />
<label htmlFor=""> رقم الجوال</label>
<input type="email" placeholder="٠٥٥١٢٣٤٥٦٧" />
<label htmlFor=""> البريد الإلكتروني</label>
<input type="email" placeholder="yasser@hotmail.com" />
<label htmlFor="">كلمة المرور</label>
<input type="password" placeholder="" />
<button className="Login__logInForm__btn btn">التسجيل</button>

</div> */}