import React from 'react';
import { useStateValue } from '../helper/StateProvider';

const CheckoutProduct = ({id,image,title,price, brand, rating,qty}) => {
    const [{basket},dispatch]= useStateValue();
    const removeHandler = () => {
        dispatch({
            type: "remove_from_basket",
            id: id,
        })
    }
    const addItemHandler=()=>{
        dispatch({
            type: "add_to_basket",
            item:{
                id: id,
                brand: brand,
                title: title,
                image: image,
                price: price,
                rating: rating,
                qty: 1,
            }
        })
    }

    const removeItemHandler =()=>{
        console.log(qty);
        dispatch({
            type: "reduce_from_basket",
            item:{
                id: id,
                brand: brand,
                title: title,
                image: image,
                price: price,
                rating: rating,
                qty: qty,
            }
        })
    }
  return (
    <div className='checkout_product'>
            <div className='checkout_product_image order_list_image'>
                <img className="checkout_product_img" src={image} alt=""/>
            </div>
            <div className='checkout_product_info'>
                <h4><strong>{brand}</strong></h4>
                <h4 className='checkout_product_title'>{title}</h4>
                <div className='qty_wrapper'>
                    <span>Qty: </span>
                    <button className="payment_item_qty" onClick={removeItemHandler}>-</button>
                    <span> {qty} </span>
                    <button className="payment_item_qty" onClick={addItemHandler}>+</button>                
                </div>
                <button className="checkout_remove_btn"onClick={removeHandler}>Remove</button>

            </div>
            <div className='checkout_product_price'>
                <p className='checkout_product_amount'>
                    <strong>${(price*qty).toFixed(2)}</strong>
                </p>
            </div>     
    </div>
  )
}

export default CheckoutProduct;