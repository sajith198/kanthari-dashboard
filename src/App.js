import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import './App.css';
import Settings from './components/SettingsComp/Settings';
import Items from './components/Items/Items';
import Login from './components/Login/login'
import Dashboard from './components/DashBoard/dashboard'
import DeliveryBoy from './components/DeliverBoy/deliveryBoy'
import Category from './components/Category/category'
import CouponCode from './components/CouponCode/couponCode'
import Offers from './components/Offers/offers'
import OrderDetails from './components/Orders/orderDetails'
import AllOrders from './components/Orders/allOrders'
function App() {
  useEffect(()=>{
    document.title="Kanthari DashBoard"
  },[])
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/allorders" component={AllOrders} />
            <Route exact path="/deliveryboy" component={DeliveryBoy} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/couponcode" component={CouponCode} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/dashboard/orderdetail/:orderId" component={OrderDetails}/>
            <Route exact path="*" render={() => <h1>Page Not Found</h1>} />
          </Switch>
        </div>
      </Router>
    // <div className="App">
    //   <Settings/>
    //     {/* <Items/> */}
    // </div>
  );
}
export default App;
