import { userGo } from "../assist/FuncTotoken"
// 

import { ADD_BOOKS_USER, ADD_BOOK_USER, ADD_TOKEN, ADD_USER, DELETE_BOOK_USER, LOGIN, LOGOT, UPDATE_BOOK_USER } from "../componens/user/userConstens"



const initState = {
    user: [],
    userbooks: [],
    token: "",
    login: false

}


let i = 0
const userReducer = (state = initState, { type, paylod }) => {
    i =i+1
    if (i >3 ) console.log("yeee doo som func" + i + type)
 
    switch (type) {
        case LOGIN:
            return {
                ...state,
                login: true
            }
        case LOGOT:
            return {
                ...state,
                login: false
            }

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