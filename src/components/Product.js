import React from 'react';
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from '../helper/StateProvider';
import {Link, useNavigate} from 'react-router-dom';
// import { addNewItem, getAllItems } from '../helper/storage';
import {db} from '../firebase-config';

function Product({id,brand, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();
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
                qty: 1,
            },
        });
        //add item to localBasket
        // addNewItem({id: id, brand: brand, title: title, image: image, price: price, rating: rating, qty: 1});
    }
    // console.log("local storage", getAllItems());
    //redict to ProductShow Page
    const redirectToProductShow = () => {
        navigate(`/products/${id}`, {state:{brand: brand, title:title, image:image,price:price,rating:rating}});
    }
    

  return (
    <div className='product'>
        <a onClick={redirectToProductShow} >
        <img 
            src={image} alt=''/>
        </a>
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

        <button className="product_button"onClick={addToCart}>Add Item</button>
    </div>
  )
}

export default Product;