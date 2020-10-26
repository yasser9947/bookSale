import { SEARCH_BOOK } from "../user/profile/dashboard/booksConstens"


export const searchBook = (book) =>{
    
    return{
        type : SEARCH_BOOK ,
        paylod : book
    }
}