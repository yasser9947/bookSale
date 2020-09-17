import React from 'react'
import {OneCard}  from './OneCard.jsx'
import '../../../css/component/books.scss'
export const Cards = (props) => {
    return (
        <div>
             <section className="books">
             <OneCard {...props}/>
             <OneCard {...props}/>
             <OneCard {...props}/>
             <OneCard {...props}/>
             </section>
       
        </div>
    )
}
