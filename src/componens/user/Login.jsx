import React, { useState } from 'react'
import { Link ,withRouter} from 'react-router-dom'

export const Login = withRouter(({history}) => {
    const [flag, setFlag] = useState(false)

    return (
        <div className="container">
            <div className="Login">
                <div className="Login__bg Login__bg--1">

                </div>
                <div className="Login__bg Login__bg--2">


                    <div className="Login__heading">

                        <h3 className="Login__heading--1" onClick={() => setFlag(!flag)} style={{ borderBottom: flag ? "1px black solid" : "none", opacity: flag ? "1" : "0.5" }}>التسجيل </h3>
                        <h3 className="Login__heading--2" onClick={() => setFlag(!flag)} style={{ borderBottom: flag ? "none" : "1px black solid", opacity: flag ? "0.5" : "1" }}> تسجيل الدخول</h3>
                    </div>
                    {!flag ? <div className="Login__logInForm">
                        <label htmlFor=""> البريد الإلكتروني</label>
                        <input type="email" placeholder="yasser@hotmail.com" />
                        <label htmlFor="">كلمة المرور</label>
                        <input type="password" placeholder="**" />
                        <button onClick={()=>{history.push('/dash')}} to="/dash" className="Login__logInForm__btn btn">تسجيل الدخول</button>
                        <h5 >نسيت كلمة المرور</h5>
                    </div>

                        :
                        <div className="Login__logInForm">
                            <label htmlFor=""> الاسم</label>
                            <input type="email" placeholder="الاسم" />
                            <label htmlFor=""> رقم الجوال</label>
                            <input type="email" placeholder="٠٥٥١٢٣٤٥٦٧" />
                            <label htmlFor=""> البريد الإلكتروني</label>
                            <input type="email" placeholder="yasser@hotmail.com" />
                            <label htmlFor="">كلمة المرور</label>
                            <input type="password" placeholder="" />
                            <button className="Login__logInForm__btn btn">تسجيل الدخول</button>

                        </div>}

                </div>
            </div>
        </div>
    )
})
