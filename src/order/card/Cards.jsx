import React from 'react'
import { OneCard } from './OneCard'
import '../../css/component/books.scss'
export const Cards = () => {
    return (
        <div>
             <section className="books">
             <OneCard />
             <OneCard />
             <OneCard />
             <OneCard />
             </section>
       
        </div>
    )
}
