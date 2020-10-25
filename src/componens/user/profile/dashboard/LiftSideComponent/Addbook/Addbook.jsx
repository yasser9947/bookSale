import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addBook, updateBook } from '../../bookActions'
import { Formik, Form, Field } from 'formik'

let array = ["فيزياء", "كيمياء", "رياضيات"]

// id :"1",
// name : "مبادئ الفيزياء",
// major : "فيزياء",
// bookCase : "جيد" ,
// price : "21" ,
// code :"فيز١٠١", 
// status : true ,
// author :"احمد رمزي" , 
// number :"0548545888",
// image  onClick={() => { book ? dispatch(updateBook(state)) : dispatch(addBook(state)); history.push('/dash/user') }}
const names =  {
    name :"" ,  id  :"", major :"", name :"", price :"", status :"", author :"", image :"", code :"", bookCase :"",  
}
export const Addbook = withRouter(({ history, match }) => {
    const book = useSelector(store => store.books.books.find(ele => ele.id == match.params.id))
    const [state, setstate] = useState(book ? book : {})
    const dispatch = useDispatch()
    const changeHundlr = ({ target: { name, value } }) => setstate({ ...state, [name]: value })
    const { id, major, name, price, status, author, image, code, bookCase, number } = state
    return (
        <>
         
         <Formik
                initialValues={book ? book : names}
                onSubmit={value => {book ? dispatch(updateBook(value)) : dispatch(addBook(value)); history.push('/dash/user')}}
            >
               
          
            <Form className="Login__logInForm" >
                <label htmlFor=""> اسم الكتاب</label>
                <Field type=""  name="name" placeholder="اسم الكتاب" />
                <label htmlFor=""> التخصص</label>
                <select id="cars" onChange={(e) => changeHundlr(e)} name="major" >
                    {array.map(ele => <option value={ele}>{ele}</option>)}
                </select>
                <label htmlFor=""> المؤلف</label>
                <Field type=""  name="author" placeholder="المؤلف"  />
                <label htmlFor=""> حالة الكتاب</label>
                <Field type=""  name="bookCase" placeholder="حالة الكتاب" />
                <label htmlFor="">المبلغ</label>
                <Field type=""  name="price" placeholder="المبلغ"  />
                <label htmlFor="">الصورة</label>
                <Field type=""  name="image" placeholder="الصوره"  />
                <label htmlFor="">الرمز</label>
                <Field type=""  name="code" placeholder="الرمز"  />
                <label htmlFor="">التخصص </label>
                <Field type="text-area"  name="major" placeholder="اختياري"  />
                <button type="submit" className="Login__logInForm__btn btn">اضف كتاب</button>
            </Form>
            </Formik>
        </>
    )
})
