import React, { useState } from 'react'
import '../../../css/component/raido.scss'
import { motion } from 'framer-motion'


const transition = {duration :1.6 , ease : [0.5 , 0.8 , -0.05 , 0.9]}


export const SearchBar = ({ search , posit }) => {
    const [check, setCheck] = useState(["rgb(26, 80, 97)", "", ""])
    const [placeholder, setPlaceholder] = useState("....مبادئ ادارة الأعمال ,الفيزياء العامة ")

    let checkClick = (i) => {
        let arrayColor = ["", "", ""]
        let arrayPlaceholder = [" مبادئ ادارة الأعمال ,الفيزياء العامة", "رياضيات , إدارة الأعمال , فيزياء", "سلم101 , ريض104 ,فيز111 "]
        arrayColor[i] = "rgb(26, 80, 97)"
        setPlaceholder(arrayPlaceholder[i])
        setCheck(arrayColor)

    }
    return (
        <div className="container__SearchBar">

            <motion.div exit="{{ opacity: 0 }}" initial={{ ...JSON.parse(JSON.stringify(posit)) , x : JSON.parse(JSON.stringify(posit)).x*0.74545 , y : JSON.parse(JSON.stringify(posit)).y*0.4567 , borderRadius :"4px"}} 
            animate ={{
                x: 0 , y :0 , width : "100%" , height :"100%" , position:"inherit"
            }}   transition={transition} 
            className="Card">
                <motion.div className="CardInner" initial ={{opacity :0}} transition ={{delay :1.4}} animate ={{opacity :1}}>
                    <form className="container__radio">
                        <label className="radio label" onChange={() => checkClick(0)}>اسم الكتاب
                     <input type="checkbox" defaultChecked />
                            <span className="checkmark" style={{ background: check[0] }} ></span>
                        </label>
                        <label className="radio label" onChange={() => checkClick(1)}>التخصص
            <input type="checkbox" />
                            <span className="checkmark" style={{ background: check[1] }} ></span>
                        </label>

                        <label className="radio label" onChange={() => checkClick(2)}>رمز المقرر
             <input type="checkbox" />
                            <span className="checkmark" style={{ background: check[2] }}  ></span>
                        </label>
                    </form>
                    <div className="container2">
                        <div className="Icon" onClick={search}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </div>
                        <div className="InputContainer">
                            <input className="input" placeholder={"..." + placeholder} />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>

    )
}
