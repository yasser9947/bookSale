import React, { useState } from 'react'
import { SearchBar } from './searchBook/SearchBar'
import { Cards } from './card/Cards'
import {motion} from 'framer-motion'
import Axios from 'axios'
import {useDispatch} from 'react-redux'
import { searchBook } from './bookOrderActions'

export const Order = (props ) => {
    const [flag ,setFlag] = useState(false)
    // const search =()=>  setFlag(true) 
    const dispatch = useDispatch()
   
    let searchHandler = (value , searchType) =>{
        setFlag(true) 
        console.log(value)
        if (value == "") {
            Axios.get(`http://localhost:4000/book/allbooks` ,)
            .then(data => {
                console.log(data)
                dispatch(searchBook(data.data))
            })
            .catch(err => console.log(err))
        }else{
            console.log(searchType)
            Axios.get(`http://localhost:4000/book/${value}-${searchType}`)
            .then(data => {
                dispatch(searchBook(data.data.books))
            })
            .catch(err => console.log(err))
        }
      
    }
    return (
        <div>
           <div className ="container">
            <SearchBar posit={props.posit}  searchHandler={searchHandler} />
           {flag ? <Cards {...props} />: ""} 
           </div>
        </div>
    )
}
