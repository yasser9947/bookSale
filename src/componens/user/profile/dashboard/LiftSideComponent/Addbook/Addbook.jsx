import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addBookUser, updateBooksUser } from '../../../../userActions'
import { addBook, updateBook } from '../../bookActions'
import Axios from 'axios'
import swal from '@sweetalert/with-react';
import { bookCases, mejors } from '../../../../../../assist/testApi'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { FormEroor } from '../../../../../../assist/FormEroor'
import { SearchImage } from '../../../../../../assist/animitions/SearchImage'
import FormErorBook from '../../../../../../assist/FormErorBook'

const validtionSchiema = yup.object({
    name: yup.string().required("لا يمكن ان يكون فاضي !"),
    major: yup.string().required("لا يمكن ان يكون فاضي !"),
    author: yup.string().required("لا يمكن ان يكون فاضي !"),
    bookCase: yup.string().required("لا يمكن ان يكون فاضي !"),
    price: yup.number().required("لا يمكن ان يكون فاضي !"),
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
        <div className="addBook">


            <Formik
                initialValues={state}
                validationSchema={validtionSchiema}
                // book ? dispatch(updateBooksUser(state)) : dispatch(addBookUser(state)); history.push('/dash/user') 
                onSubmit={(values) => { if (!(image == "")) { book ? dispatch(updateBooksUser({ ...values, image })) : dispatch(addBookUser({ ...values, image })); history.push('/dash') } else { setImg2(true) } }} >
                <Form className="addBook__form" >
                    <div className="addBook__form__oneInput" >
                        <label htmlFor=""> اسم الكتاب</label>
                        <Field name="name" placeholder="اسم الكتاب" />
                        <FormErorBook status={"ادخل الاسم"} name={"name"} />
                    </div>
                    <div className="addBook__form__oneInput" >
                        <label htmlFor=""> التخصص</label>
                        <Field as="select" dir="rtl" id="" name="major" className="input2">
                            {mejors.map((ele, key) => <option key={key} value={ele}>{ele}</option>)}
                        </Field>
                        <FormErorBook status={"ادخل التخصص"} name={'major'} />
                    </div>
                    <div className="addBook__form__oneInput" >
                        <label htmlFor=""> المؤلف</label>
                        <Field type="" name="author" placeholder="المؤلف" />
                        <FormErorBook status={"ادخل اسم المؤلف"} name={'author'} />
                    </div>
                    <div className="addBook__form__oneInput" >
                        <label htmlFor=""> حالة الكتاب</label>
                        <Field as="select" dir="rtl" id="" name="bookCase" className="input2">
                            {bookCases.map((ele, key) => <option key={key} value={ele}>{ele}</option>)}
                        </Field>
                        <FormErorBook status={"ادخل حالة الكتاب"} name={'bookCase'} />
                    </div>
                    <div className="addBook__form__oneInput" >
                        <label htmlFor="">المبلغ</label>
                        <Field type="" name="price" placeholder="المبلغ" />
                        <FormErorBook status={"ادخل المبلغ رقم"} name={'price'} />
                    </div>
                    <div className="addBook__form__oneInput" >
                        <label htmlFor=""><span style={{fontSize:"10px"}}>(اختياري)</span> رمز المقرر</label>
                        <Field type="" name="code" placeholder="الرمز" />
                        <FormErorBook status={"ادخل رمز المقرر"} name={'code'} />
                    </div >
                    <SearchImage state={state} setState={setstate} img={img} image={image} />
                    {img2 && <div> <label className="addBook__form__erorr2" > مافي صوره ):</label></div>}

                    <button type="submit" className="infoUser__form__btn btn-gry-secondry" > تأكيد</button> 
                    {/* onClick={() => { book ? dispatch(updateBooksUser(state)) : dispatch(addBookUser(state)); history.push('/dash/user') }} */}
                </Form>
            </Formik>
        </div>
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
