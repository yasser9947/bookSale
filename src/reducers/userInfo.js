import { ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../componens/user/profile/dashboard/booksConstens"
// 

import { ADD_BOOKS_USER, ADD_BOOK_USER, ADD_TOKEN, ADD_USER, DELETE_BOOK_USER, UPDATE_BOOK_USER } from "../componens/user/userConstens"



const initState = {
    user: [],
    userbooks: [],
    token: ""

}



const userReducer = (state = initState, { type, paylod }) => {

    switch (type) {


        case ADD_TOKEN:

            return {
                ...state,
                token: paylod
            }
        case ADD_USER:

            return {
                ...state,
                user: paylod
            }
        case ADD_BOOKS_USER:
            return {
                ...state,
                userbooks: paylod
            }
        case ADD_BOOK_USER:

            return {
                ...state,
                userbooks: [...state.userbooks, paylod]
            }
        case UPDATE_BOOK_USER:

            return {
                ...state,
                userbooks: [...state.userbooks.filter(ele => ele._id != paylod._id), paylod]
            }
        case DELETE_BOOK_USER:
            return {
                ...state,
                userbooks: state.userbooks.filter(ele => ele._id != paylod._id)
            }

        default:
            return state
    }


}

export default userReducer