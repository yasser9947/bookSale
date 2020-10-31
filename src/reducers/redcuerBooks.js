import { books } from "../assist/testApi"
import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK ,SEARCH_BOOK } from "../componens/user/profile/dashboard/booksConstens"

 let  initState = {
    books: [],
    selectBook: {} ,
    
}
if (localStorage.searchBook) {
    
     initState = {
    books: JSON.parse(localStorage.searchBook),
    selectBook: {} ,
    
}
}



console.log(initState)

const bookReducer = (state = initState, { type, paylod }) => {

    switch (type) {
        case SEARCH_BOOK:
            return {
                ...state,
                books: paylod
            }

        case ADD_BOOK:

            return {
                ...state,
                books: [...state.books, paylod]
            }
        case UPDATE_BOOK:

            return {
                ...state,
                books: [...state.books.filter(ele => ele.id != paylod.id ), paylod]
            }
        case DELETE_BOOK:
            console.log(paylod)
            return {
                ...state,
                books: state.books.filter(ele => ele.id != paylod.id )
            }

        default:
            return state
    }


}

export default bookReducer