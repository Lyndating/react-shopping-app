import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {auth} from './firebase';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ProductShow from './components/ProductShow';
import Checkout from './components/Checkout';
import Login from './components/Login';
import {useStateValue} from './helper/StateProvider';



function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
      auth.onAuthStateChanged(authedUser => {
        // if login successfully
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
        }
      });
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={[<Header/>,<Home/>]}/>
          <Route path="/products/:id" element={[<Header/>,<ProductShow/>]}/>
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
