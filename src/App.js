import React, { useState, useEffect } from 'react';
import './App.css';
import './css/main.scss'
import { Home } from './componens/heme/Home';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Order } from './componens/order/Order';
import { OneBook } from './componens/order/OneBook';
import { Login } from './componens/user/Login';
import ScrollToTop from './assist/ScrollToTop'
import { Dashboard } from './componens/user/profile/Dashboard';
import { AnimatePresence } from 'framer-motion';
import { NaveBAr } from './componens/nave/NaveBAr';
import { userGo } from './assist/FuncTotoken';
import Auto from '../src/componens/order/searchBook/Auto.jsx'
// AIzaSyCfkmHILzCxlY94l2IbvO6Ap03R4ZFGul8
function App(props) {
  const [posit, setposit] = useState({})
  const position = (position1) => setposit(position1)

  useEffect(() => {
    userGo()
   
    return () => {
      // cleanup
    }
  }, [])
  return (
    <div className="App">
      <Router>
        <NaveBAr />


        <ScrollToTop />
        <Route render={({ location }) => (
          // <AnimatePresence  initial={false} exitBeforeEnter >
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" render={(props) => <Home {...props} position={position} posit={posit} />} />
            <Route exact path="/book" render={(props) => <Order posit={posit} {...props} />} />
            <Route path="/book/:id" render={(props) => <OneBook  {...props} />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/dash" render={() => <Dashboard />} />
          </Switch>
          // </AnimatePresence> 
        )} />
      </Router>
    </div>
  );
}







export default App;
