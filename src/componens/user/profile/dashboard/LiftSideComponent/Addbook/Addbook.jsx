import React from 'react'
let array = ["فيزياء" ,"كيمياء" , "رياضيات"]

export const Addbook = () => {
    return (
        <form className="Login__logInForm">
            <label htmlFor=""> اسم الكتاب</label>
            <input type="email" placeholder="اسم الكتاب" />
            <label htmlFor=""> التخصص</label>
            <select id="cars" name="cars">
               { array.map(ele => <option value={ele}>{ele}</option>)}
            </select>
            <label htmlFor=""> المؤلف</label>
            <input type="email" placeholder="المؤلف" />
            <label htmlFor=""> حالة الكتاب</label>
            <input type="email" placeholder="حالة الكتاب" />
            <label htmlFor="">المبلغ</label>
            <input type="" placeholder="المبلغ" />
            <label htmlFor="">الصورة</label>
            <input type="" placeholder="المبلغ" />
            <label htmlFor="">الصورة</label>
            <input type="" placeholder="الصورة" />
            <label htmlFor="">وصف حالة الكتاب </label>
            <input type="text" placeholder="اختياري" />
            <button className="Login__logInForm__btn btn">اضف كتاب</button>
        </form>
    )
}
