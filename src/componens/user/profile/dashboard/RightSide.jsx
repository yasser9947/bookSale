import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../../../assist/useWindowDimensions'

export const RightSide = () => {
    const { height, width } = useWindowDimensions();
    const [flag, setFlag] = useState(true)
    const user = useSelector(state => state.userDitals.user)

    return (

        <div className={`dashboard__right ${!flag ? 'animtionDown' : ""}`}>
            {!(width > 600 && flag) ?
                <div onClick={() => setFlag(!flag)} className="lines">
                    <div></div>
                    <div></div>
                    <div></div>
                </div> : ""}
            {(width > 600 || !flag) ?
                < > <div className="dashboard__right__info">
                    <img src={user.image} alt="صوره" />
                    <h3>{user.name} </h3>
                </div>
                    <div className="dashboard__right__box">
                        <Link to="/dash" className="dashboard__right__box__a"  > معلوماتي</Link>
                    </div>
                    <div className="dashboard__right__box">
                        <Link to="/dash/user" className="dashboard__right__box__a"  > حسابي</Link>
                    </div>

                    <div className="dashboard__right__box">
                        <Link to="/dash/addbook" className="dashboard__right__box__a"  > اضافة كتاب</Link>
                    </div>
                    <div className="dashboard__right__box">
                        <Link to="/dash/editpassword" className="dashboard__right__box__a"  > تغيير كلمة المرور</Link>
                    </div>
                </> : ""}
        </div>

    )
}
