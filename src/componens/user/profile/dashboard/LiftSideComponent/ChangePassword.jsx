import React from 'react'
import detailse from '../../../../../svg/key.svg'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import Axios from 'axios'
const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };
const validationSchema = yup.object({
    password: yup.string().required('ادخل كلمه المرور'),
    newPassword: yup.string().required('ادخل كلة المرور الجديدة').min(8, "يجب ان يكون 8 او اكثر"),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('newPassword'), null])
        .required('ان كلمه المرور لا تتطابق')
})


export const ChangePassword =() => {
    const pass = { password: "", newPassword: "", passwordConfirm: "" }
    const [errMasseg , setErrMasseg] = useState(false)

    const ChangePasswordFunc = (values) =>{
     
        Axios.put("http://localhost:4000/api/user/changePassword" , values ,config)
        .then(data =>{
            console.log(data)
        }).catch(err =>console.log(err))
    }
    return (
        <div>
            <div className="infoUser">

                <div className="infoUser__header">
                    <img src={detailse} alt="userinfo" />
                    <h2>تغير الباسسورد</h2>
                    <p>حذ راحت في تعديل اي من بياناتك كـ مستخدم في الكتاب المستعمل </p>
                    {errMasseg && <h3 className ="infoUser__header__erorrM">إن كلمة المرور السابقه غير صحيحه</h3>}
                    </div>
                <Formik
                    initialValues={pass}
                    // validationSchema={validationSchema}
                    onSubmit={(values) => ChangePasswordFunc(values)} >
                    <Form className="infoUser__form">
                        <div className="infoUser__form__oneInput" >
                            <label htmlFor=""> :كلمة المرور القديمة</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" render={(رساله) =>
                                <div className="infoUser__form__eroor" >
                                    <div className="tool_tip">
                                        <span >{رساله}</span>
                                    </div>
                                </div>} />
                        </div>
                        <div className="infoUser__form__oneInput" >
                            <label htmlFor=""> :كلمة المرور الجديدة</label>
                            <Field type="password" name="newPassword" />
                            <ErrorMessage name="newPassword" render={(رساله) =>
                                <div className="infoUser__form__eroor" >
                                    <div className="tool_tip">
                                        <span >{رساله}</span>
                                    </div>
                                </div>} />
                        </div>
                        <div className="infoUser__form__oneInput" >
                            <label htmlFor=""> : تأكيد كلمة المرور الجديدة </label>
                            <Field type="password" name="passwordConfirm" />
                            <ErrorMessage name="passwordConfirm" render={(رساله) =>
                                <div className="infoUser__form__eroor" >
                                    <div className="tool_tip">
                                        <span > لا يتطابق مع كلمه المرور</span>
                                    </div>
                                </div>} />
                        </div>
                        <button type="submit" className="infoUser__form__btn btn-gry" > غير</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
