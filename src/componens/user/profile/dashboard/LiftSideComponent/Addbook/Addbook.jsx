import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addBookUser, updateBooksUser } from '../../../../userActions'
import { addBook, updateBook } from '../../bookActions'
import { Formik, Form, Field } from 'formik'
import Axios from 'axios'
import swal from '@sweetalert/with-react';

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
const names = {
    name: "", id: "", major: "", name: "", price: "", status: "", author: "", image: "", code: "", bookCase: "",
}
export const Addbook = withRouter(({ history, match }) => {
    const book = useSelector(store => store.userDitals.userbooks.find(ele => ele._id == match.params.id))
    const [state, setstate] = useState(book ? book : {})
    const [img , setImg] = useState(false)
    const [crazyArray , setCrazyArray] =useState(new Array(10))
    const dispatch = useDispatch()
    useEffect(() => {


        return () => {

        }
    }, [])
    // data[0].url
    const seacrhImages = (value) => {
        swal({
            text: 'Search for a movie. e.g. "La La Land".',
            content: "input",
            button: {
              text: "Search!",
              closeModal: false,
            },
          }).then((value) => {
            Axios.put('http://localhost:4000/book/images', { search:value  })
                .then(data => {
                    console.log(data)
                    
                    let a = crazyArray
                    swal(
                        <div>
                            <h1>Hello world!</h1>
                            <div className ="imageInsearch">
                            {data.data.map((ele,i) => <img src={ele.url} key={i}  style={{border :crazyArray[i]}} onClick={()=>  {setstate({...state,image :ele.url }) ;a[i]="6px solid black" ;setCrazyArray(a) }} height="150px" width="150px" />)}
                            </div>
                            <p>
                                This is now rendered with JSX!
                              </p>
                        </div>
                    )
                })
        })
    }

console.log(crazyArray)
    const changeHundlr = ({ target: { name, value } }) => setstate({ ...state, [name]: value })
    const { id, major, name, price, status, author, image, code, bookCase, number } = state
    return (
        <form className="Login__logInForm" >
            <label htmlFor=""> اسم الكتاب</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="name" placeholder="اسم الكتاب" value={name} />
            <label htmlFor=""> التخصص</label>
            <select dir="rtl" id="" onChange={(e) => changeHundlr(e)} name="major" value={major}>
                {array.map(ele => <option value={ele}>{ele}</option>)}
            </select>
            <label htmlFor=""> المؤلف</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="author" placeholder="المؤلف" value={author} />
            <label htmlFor=""> حالة الكتاب</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="bookCase" placeholder="حالة الكتاب" value={bookCase} />
            <label htmlFor="">المبلغ</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="price" placeholder="المبلغ" value={price} />
            <label htmlFor="">الصورة</label>
            <input value="Add to favorites" type="button" onClick={() => seacrhImages("رياضيات")} />
            <input type="" onChange={(e) => changeHundlr(e)} name="image" placeholder="الصوره" value={img ? img :image} />
            <label htmlFor="">الرمز</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="code" placeholder="الرمز" value={code} />
            <label htmlFor="">التخصص </label>
            <input type="text-area" onChange={(e) => changeHundlr(e)} name="major" placeholder="اختياري" value={major} />
            <button className="Login__logInForm__btn btn" onClick={() => { book ? dispatch(updateBooksUser(state)) : dispatch(addBookUser(state)); history.push('/dash/user') }}>اضف كتاب</button>
        </form>
    )
})
