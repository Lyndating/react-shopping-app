import React from 'react';
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from '../helper/StateProvider';
import {Link} from 'react-router-dom';

function Product({id,brand, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'add_to_basket',
            item: {
                id: id,
                brand: brand,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }

  return (
    <div className='product'>
        <Link to={`/products/${id}`} >
        <img 
            src={image} alt=''/>
        </Link>
        <div className='product_info'>
            <p><strong>{brand}</strong></p>
            <p>{title}</p> 
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p> 
            <div className='product_rating'>
                {Array(rating).fill().map((n, i)=>(<p><StarIcon/></p>))}

           </div>
        </div>

            <button onClick={addToCart}>Add Item</button>
    </div>
  )
}

export default Product;