import React from 'react'
import detailse from '../../../../../svg/key.svg'

export const ChangePassword = () => {
    return (
        <div>
            <div className="infoUser">

                <div className="infoUser__header">
                    <img src={detailse} alt="userinfo" />
                    <h2>تغير الباسسورد</h2>
                    <p>حذ راحت في تعديل اي من بياناتك كـ مستخدم في الكتاب المستعمل </p>
                </div>
                <form action="" className="infoUser__form">
                    <div className="infoUser__form__oneInput" >
                        <label htmlFor=""> :كلمة المرور القديمة</label>
                        <input type="text" />
                        {false &&
                            <div className="infoUser__form__eroor" >
                                <div class="tool_tip">
                                    <span > ادخل الاسم</span>
                                </div>
                            </div>}
                    </div>
                    <div className="infoUser__form__oneInput" >
                        <label htmlFor=""> :كلمة المرور الجديدة</label>
                        <input type="text" />
                        {false &&
                            <div className="infoUser__form__eroor" >
                                <div class="tool_tip">
                                    <span > ادخل الاسم</span>
                                </div>
                            </div>}
                    </div>
                    <button className="infoUser__form__btn btn-gry" > غير</button>
                </form>
            </div>
        </div>
    )
}
