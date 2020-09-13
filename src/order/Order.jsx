import React from 'react'
import { SearchBar } from './searchBook/SearchBar'
import { Cards } from './card/Cards'

export const Order = () => {
    return (
        <div>
           <div className ="container">
            <SearchBar />
            <Cards />
           </div>
        </div>
    )
}
