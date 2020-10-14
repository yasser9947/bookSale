import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addBook, updateBook } from '../../bookActions'
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
// image 
export const Addbook = withRouter(({ history, match }) => {
    const book = useSelector(store => store.books.books.find(ele => ele.id == match.params.id))
    const [state, setstate] = useState(book ? book : {})
    const dispatch = useDispatch()
    const changeHundlr = ({ target: { name, value } }) => setstate({ ...state, [name]: value })
    const { id, major, name, price, status, author, image, code, bookCase, number } = state
    return (
        <form className="Login__logInForm" >
            <label htmlFor=""> اسم الكتاب</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="name" placeholder="اسم الكتاب" value={name} />
            <label htmlFor=""> التخصص</label>
            <select id="cars" onChange={(e) => changeHundlr(e)} name="major" value={major}>
                {array.map(ele => <option value={ele}>{ele}</option>)}
            </select>
            <label htmlFor=""> المؤلف</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="author" placeholder="المؤلف" value={author} />
            <label htmlFor=""> حالة الكتاب</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="bookCase" placeholder="حالة الكتاب" value={bookCase} />
            <label htmlFor="">المبلغ</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="price" placeholder="المبلغ" value={price} />
            <label htmlFor="">الصورة</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="image" placeholder="الصوره" value={image} />
            <label htmlFor="">الرمز</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="code" placeholder="الرمز" value={code} />
            <label htmlFor="">التخصص </label>
            <input type="text-area" onChange={(e) => changeHundlr(e)} name="major" placeholder="اختياري" value={major} />
            <button className="Login__logInForm__btn btn" onClick={() => { book ? dispatch(updateBook(state)) : dispatch(addBook(state)); history.push('/dash/user') }}>اضف كتاب</button>
        </form>
    )
})
