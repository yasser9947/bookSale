import React,{useState} from 'react'
import '../../css/component/raido.scss'
export const SearchBar = () => {
const [check, setCheck] = useState([ "rgb(26, 80, 97)" ,"" ,""])
const [placeholder, setPlaceholder] = useState("....مبادئ ادارة الأعمال ,الفيزياء العامة ")

let checkClick = (i)=>{
let arrayColor= ["" , "" , ""]
let arrayPlaceholder=[" مبادئ ادارة الأعمال ,الفيزياء العامة" ,"رياضيات , إدارة الأعمال , فيزياء" , "سلم101 , ريض104 ,فيز111 "]
arrayColor[i] ="rgb(26, 80, 97)" 
setPlaceholder(arrayPlaceholder[i])
setCheck(arrayColor)

}
    return (
        <div className="container__SearchBar">

            <div className="Card">
                <div className="CardInner">
                    <form className="container__radio">
                        <label className="radio label" onChange={()=>checkClick(0)}>اسم الكتاب
                 <input type="checkbox"  defaultChecked/>
                            <span className="checkmark" style={{background:check[0]}} ></span>
                        </label>

                        <label className="radio label"  onChange={()=>checkClick(1)}>التخصص
            <input type="checkbox"  />
                            <span className="checkmark" style={{background:check[1]}} ></span>
                        </label>

                        <label className="radio label" onChange={()=>checkClick(2)}>رمز المقرر
             <input type="checkbox"  />
                            <span className="checkmark" style={{background:check[2]}}  ></span>
                        </label>

             
                    </form>
                    <div className="container2">
                        <div className="Icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </div>
                        <div className="InputContainer">
                            <input className="input" placeholder={"..."+placeholder} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
