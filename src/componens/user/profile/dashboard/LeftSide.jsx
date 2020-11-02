import React , { Fragment}from 'react'
import {  Switch ,Route} from 'react-router-dom'
import {Addbook} from './LiftSideComponent/Addbook/Addbook'
import { ChangePassword } from './LiftSideComponent/ChangePassword'
import { Ditails } from './LiftSideComponent/Ditails'
import { UserAcount } from './LiftSideComponent/UserAcount'




export const LeftSide = () => {
    return (
        <Fragment>
            <Switch>
            <Route exact path= "/dash/" render={()=><Ditails />} ></Route>
            <Route path= "/dash/user" render={()=><UserAcount />} ></Route>
            <Route path= "/dash/addbook" render={()=><Addbook />} ></Route>
            <Route path= "/dash/edit/:id" render={()=> <Addbook />} ></Route>
            <Route path= "/dash/editpassword" render={()=> <ChangePassword />} ></Route>

            </Switch>
          
        </Fragment>
    )
}
