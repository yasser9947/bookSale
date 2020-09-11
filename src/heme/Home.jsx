import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="theOrder">
            
        <h1 className="theOrder__h1"> الكتاب المستعمل</h1>
        <div className="box">
          <div className="box__order box__order--1">
             
              <h3 className="box__h3"> <img src="https://freesvg.org/img/paperback-book-black-gal-.png" height="16px" /> إبحث عن كتاب </h3>
              
           
            <img src="https://freesvg.org/img/simple-globe-search.png" className="box__img" />
            <p className="box__p"> من هنا تستطيع طلب مباشر من كريم كيو في ياخذ فقط من يوم واحد توصيل</p>
         <div className ="box__btn btn--wght btn ">
         <Link to="/order"  className="btn-text">تصفح المزيد</Link> 
         </div>
          </div>
          <div className="box__order box__order--2">
            <h3 className="box__h3"> <img src="https://freesvg.org/img/tag.png" height="16px" /> بيع كتاب</h3>
            <img src="https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png" className="box__img" />
            <p className="box__p">هنا يكون المبلغ اوفر ولكن يأخذ وقت اطول للوصول ما بين ١٤-٢٨ يوم</p>
            <div className ="box__btn btn--wght btn ">
       <Link to="/preOrder"  className="btn-text">تصفح المزيد</Link> 
         </div>
          </div>
        </div>
      </div>
    )
}
