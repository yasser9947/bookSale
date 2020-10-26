import React from 'react'
import {OneCard}  from './OneCard.jsx'
import '../../../css/component/books.scss'
import { useSelector } from 'react-redux'

export const Cards = (props) => {
    const books = useSelector(state => state.books.books)
    return (
        <div>
             <section className="books">
            {books.map(book => <> <OneCard book={book} {...props}/></>)} 
          
             </section>
       
        </div>
    )
}
