import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import './css/main.scss'
import { Home } from './componens/heme/Home';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { Order } from './componens/order/Order';
import { PreOrder } from './componens/order/PreOrder';
import { OneBook } from './componens/order/OneBook';
import { Login } from './componens/user/Login';
import ScrollToTop from './assist/ScrollToTop'
import { Dashboard } from './componens/user/profile/Dashboard';

function App(props) {
  return (
    <div className="">
      {/* <button>+</button>
  <h5>{props.count}</h5>
      <button>-</button> */}
      <Router>
      <ScrollToTop  />
      <Switch >
      <Route exact path ="/" component={Home} />
        <Route path ="/order" render={(props)=><Order {...props} />} />
        <Route path ="/book" component={OneBook} />
        <Route path ="/login" component={Login} />
        <Route path ="/dash" component={Dashboard} />
      </Switch> 
     </Router>
    </div>
  );
}
function mapStateToProps (state ){

  return {
    count : state.count
  }
}






export default connect(mapStateToProps)(App);
