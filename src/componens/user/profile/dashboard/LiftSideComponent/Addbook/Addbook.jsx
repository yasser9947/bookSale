import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addBookUser, updateBooksUser } from '../../../../userActions'
import { addBook, updateBook } from '../../bookActions'
import { Formik, Form, Field } from 'formik'
import Axios from 'axios'
import swal from '@sweetalert/with-react';
import { mejors } from '../../../../../../assist/testApi'


const names = {
    name: "", id: "", major: "", name: "", price: "", status: "", author: "", image: "", code: "", bookCase: "",
}
export const Addbook = withRouter(({ history, match }) => {
    const book = useSelector(store => store.userDitals.userbooks.find(ele => ele._id == match.params.id))
    const [state, setstate] = useState(book ? book : {})
    const [img, setImg] = useState(false)
    const [crazyArray, setCrazyArray] = useState(new Array(10))
    const dispatch = useDispatch()
    useEffect(() => {


        return () => {

        }
    }, [])
    // data[0].url
    const seacrhImages = (value) => {
        swal({
            text: 'مثلا كتاب الثقافة الاسلامية',
            content: "input",
            button: {
                text: "ابحث",
                closeModal: false,
            },
        }).then((value) => {
            Axios.put('http://localhost:4000/book/images', { search: value })
                .then(data => {
                    console.log(data)

                    let a = crazyArray
                    swal(
                        <div>
                            <h1>اختر الصوره بالضغط عليها</h1>
                            <div className="imageInsearch">
                                {data.data.map((ele, i) => <img src={ele.url} key={i} style={{ border: crazyArray[i] }} onClick={() => { setstate({ ...state, image: ele.url }); a[i] = "6px solid black"; setCrazyArray(a) }} height="150px" width="150px" />)}
                            </div>

                        </div>
                    )
                })
        })
    }
    const testrrrrr = (e) => {
        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", "Client-ID 0c8488e195dbe2d");

        // var formdata = new FormData();

        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
            
        //     redirect: 'follow'
        // };

        // fetch("https://api.imgur.com/3/image", requestOptions)
        //     .then(response => response)
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        // console.log(e.target.files[0])
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID 0c8488e195dbe2d");

        var formdata = new FormData();
        formdata.append("image", e.target.files[0]);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.imgur.com/3/image", requestOptions)
            .then(response => response.json())
            .then(result => setstate({ ...state, image: result.data.link }))
            .catch(error => console.log('error', error));
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
                {mejors.map(ele => <option value={ele}>{ele}</option>)}
            </select>
            <label htmlFor=""> المؤلف</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="author" placeholder="المؤلف" value={author} />
            <label htmlFor=""> حالة الكتاب</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="bookCase" placeholder="حالة الكتاب" value={bookCase} />
            <label htmlFor="">المبلغ</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="price" placeholder="المبلغ" value={price} />
            <label htmlFor="">الرمز</label>
            <input type="" onChange={(e) => changeHundlr(e)} name="code" placeholder="الرمز" value={code} />
            <label htmlFor="">الصورة</label>
            <div style={{display: "flex" , justifyContent :"flex-end" , alignItems :"center" , width :"100%"}}>
           
                <input className="btn" type="file" style={{ width: "20%" }} c onChange={(e) => testrrrrr(e)} />
                <h6>او ارفع الصوره من جهازك</h6>
                <button className="btn" style={{ width: "25%" }} type="button" onClick={() => seacrhImages("رياضيات")} > ابحث عن صوره</button>
               
            </div>
            <img type="" onChange={(e) => changeHundlr(e)} name="image" placeholder="الصوره" src={img ? img : image} style={{height :"50px" , width :"50px" , float :"right" , marginTop :"5px"}}/>

            <button className="Login__logInForm__btn btn" onClick={() => { book ? dispatch(updateBooksUser(state)) : dispatch(addBookUser(state)); history.push('/dash/user') }}>اضف كتاب</button>
        </form>
    )
})
