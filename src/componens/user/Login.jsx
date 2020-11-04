import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { userGo } from '../../assist/FuncTotoken';
import LoginForm from './LoginForm';
import {Laoding} from '../../assist/animitions/Laoding'

import {motion} from 'framer-motion'
import { flip } from '../../assist/animition'
import Register from './Register';

export const Login = withRouter(({ history }) => {
    const [flag, setFlag] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userReg, setUserReg] = useState({})

 
    const logIn = (log) => {
        axios({ method: "POST", data: { email: log.email, password: log.password }, withCredentials: true, url: "/api/user/login", })
            .then(data => {

                if (!data.data) return console.log(data)
                console.log(data)
                localStorage.setItem("token" , data.data.token)
               
                userGo()
                setLoading(true)
                setTimeout(() => {
                     history.push('/dash')
                }, 2000);
               
            })
            .catch(err => console.log(err))
        //     setLoading(true)
        //     setTimeout(() => {
        //         history.push('/dash/user')
        //    }, 2000);
 
    }

    return (
        <motion.div 
        exit={{ position:"relative",transform : " rotateY(90deg)"}} transition={flip}
        className="container" >
            
            <div className="Login">
                <div className="Login__bg Login__bg--1">

                </div>
                <div className="Login__bg Login__bg--2">


                    <div className="Login__heading">

                        <h3 className="Login__heading--1" onClick={() => {setFlag(true); setLoading(false)}} style={{ borderBottom: flag ? "1px black solid" : "none", opacity: flag ? "1" : "0.5" }}>التسجيل </h3>
                        <h3 className="Login__heading--2" onClick={() => setFlag(false)} style={{ borderBottom: flag ? "none" : "1px black solid", opacity: flag ? "0.5" : "1" }}> تسجيل الدخول</h3>
                    </div>
                    {!flag ?
                    //  <div className="Login__logInForm">
                    //     <label htmlFor=""> البريد الإلكتروني</label>
                    //     <input type="email" placeholder="yasser@hotmail.com" name="email" onChange={(e) => change(e.target)} />
                    //     <label htmlFor="">كلمة المرور</label>
                    //     <input type="password" placeholder="**" name="password" onChange={(e) => change(e.target)} />
                    //     <button onClick={() => { logIn(); }} to="/dash" className="Login__logInForm__btn btn">تسجيل الدخول</button>
                    //     <h5 >نسيت كلمة المرور</h5>
                    // </div>
                    
                            <LoginForm loading={loading} logIn={logIn} />
                        :
                      <Register />}
                         {loading&& <Laoding />}

                </div>
            </div>
        </motion.div>
    )
})
