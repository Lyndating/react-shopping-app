import React, {useState} from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useNavigate} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../helper/StateProvider';
import {subtotalAmount} from '../helper/reducer';
import CheckoutProduct from './CheckoutProduct';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Checkout = ()=> {
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
                        <>
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            brand={item.brand}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            qty={item.qty}
                        />
                        </>
                    ))} 
                </div>
                <div className='checkout_footer'>
                    <div className='checkout_delivery_icon'>
                        <p>Free Delivery</p>
                        <p><LocalShippingOutlinedIcon/>
                        <StorefrontOutlinedIcon/></p>
                        {/* <a className='select-arrow'><KeyboardArrowDownOutlinedIcon/></a> */}
                    </div>
                    <div className='checkout_total'>
                        <h2 className='checkout_title'>Subtotal</h2>
                        <Subtotal/> 
                    </div >
                    <div className='checkout_delivery_info'>
                        <p>Estimated Delivery $0</p>

                    </div>
                    <button onClick={()=>navigate('/payment')}>CONTINUE TO CHECKOUT</button>
                </div>

            </div>
        }
    </>         
  )
}

export default Checkout;