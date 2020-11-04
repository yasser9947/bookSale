import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addBookUser, updateBooksUser } from '../../../../userActions'
import { addBook, updateBook } from '../../bookActions'
import Axios from 'axios'
import swal from '@sweetalert/with-react';
import { mejors } from '../../../../../../assist/testApi'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { FormEroor } from '../../../../../../assist/FormEroor'
import {SearchImage} from '../../../../../../assist/animitions/SearchImage'

const validtionSchiema = yup.object({
    name: yup.string().required("لا يمكن ان يكون فاضي !"),
    major: yup.string().required("لا يمكن ان يكون فاضي !"),
    author: yup.string().required("لا يمكن ان يكون فاضي !"),
    bookCase: yup.string().required("لا يمكن ان يكون فاضي !"),
    price: yup.string().required("لا يمكن ان يكون فاضي !"),
    code: yup.string().required("لا يمكن ان يكون فاضي !"),


})
// "major"
// "author"
// "bookCase"
// "price"
// "code" 

const names = {
    name: "", id: "", major: "", name: "", price: "", status: "", author: "", image: "", code: "", bookCase: "",
}
export const Addbook = withRouter(({ history, match }) => {
    const book = useSelector(store => store.userDitals.userbooks.find(ele => ele._id == match.params.id))
    const [state, setstate] = useState(book ? book : names)
    const [img, setImg] = useState(false)
    const [img2, setImg2] = useState(false)
    const [crazyArray, setCrazyArray] = useState(new Array(10))
    const dispatch = useDispatch()



    const changeHundlr = ({ target: { name, value } }) => setstate({ ...state, [name]: value })
    const { image } = state
    return (
        <Formik
            initialValues={state}
            validationSchema={validtionSchiema}
            // book ? dispatch(updateBooksUser(state)) : dispatch(addBookUser(state)); history.push('/dash/user') 
            onSubmit={(values) => { if (!(image == "")) { book ? dispatch(updateBooksUser({ ...values, image })) : dispatch(addBookUser({ ...values, image })); history.push('/dash/user') } else { setImg2(true) } }} >
            <Form className="Login__logInForm" >
                <label htmlFor=""> اسم الكتاب</label>
                <Field name="name" placeholder="اسم الكتاب" />
                <FormEroor name={'name'} />
                <label htmlFor=""> التخصص</label>
                <Field as="select" dir="rtl" id="" name="major">
                    {mejors.map((ele,key) => <option key={key} value={ele}>{ele}</option>)}
                </Field>
                <FormEroor name={'name'} />
                <label htmlFor=""> المؤلف</label>
                <Field type="" name="author" placeholder="المؤلف" />
                <FormEroor name={'author'} />
                <label htmlFor=""> حالة الكتاب</label>
                <Field type="" name="bookCase" placeholder="حالة الكتاب" />
                <FormEroor name={'bookCase'} />
                <label htmlFor="">المبلغ</label>
                <Field type="" name="price" placeholder="المبلغ" />
                <FormEroor name={'price'} />
                <label htmlFor="">الرمز</label>
                <Field type="" name="code" placeholder="الرمز" />
                <FormEroor name={'code'} />
             
                <SearchImage state={state} setState={setstate}  img ={img}  image ={image}/>
                {img2 && <div style={{ position: "relative" }}> <label className="Login__erorr2"> مافي صوره ):</label></div>}

                <button type="submit" className="Login__logInForm__btn btn" >اضف كتاب</button>
                {/* onClick={() => { book ? dispatch(updateBooksUser(state)) : dispatch(addBookUser(state)); history.push('/dash/user') }} */}
            </Form>
        </Formik>
    )
})



//  {/*  <label htmlFor="">الصورة</label>
/* <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
<input as="input" className="btn" type="file" style={{ width: "20%" }} onChange={(e) => uploadImagefunc(e)} />
<h6>او ارفع الصوره من جهازك</h6>
<button className="btn" style={{ width: "25%", padding: "6px 0px" }} type="button" onClick={() => seacrhImages("رياضيات")} > ابحث عن صوره</button>
</div>
<div style={{ display: "flex", justifyContent: "flex-end" }}>
<Field as="img" name="image" placeholder="الصوره" src={img ? img : image} style={{ height: "50px", width: "50px", float: "right", marginTop: "5px", marginRight: "10px" }} value={image} />

</div> */ 
