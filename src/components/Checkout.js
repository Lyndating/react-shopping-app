import React, {useState} from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useNavigate} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../helper/StateProvider';
import {subtotalAmount} from '../helper/reducer';
import CheckoutProduct from './CheckoutProduct';

const Checkout = (props)=> {
    let navigate = useNavigate();
    const routeChange = ()=>{
        navigate('/');
    }

    const [{basket, user},dispatch]= useStateValue();

  return (
    <>
        {basket.length===0 && 
            <div  className='empty_checkout_container'>
                <h1>SHOPPING BAG</h1>
                <p>You currently have <u>no items</u> in your shopping bag</p>
                <p>Start shopping now or save items to basket for later.</p>
                <button onClick={routeChange}>CONTINUE SHOPPING</button>
            </div>
        }
        {basket.length > 0 &&
            <div className='checkout'>
                <div className='checkout_header'>
                    <div className='subtotal_left'>
                        <h2 className='checkout_title'>Shopping Bag</h2>
                        <span className='subtotal_item'>{basket.length} {basket.length === 1? "item" : "items"} </span>
                    </div>
                    <div className='subtotal_right'>
                        <Subtotal/> 
                    </div>
                </div >


                <div className='checkout_body'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            brand={item.brand}
                            title={item.title}
                            image={item.image}
                            price={item.price}

                        />
                    ))} 
                </div>
                <div className='checkout_footer'>
                    <h2 className='checkout_title'>Subtotal</h2>
                    <Subtotal/> 
                </div >
                    
            </div>
        }
    </>         
  )
}

export default Checkout;