import React from 'react'
import bookLogo from '../../svg/bookLogo.png'
import userTologin from '../../svg/userTologin.svg'
import userLoginS from '../../svg/userLoginS.svg'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
export const NaveBAr =withRouter( ({history}) => {
    const login = useSelector(store => store.userDitals.login)

    return (
        <nave className="navebar">
            <img src={bookLogo} onClick={() => history.push('/')}  className="navebar__logo" />
            <div className="navebar__right" onClick={() => login ?history.push('/dash') :history.push('/login') }>
                <img src={!login ? userTologin : userLoginS}  className="navebar__userDitailse" />
                {!login && <label htmlFor="">سجل الدخول</label>}
            </div>

        </nave>
    )
})
