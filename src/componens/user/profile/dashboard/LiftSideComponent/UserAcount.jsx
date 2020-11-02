import React, { useState } from 'react'
import { SearchImage } from '../../../../../assist/animitions/SearchImage'
import detailse from '../../../../../svg/details.svg'
import { useSelector } from 'react-redux'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'

const validtionSchiema = yup.object({
    name: yup.string().required("لا يمكن ان يكون فاضي !"),



})
export const UserAcount = () => {
    const user = useSelector(state => state.userDitals.user)



    const { name, email, image, phoneNumber } = user
    return (
        <div>
            <div className="infoUser">

                <div className="infoUser__header">
                    <img src={detailse} alt="userinfo" />
                    <h2>معلوماتي</h2>
                    <p>حذ راحت في تعديل اي من بياناتك كـ مستخدم في الكتاب المستعمل </p>
                </div>
                {!(user.length ==0) && <Formik
                    initialValues={user}
                    validationSchema={validtionSchiema}
                 
                    // book ? dispatch(updateBooksUser(state)) : dispatch(addBookUser(state)); history.push('/dash/user') 
                    onSubmit={(values) => console.log(values)} >
                    <Form action="" className="infoUser__form">
                        <div className="infoUser__form__oneInput" >
                            <label htmlFor=""> :الأسم</label>
                            <Field type="text" name="name" />
                            {false &&
                                <div className="infoUser__form__eroor" >
                                    <div class="tool_tip">
                                        <span > ادخل الاسم</span>
                                    </div>
                                </div>}
                        </div>
                        <div className="infoUser__form__oneInput" >
                            <label htmlFor=""> :رقم الجوال</label>
                            <Field type="text" name="phoneNumber" />
                            {false &&
                                <div className="infoUser__form__eroor" >
                                    <div class="tool_tip">
                                        <span >ادخل رقم صحيحا</span>
                                    </div>
                                </div>}
                        </div>
                        <div className="infoUser__form__oneInput" >
                            <label htmlFor=""> :البريد الالكتروني</label>
                            <Field type="email" name="email" />

                            {false && <div className="infoUser__form__eroor" >
                                <div class="tool_tip">
                                    <span > ادخل بريد الكتروني صحيح</span>
                                </div>
                            </div>}
                        </div>
                        <SearchImage image={image} />
                        <button disabled className="infoUser__form__btn btn-gry" > تأكيد</button>
                        <button type="submit" className="infoUser__form__btn btn-gry" > تأكيد</button>

                    </Form>
                </Formik>}
            </div>
        </div>
    )
}