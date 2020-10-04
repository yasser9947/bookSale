import React from 'react';
import Delete from '../../../../../svg/delete.svg'
import LoopArrow from '../../../../../svg/loop-arrow.svg'
import TickMark from '../../../../../svg/tick-mark.svg'

let books =[{
    name : "مبادئ الفيزياء",
    section : "فيزياء",
    rate : "جيد" ,
    amont : "25" ,
    mgrr :"فيز١٠١", 
     seto : "تم البيع"

} , {   
     name : "مبادئ الفيزياء",
section : "فيزياء",
rate : "جيد" ,
amont : "25" ,
mgrr :"فيز١٠١", 
 seto : "تم البيع"} ]
export const Ditails = () => {
    let names =[{name :"اسم الكتاب" , to :"name"} ,  {name :"التخصص" , to :"section"} ,{name : "الحالة" , to :"rate"},{name :"المبلغ" , to :"amont"} ,{name :"المقرر" , to :"mgrr"} ,{name : "حالة البيع " , to :"seto"}]

    return (
        <div className="ditails">
            <div className="ditails__info">
                <div className="ditails__circle ditails__circle--1"> <h5>٢</h5><h6>عدد الكتب</h6></div>
                <div className="ditails__circle ditails__circle--2"><h5>٣</h5><h6>الكتب المباعه</h6></div>
                <div className="ditails__circle ditails__circle--3"><h5>٤</h5><h6>الكتب المعروضه</h6></div>
                <div className="ditails__circle ditails__circle--4"><h5>١٢٥$</h5><h6> اجمالي المبالغ </h6></div>
            </div>
            <div className="ditails__table">
    {names.map((ele,_j)  => <div className="ditails__row">  <h5 style ={{ borderBottom: "1px solid black" , paddingBottom :"5px"}}>{ele.name}</h5> {books.map((book,i) => <h5 className="ditails__column" style={{backgroundColor:i%2==0? "" : "" , margin :"3px" , padding :"0"}}>{ !(ele.to =="seto") ? book[ele.to] :<div className="ditails__last"> <img src ={Delete} alt ="" /> <img src ={LoopArrow} alt ="" /> <img src ={TickMark} alt ="" /> </div>}</h5>)} </div>)}
              
              
            </div>
        </div>
    )
}
