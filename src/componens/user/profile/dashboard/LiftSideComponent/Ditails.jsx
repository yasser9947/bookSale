import React from 'react';
import Delete from '../../../../../svg/delete.svg'
import LoopArrow from '../../../../../svg/loop-arrow.svg'
import TickMark from '../../../../../svg/tick-mark.svg'
import { useSelector,useDispatch } from 'react-redux'
import { deletBook } from '../bookActions';
let names = [{ name: "اسم الكتاب", to: "name" }, { name: "التخصص", to: "major" }, { name: "الحالة", to: "bookCase" }, { name: "المبلغ", to: "price" }, { name: "المقرر", to: "code" }, { name: "حالة البيع ", to: "status" }]



export const Ditails = () => {
    var books = useSelector(state => state.books.books)
  const dispatch = useDispatch()
    console.log(books)
    return (
        <div className="ditails">
            <div className="ditails__info">
                <div className="ditails__circle ditails__circle--1"> <h5>٢</h5><h6>عدد الكتب</h6></div>
                <div className="ditails__circle ditails__circle--2"><h5>٣</h5><h6>الكتب المباعه</h6></div>
                <div className="ditails__circle ditails__circle--3"><h5>٤</h5><h6>الكتب المعروضه</h6></div>
                <div className="ditails__circle ditails__circle--4"><h5>{books.map(book => Number(book.price)).reduce((a, b) => a + b, 0)}$</h5><h6> اجمالي المبالغ </h6></div>
            </div>
            <div className="ditails__table">
                {names.map((ele, _j) => <div className="ditails__row">  <h5 className="ditails__row--main">{ele.name}</h5> {books.map((book, i) => <h5 className="ditails__column" style={{ backgroundColor: i % 2 == 0 ? "" : "" }}>{!(ele.to == "status") ? book[ele.to] : <div className="ditails__last"> <img onClick={()=>dispatch(deletBook(book))} src={Delete} alt="" /> <img src={LoopArrow} alt="" /> <img src={TickMark} alt="" /> </div>}</h5>)} </div>)}


            </div>
        </div>
    )
}
