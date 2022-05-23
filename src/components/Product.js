import React from 'react';
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from '../helper/StateProvider';

function Product({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p> 
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p> 
            <div className='product_rating'>
                {Array(rating).fill().map((_, i)=>(<p><StarIcon/></p>))}

           </div>
        </div>
        <img 
            src={image} alt=''/>
            <button onClick={addToCart}><AddShoppingCartIcon/></button>
    </div>
  )
}

export default Product;