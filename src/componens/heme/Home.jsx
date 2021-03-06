import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { transition } from '../../assist/animition'
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { flagflag } from '../user/userActions';


var flglg = true

export const Home = ({position ,posit , history}) => {

  const dispatch = useDispatch()
 const checkLogIN = () => {
  swal("تحتاج تسجل الدخول قبل بيع كتاب ", {
    // buttons: ["تسجيل جديد ", "تسجيل الدخول"],
    className: "red-bg",
    buttons: {
      catch2: {
        text: "تسجيل جديد",
        value: "register",
       className :"btn"
      },
      catch: {
        text: "تسجيل الدخول",
        value: "login",
      }, 
    },
  }).then((value) => {
   if (value === "login") {history.push('/login') ; dispatch(flagflag(false))}
    if( value === "register"){ history.push('/login') ; dispatch(flagflag(true))}
     })

}
  return (
    <div className="theOrder">
      <motion.h1 exit={{ position:"relative",transform : "translateY(-500px)"}} transition={transition} className="theOrder__h1"> الكتاب المستعمل</motion.h1>
      <motion.h2 exit={{ position:"relative",transform : "translateY(-500px)"}} transition={transition} className="theOrder__h2" > لطلاب جامعة المجمعة في الزلفي</motion.h2>

      <div className="box">
        <motion.div className="box__order box__order--1"  
        exit ="{JSON.parse(JSON.stringify(posit))}" 
        transition={transition} ref={ el => {
        if (!el) return
       if (flglg) { flglg = false; position(el.getBoundingClientRect())}
      }}>
          <motion.div exit={{ opacity : 0}} transition={transition} >
            <h3 className="box__h3"> <img src="https://freesvg.org/img/paperback-book-black-gal-.png" height="16px" alt="" /> إبحث عن كتاب </h3>
            <p className="box__p"> ابحث عن الكتاب الذي تريده ثم مباشره تواصل مع البائع</p>
          </motion.div>
          <motion.div exit={{ opacity : 0}} transition={transition} style={{ marginBottom: "10px" }} className="box__btn btn--wght btn ">
            <Link to="/book" className="btn-text">تصفح المزيد</Link>
          </motion.div>
        </motion.div>
        <motion.div exit={{ position:"relative",transform : "translateX(1000px)"}} className="box__order box__order--2">
          <div>
            
            <h3 className="box__h3"> <img src="https://freesvg.org/img/tag.png" height="16px" alt="" /> بيع كتاب</h3>
            {/* <img src="https://www.flaticon.com/svg/static/icons/svg/2721/2721576.svg" className="box__img" alt="" /> */}
            <p className="box__p">من هنا تستطيع الدخول على حسابك و من ثم  بيع اضافه كتابك وبيعه</p>
          </div>
          <div style={{ marginBottom: "10px" }} className="box__btn btn--wght btn ">
            <a  onClick={() => checkLogIN() }   className="btn-text">تصفح المزيد</a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
