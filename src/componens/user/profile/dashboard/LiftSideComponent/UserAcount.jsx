import React, { useState ,useEffect } from 'react'
import { SearchImage } from '../../../../../assist/animitions/SearchImage'
import detailse from '../../../../../svg/details.svg'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import Axios from 'axios'
import { updateUserInfo } from '../../../userActions'

const validtionSchiema = yup.object({
    name: yup.string().required("لا يمكن ان يكون فاضي !"),



})
export const UserAcount = ({history}) => {
    const user = useSelector(state => state.userDitals.user)
    const [userChange , setUserChange] = useState(user)
    let dispatch = useDispatch()

    let changCheck = () =>  (userChange.name == user.name && userChange.email === user.email && userChange.image == user.image && userChange.phoneNumber == user.phoneNumber)
    useEffect(() => {
        setUserChange(user)
       
    }, [user])
    const updateUser =(values)=>{
        const config = {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            },
          };
        Axios.put("http://localhost:4000/api/user/update" , values ,config)
        .then(data => {
            dispatch(updateUserInfo(data.data.updateUser))
        // history.push('/dash')
        })
        .catch(err => console.log(err))
    }
   
    const { image} = user
    return (
        <div>
            <div className="infoUser">

                <div className="infoUser__header">
                    <img src={detailse} alt="userinfo" />
                    <h2>حسابي</h2>
                    <p>حذ راحت في تعديل اي من بياناتك كـ مستخدم في الكتاب المستعمل </p>
                </div>
                {!(user.length ==0) && <Formik
                    initialValues={user}
                    validationSchema={validtionSchiema}
                 
                    // book ? dispatch(updateBooksUser(state)) : dispatch(addBookUser(state)); history.push('/dash/user') 
                    onSubmit={(values) => updateUser({...values, image:userChange.image})} >
                    <Form action="" className="infoUser__form">
                        <div className="infoUser__form__oneInput" >
                            <label htmlFor=""> :الأسم</label>
                            <Field as="input" type="text" name="name" onKeyUp ={({target }) =>setUserChange({...userChange ,[target.name] :target.value})} />
                            <ErrorMessage name="name" render={() =><div className="infoUser__form__eroor" >
                                    <div className="tool_tip">
                                        <span > ادخل الاسم</span>
                                    </div>
                                </div>} />
                        </div>
                        <div className="infoUser__form__oneInput" >
                            <label htmlFor=""> :رقم الجوال</label>
                            <Field type="text" name="phoneNumber" onKeyUp ={({target }) =>setUserChange({...userChange ,[target.name] :target.value})}/>
                            {false &&
                                <div className="infoUser__form__eroor" >
                                    <div class="tool_tip">
                                        <span >ادخل رقم صحيحا</span>
                                    </div>
                                </div>}
                        </div>
                        <div className="infoUser__form__oneInput" >
                            <label htmlFor=""> :البريد الالكتروني</label>
                            <Field type="email" name="email" onKeyUp ={({target }) =>setUserChange({...userChange ,[target.name] :target.value})} />

                            {false && <div className="infoUser__form__eroor" >
                                <div class="tool_tip">
                                    <span > ادخل بريد الكتروني صحيح</span>
                                </div>
                            </div>}
                        </div>
                        <SearchImage image={image} state ={userChange} setState ={setUserChange} />
                        {changCheck()?
                            <button disabled className="infoUser__form__btn btn-gry" > تأكيد</button>
                        :<button type="submit" className="infoUser__form__btn btn-gry-secondry" > تأكيد</button> }

                    </Form>
                </Formik>}
            </div>
        </div>
    )
}
