import React from 'react'
import bookLogo from '../../svg/bookLogo.png'
import userTologin from '../../svg/userTologin.svg'
import userLoginS from '../../svg/userLoginS.svg'
export const NaveBAr = () => {
    return (
        <nave className="navebar">
            <img src={bookLogo} className="navebar__logo" />
            <div className="navebar__right" >
                <img src={true ? userTologin : userLoginS} className="navebar__userDitailse" />
                {true && <label htmlFor="">سجل الدخول</label>}
            </div>

        </nave>
    )
}
