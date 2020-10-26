import Axios from "axios"
import { store } from '../../index'
import { ADD_BOOKS_USER, ADD_BOOK_USER, ADD_TOKEN, ADD_USER, DELETE_BOOK_USER, LOGIN, LOGOT, UPDATE_BOOK_USER } from "./userConstens"

export const addToken = (paylod) => {

    return {
        type: ADD_TOKEN,
        paylod: paylod
    }
}
export const addUser = (paylod) => {

    return {
        type: ADD_USER,
        paylod: paylod
    }
}
export const loginUser = (paylod) => {

    return {
        type: LOGIN,
        paylod: paylod
    }
}
export const logOutUser = (paylod) => {

    return {
        type: LOGOT,
        paylod: paylod
    }
}
export const addBooksUser = (books) => {

    return {
        type: ADD_BOOKS_USER,
        paylod: books
    }
}
export const addBookUser = (book) => {

    
    let id = store.getState().userDitals.user._id
    Axios.post(`http://localhost:4000/book/` , {book ,id})
    .then(data => console.log(data))
    .catch(err => console.log(err))
    return {
        type: ADD_BOOK_USER,
        paylod: book
    }
}
export const updateBooksUser = (book) => {
    Axios.put(`http://localhost:4000/book/${book._id}` , {book })
    .then(data => console.log(data))
    .catch(err => console.log(err))
    return {
        type: UPDATE_BOOK_USER,
        paylod: book
    }
}
export const deleteBooksUser = (book) => {

 Axios.delete(`http://localhost:4000/book/${book}`)
        .then(data => console.log(data))
        .catch(err => console.log(err))

    return {
        type: DELETE_BOOK_USER,
        paylod: book
    }
}
