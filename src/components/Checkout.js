import React, {useState} from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useNavigate} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

function Checkout() {
    let navigate = useNavigate();
    const routeChange = ()=>{
        navigate('/');
    }
    const [isEmptyBag, setIsEmptyBag] = useState(false);
    const itemCount = 0;
    if (itemCount > 0){
        setIsEmptyBag(false);
    }else{
        setIsEmptyBag(true);
    }

  return (
    <>
        {isEmptyBag &&
            <div  className='empty_checkout_container'>
                <h1>SHOPPING BAG</h1>
                <p>You currently have <u>no items</u> in your shopping bag</p>
                <p>Start shopping now or save items to basket for later.</p>
                <button onClick={routeChange}>CONTINUE SHOPPING</button>
            </div>
        }
        {!isEmptyBag &&
            <div className='checkout'>
                <header>
                    <div className='cart_header_left'>
                        <h1>Shopping Bag</h1>
                        <span>1 item</span>
                    </div>
                    <div className='cart_header_right'>
                        <CurrencyFormat
                            renderText={(element)=> (
                                <>
                                    <h2><strong>{`${element}`}</strong></h2>
                                    <span className='gst'>including GST</span>
                                </>
                            )}
                            decimalScale={2}
                            displayType="text"
                            value={63.96}
                            prefix={"$"}
                            thousandSeparator={true}
                        />
                    </div>
                </header>
                <div className='shopping_cart'>
                    <form className='checkout_form'>
                        <div className='next-step'>
                            <button>CONTINUE TO CHECKOUT</button>
                        </div>

                        
                        <Subtotal/>
                    </form>
                </div>

                    
                </div>
        }
    </>         
  )
}

export default Checkout;