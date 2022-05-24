import React from 'react';
import { useStateValue } from '../helper/StateProvider';

const CheckoutProduct = ({id,brand, image,title,price}) => {
    const [{basket},dispatch]= useStateValue();
    const removeHandler = () => {
        dispatch({
            type: "remove_from_basket",
            id: id,
        })
    }
  return (
    <div className='checkout_product'>
            <div className='checkout_product_image'>
                <img className="checkout_product_img" src={image} alt=""/>
            </div>
            <div className='checkout_product_info'>
                <h4><strong>{brand}</strong></h4>
                <h4 className='checkout_product_title'>{title}</h4>
                <button onClick={removeHandler}>Remove</button>
            </div>
            <div className='checkout_product_price'>
                <p className='checkout_product_amount'>
                    <strong>${price}</strong>
                </p>
            </div>     
    </div>
  )
}

export default CheckoutProduct;