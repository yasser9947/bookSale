import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/main.scss'
import { Home } from './heme/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Order } from './order/Order';
import { PreOrder } from './order/PreOrder';

function App() {
  return (
    <div className="">
      <Router>
        <Route exact path ="/" component={Home} />
        <Route path ="/order" component={Order} />
        <Route path ="/preorder" component={PreOrder} />
     </Router>
    </div>
  );
}

export default App;
