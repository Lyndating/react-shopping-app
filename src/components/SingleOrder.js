import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./SingleOrder.css";
import CurrencyFormat from 'react-currency-format';
import { subtotalAmount } from '../helper/reducer';

const SingleOrder = ({id, item}) => {
    const createdDate = new Date(item.created *1000).toISOString().split("T")[0];
    console.log(item);
 return (
        <div className='order_container'>
            <div className='order_time'>
                <h3>Order created by: {createdDate}</h3>
                <p>Order # {id}</p>
            </div>
            <div className='item_list'>
                {item.basket.map(product => (
                    <CheckoutProduct
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        qty = {product.qty}
                    />
                ))}
            </div>
            <div className='order_delivery_info'>
                <p>Delivery To:</p>
                <div className='delivery_detail'>
                    <p>{`${item.delivery.first_name} ${item.delivery.last_name}`}</p>
                    <p>{item.delivery.contact}</p>
                    <p>{item.delivery.address}</p>
                </div>
            </div>
            <div className='order_amount'>
                <CurrencyFormat
                    renderText={(value)=> (
                    <>
                        <h2><strong>Total: {value}</strong></h2>
                    </>
                    )}
                    decimalScale={2}
                    value={subtotalAmount(item.basket)}
                    displayType='text'
                    thousandSeparator={true}
                    prefix={"$"}/>
            </div>
        </div>
  )
}

export default SingleOrder;