import React , { Fragment}from 'react'
import {  Switch ,Route} from 'react-router-dom'
import {Addbook} from './LiftSideComponent/Addbook'

export const LeftSide = () => {
    return (
        <Fragment>
            <Switch>
            <Route path= "/dash/user" render={()=><h1> حسابي</h1>} ></Route>
            <Route path= "/dash/addbook" render={()=><Addbook />} ></Route>
            <Route path= "/dash/edit" render={()=><h1> تعديل</h1>} ></Route>
            </Switch>
          
        </Fragment>
    )
}
