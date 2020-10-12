import { books } from "../assist/testApi"
import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../componens/user/profile/dashboard/booksConstens"




const initState = {
    books: books,
    selectBook: {}
}



const bookReducer = (state = initState, { type, paylod }) => {

    switch (type) {

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