import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./booksConstens"

export const addBook = (book) =>{
    
    return{
        type : ADD_BOOK ,
        paylod : book
    }
}
export const updateBook = (book) =>{
    
    return{
        type : UPDATE_BOOK ,
        paylod : book
    }
}
export const deletBook = (book) =>{
    
    return{
        type : DELETE_BOOK ,
        paylod : book
    }
}