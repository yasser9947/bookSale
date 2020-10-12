import React , { Fragment}from 'react'
import {  Switch ,Route} from 'react-router-dom'
import {Addbook} from './LiftSideComponent/Addbook/Addbook'
import { Ditails } from './LiftSideComponent/Ditails'

export const LeftSide = () => {
    return (
        <Fragment>
            <Switch>
            <Route path= "/dash/user" render={()=><Ditails />} ></Route>
            <Route path= "/dash/addbook" render={()=><Addbook />} ></Route>
            <Route path= "/dash/edit/:id" render={()=> <Addbook />} ></Route>
            </Switch>
          
        </Fragment>
    )
}
