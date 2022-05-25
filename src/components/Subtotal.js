import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../helper/StateProvider';
import {subtotalAmount} from '../helper/reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=> (
                <>
                        <h2><strong>{`${value}`}</strong></h2>
                        <small className='subtotal_gst'>including GST</small>
                </>
            )}
            decimalScale={2}
            value={subtotalAmount(basket)}
            displayType='text'
            thousandSeparator={true}
            prefix={"$"}/>
    </div>
  )
}

export default Subtotal;