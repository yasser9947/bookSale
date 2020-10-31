import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux'
import { store } from "../index";
import { addBooksUser, addToken, addUser, loginUser } from "../componens/user/userActions";
// import { updateBook } from "../componens/user/profile/dashboard/bookActions";
import Axios from "axios";

export function userGo() {

    
    let token = localStorage.token
    if (token) {
        let user = jwt_decode(token).user
        store.dispatch(addUser(user))
        store.dispatch(loginUser())
        Axios.put('http://localhost:4000/book/userbooks' , {books :user.Books })
        .then(data => store.dispatch(addBooksUser(data.data)))
        .catch(err => console.log(err))
  

    } 
    else {

    }
    return null

}
