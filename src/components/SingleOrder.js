import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import "./SingleOrder.css";
import CurrencyFormat from 'react-currency-format';
import { subtotalAmount } from '../helper/reducer';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const SingleOrder = ({id, item}) => {
    const createdDate = moment(item.created*1000).format("MMMM Do YYYY, h:mm:ss a");
 return (
        <div className='order_container'>
            <div className='order_time'>
                <h6>Order # {id}</h6>
                <h5>Order created by: </h5>
                <h5>{createdDate}</h5>
                
            </div>
            <div className='item_list'>
                {item.basket.map(product => (
                    <div className='item_list_checkout_product'>
                        <div className='checkout_product_image'>
                            <img src={product.image}/>
                        </div>
                        <div className='checkout_product_info'>
                            <h5><strong></strong>{product.brand}</h5>
                            <h6>{product.title}</h6>
                            <h6>Quantity: {product.qty}</h6>
                        </div>
                        <div className='checkout_product_price'>
                            <h5 className='product_price'>
                            <small>$</small>
                            <strong>{product.price.toFixed(2)}</strong>
                            </h5> 
                        </div>
                    </div>
                ))}
            </div>
            <div className='order_delivery_info'>
                <h5>Delivery To:</h5>
                <div className='delivery_detail'>
                    <h6>{`${item.delivery.first_name} ${item.delivery.last_name}`}</h6>
                    <h6>{item.delivery.contact}</h6>
                    <h6>{item.delivery.address}</h6>
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