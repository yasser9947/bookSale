import React from 'react'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'


const validtionSchiema = yup.object({
    email: yup.string().required("لا يمكن ان يكون فاضي !"),
    password: yup.string().required("لا يمكن ان يكون فاضي !")
})


export const LoginForm = ({logIn ,loading}) => {


    return (
        <>
        {/* logIn(value) */}
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validtionSchiema}
            onSubmit={(value) => logIn(value)} >
            <Form className={`Login__logInForm ${loading && "rotetXX"}`}>
          
                <label htmlFor=""> البريد الإلكتروني</label>
                <Field type="email" placeholder="yasser@hotmail.com" name="email" />
               <div style={{position:"relative"}}><ErrorMessage name="email" render={() =>  <label className ="Login__erorr"> ما يتخلى فاضي</label>} /></div>
                <label htmlFor="">كلمة المرور</label>
                <Field type="password" placeholder="123456" name="password" />
                <div style={{position:"relative"}}><ErrorMessage name="password" render={() =>  <label className ="Login__erorr"> ما يتخلى فاضي</label>} /></div>
                <button type="submit" className="Login__logInForm__btn btn">تسجيل الدخول</button>
                <h5 >نسيت كلمة المرور</h5>
            </Form>
        </Formik>
        </>
    )
}

export default LoginForm