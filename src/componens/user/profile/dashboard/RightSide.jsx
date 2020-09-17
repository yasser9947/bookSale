import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../../../assist/useWindowDimensions'

export const RightSide = () => {
    const { height, width } = useWindowDimensions();
    const [flag, setFlag] = useState(true)
    return (
        <Fragment>
            {!(width > 600 && flag) ?
                <div onClick={() => setFlag(!flag) } className="lines">
                    <div></div>
                    <div></div>
                    <div></div>
                </div> : ""}
            {(width > 600 || !flag) ?
                < > <div className="dashboard__right__info">
                    <img src="https://www.free-css.com/assets/files/free-css-templates/preview/page192/dashgum/assets/img/ui-sam.jpg" alt="" srcset="" />
                    <h4>name </h4>
                </div>

                    <div className="dashboard__right__box">
                        <Link to="/dash/user" className="dashboard__right__box__a"  > حسابي</Link>
                    </div>
                    <div className="dashboard__right__box">
                        <Link className="dashboard__right__box__a"  > معلومات البيع</Link>
                    </div>
                    <div className="dashboard__right__box">
                        <Link to="/dash/addbook" className="dashboard__right__box__a"  > اضافة كتاب</Link>
                    </div>
                    <div className="dashboard__right__box">
                        <Link to="/dash/edit" className="dashboard__right__box__a"  > تعديل كتب</Link>
                    </div>
                </> : ""}

        </Fragment>
    )
}
