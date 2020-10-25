import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux'
import { store } from "../index";
import { addBooksUser, addToken, addUser } from "../componens/user/userActions";
import { updateBook } from "../componens/user/profile/dashboard/bookActions";
import Axios from "axios";

export function userGo() {

    // const dispatch = useDispatch()

    // addUser
    // addToken
    // addBooksUser
    
    let token = localStorage.token
    if (token) {
        let user = jwt_decode(token).user
        store.dispatch(addUser(user))
                console.log(user.Books)

        Axios.put('http://localhost:4000/book/userbooks' , {books :user.Books })
        .then(data => store.dispatch(addBooksUser(data.data)))
        .catch(err => console.log(err))
        // console.log(user)

    } 
    else {

    }
    return null

}

// const mapDispatchToProps = dispatch => ({
//     sendMsg: msg => {
//         dispatch(addUser(msg));
//         dispatch(navigateTo({ routeName: 'myMsgList' }));
//     }
//    });
   
//    export default connect(null, mapDispatchToProps)(userGo)
