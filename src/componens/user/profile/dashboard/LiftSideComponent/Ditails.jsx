import React from 'react';
import Delete from '../../../../../svg/delete.svg'
import LoopArrow from '../../../../../svg/loop-arrow.svg'
import TickMark from '../../../../../svg/tick-mark.svg'
import { useSelector, useDispatch } from 'react-redux'
import { deletBook } from '../bookActions';
import { withRouter } from 'react-router-dom';
import {changeStatus, names} from "../../../../../assist/testApi"
import { deleteBooksUser } from '../../../userActions';


// user.detales.userbooks
export const Ditails = withRouter(({ history }) => {
    var books = useSelector(state => state.userDitals.userbooks)
    const dispatch = useDispatch()
    return (
        <div className="ditails">
            <div className="ditails__info">
                <div className="ditails__circle ditails__circle--1"> <h5>{books.length}</h5><h6>عدد الكتب</h6></div>
                <div className="ditails__circle ditails__circle--2"><h5>{(books.filter(ele  => ele.status == true)).length}</h5><h6>الكتب المباعه</h6></div>
                <div className="ditails__circle ditails__circle--3"><h5>{(books.filter(ele  => ele.status !== true)).length}</h5><h6>الكتب المعروضه</h6></div>
                <div className="ditails__circle ditails__circle--4"><h5>{books.map(book => Number(book.price)).reduce((a, b) => a + b, 0)}$</h5><h6> اجمالي المبالغ </h6></div>
            </div>
            <div className="ditails__table">
    {names.map((ele, _j) => <div key={_j} className="ditails__row">  <h5 className="ditails__row--main">{ele.name}</h5> {books.sort((x,y) => (x.status === y.status)? 0 : (x.status? 1 : -1)).map((book, i) => <h5 key={i} className="ditails__column" style={{ backgroundColor: i % 2 == 0 ? "" : "" }}>{!(ele.to == "status") ? book[ele.to] : <div className="ditails__last"> {book.status?  <h5 style={{background:"green"}}>تم البيع</h5> :<> <img onClick={() => dispatch(deleteBooksUser(book))} src={Delete} alt="" /> <img onClick={() => history.push(`/dash/edit/${book._id}`)} src={LoopArrow} alt="" /> <img src={TickMark} alt="" onClick ={()=>changeStatus(book._id)} /> </>} </div> }</h5>)} </div>)}
            </div>
        </div>
    )
})
