import React  ,{useState }from 'react';
import { connect } from 'react-redux'
import './App.css';
import './css/main.scss'
import { Home } from './componens/heme/Home';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Order } from './componens/order/Order';
import { PreOrder } from './componens/order/PreOrder';
import { OneBook } from './componens/order/OneBook';
import { Login } from './componens/user/Login';
import ScrollToTop from './assist/ScrollToTop'
import { Dashboard } from './componens/user/profile/Dashboard';
import { AnimatePresence } from 'framer-motion'


function App(props) {
 const [posit, setposit] = useState({})
  const position = (position1) => setposit(position1)
 
  return (
    <div className="App">
      {/* <button>+</button>
  <h5>{props.count}</h5>
      <button>-</button> */}
      <Router>
        <ScrollToTop />
        <Route render={({ location }) => (
          <AnimatePresence 
          initial={false}
          exitBeforeEnter >
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" render={()=><Home position={position} posit={posit} />} />
              <Route path="/order" render={(props) => <Order posit={posit} {...props} />} />
              <Route path="/book" render={()=><OneBook />} />
              <Route path="/login" render={()=><Login />} />
              <Route path="/dash" render={()=><Dashboard />} />
            </Switch>
          </AnimatePresence>)} />
      </Router>
    </div>
  );
}
function mapStateToProps(state) {

  return {
    count: state.count
  }
}






export default connect(mapStateToProps)(App);
