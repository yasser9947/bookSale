import { Switch } from "react-router-dom"

export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"

const initState={
    count :1 , 
    pipsi :"yasser"
}

export function incrase (amont ) {
    return {
        type : INCREASE , 
        payload :amont
    }

}
export function decrase (amont ) {
    return {
        type : DECREASE , 
        payload :amont
    }

}

const reducer =(state =initState , action) =>{

    switch (action.type) {
        case INCREASE:
        return { 
            ...state , 
            count : state.count +action.payload
        }
        case DECREASE:
        return {
            ...state ,
            count : state.count -action.payload
        }
    
        default: 
        return state
    }

   
}

export default reducer