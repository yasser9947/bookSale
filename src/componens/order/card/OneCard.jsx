import React from 'react'
import money from "../../../svg/money.svg"
// user.png customer-satisfaction.png location.png
import user from "../../../svg/user.png"
import customer from "../../../svg/customer-satisfaction.png"
import location from "../../../svg/location.png"
import { Link } from 'react-router-dom'

export const OneCard = (props) => {

    const { id, major, name,price,status ,author,image ,code ,bookCase} = props.book
    return (

        <div className="book">
            { true && <>
                <img src={image} alt="book" className="book__img" />
                <svg className="book__like">
                    {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
                </svg>
                <h5 className="book__name">{name}</h5>
                <div className="book__location">
                    <svg>
                        <use href="../../svg/"></use>
                    </svg>
            <img src={customer} height="30px" style={{ marginRight: "7px" }} alt="" />  <p>الحالة :{bookCase}</p>
                </div>
                <div className="book__rooms">
                    <svg>
                        {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
                    </svg>
            <img src={user} height="30px" style={{ marginRight: "7px" }} alt="" /> <p> {author}</p>
                </div>
                <div className="book__area">
                    <svg>
                        {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
                    </svg>
                    <img src={location} height="30px" style={{ marginRight: "7px" }} alt="" />  <p>الزلفي </p>
                </div>
                <div className="book__price">
                    <svg>
                        {/* <use xlink:href="img/sprite.svg#icon-key"></use> */}
                    </svg>
                    <img src={money} height="30px" style={{ marginRight: "7px" }} alt="" />  <p>  {price} Rs   </p>
                </div>
                <button onClick={() => { props.history.push(`/book/${id}`) }} className="btn2 book__btn">مزيدا من التفاصيل</button>
            </>}


        </div>


    )
}


