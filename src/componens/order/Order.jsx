import React, { useState } from 'react'
import { SearchBar } from './searchBook/SearchBar'
import { Cards } from './card/Cards'

export const Order = (props) => {
    const [flag ,setFlag] = useState(false)
    const search =()=>{
        setFlag(true)
    }

    return (
        <div>
           <div className ="container">
            <SearchBar search={search} />
           {flag ? <Cards {...props} />: ""} 
           </div>
        </div>
    )
}
