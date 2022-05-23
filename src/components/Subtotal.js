import React from 'react';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(element)=> (
                <>
                    <p>Subtotal: <strong>{`${element}`}</strong></p>
                </>
            )}
            decimalScale={2}
            // value={getTotalAmount(ShoppingBag)}
            value={2345.49}
            displayType='text'
            thousandSeparator={true}
            prefix={"$"}/>
    </div>
  )
}

export default Subtotal