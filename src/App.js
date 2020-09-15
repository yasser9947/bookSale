import React from 'react';

import './App.css';
import './css/main.scss'
import { Home } from './componens/heme/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Order } from './order/Order';
import { PreOrder } from './order/PreOrder';
import { OneBook } from './order/OneBook';
import { Login } from './componens/user/Login';

function App() {
  return (
    <div className="">
      <Router>
        <Route exact path ="/" component={Home} />
        <Route path ="/order" render={(props)=><Order {...props} />} />
        <Route path ="/book" component={OneBook} />
        {/* <Route path ="/preorder" component={PreOrder} /> */}
        <Route path ="/login" component={Login} />
     </Router>
    </div>
  );
}

export default App;
