import React from 'react'
import money from "../../../svg/money.svg"
// user.png customer-satisfaction.png location.png
import user from "../../../svg/user.png"
import customer from "../../../svg/customer-satisfaction.png"
import location from "../../../svg/location.png"
import { Link } from 'react-router-dom'

export const OneCard = (props) => {

    const { id, major, name, price, status, author, image, code, bookCase } = props.book
    return (

        <div className="book">
            { true && <>
                <div className ="book__up">

                    <img src={image} alt="book" className="book__img" />
                    <h5 className="book__name">{name}</h5>
                </div>
                <div className ="book__center">
                    <div className ="book__ditails">
                    <img src={customer}   alt="" />  <p>الحالة :{bookCase}</p>
                    </div>
                    <div className="book__ditails">
                        <img src={user}   alt="" /> <p> {author}</p>
                    </div>
                    <div className="book__ditails">

                        <img src={location}   alt="" />  <p>الزلفي </p>
                    </div>
                    <div className="book__ditails">

                        <img src={money}   alt="" />  <p>  {price} Rs   </p>
                    </div>
                </div>
                <button onClick={() => { props.history.push(`/book/${id}`) }} className="btn2 book__btn">مزيدا من التفاصيل</button>
            </>

            }


        </div>


    )
}


