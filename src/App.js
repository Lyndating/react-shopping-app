import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {auth} from  "./firebase-config";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductShow from './components/ProductShow';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import ProductList from './components/ProductList';
import Orders from './components/Orders';
import {useStateValue} from './helper/StateProvider';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const promise = loadStripe('pk_test_51L3HT9FAatdIn9qmzTsy63x6vfYyietEgvALSrfk9qdg6tAJZZWbnUEtzrJHJLJVVv0B6LvrA7euGNEVA5D93GAe00cE7sZdIA');

function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
      auth.onAuthStateChanged(authedUser => {
        // if login successfully
        console.log("USER", authedUser);
        if(authedUser){
          dispatch({
            type: "set_user",
            user: authedUser,
          })
        }else {
          //if logout
          dispatch({
            type: "set_user",
            user: null
          })
        };
      });
  },[dispatch]);


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={[<Header/>,<Home/>,<Footer/>]}/>
          <Route path="/category/:title" element={[<Header/>,<ProductList/>,<Footer/>]}/>
          <Route path="/products/:id" element={[<Header/>,<ProductShow/>,<Footer/>]}/>
          <Route path="/checkout" element={[<Header/>,<Checkout/>,<Footer/>]}/>
          <Route path="/payment" element={[
            <Header/>,
            <Elements stripe={promise} >
              <Payment/>
            </Elements>,
            <Footer/>]}/>
          <Route path="/login" element={[<Login/>,<Footer/>]}/>
          <Route path="/orders" element={[<Header/>,<Orders/>,<Footer/>]}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
