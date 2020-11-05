import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux'
import { store } from "../index";
import { addBooksUser, addToken, addUser, loginUser } from "../componens/user/userActions";
// import { updateBook } from "../componens/user/profile/dashboard/bookActions";
import Axios from "axios";

export function userGo() {


    let token = localStorage.token
    if (token) {
        let id = jwt_decode(token).id
        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                
            },
        };
        console.log(id)
        Axios.put('/api/user/getinfo',{id} , config)
            .then((data) => {
                console.log(data)
                const user = data.data.user
                store.dispatch(addUser(user))
                store.dispatch(loginUser())
             if (user)   Axios.put('/api/book/userbooks', { books: user.Books })
                    .then(data => store.dispatch(addBooksUser(data.data)))
                    .catch(err => console.log(err))
            })





    }
    else {

    }
    return null

}
