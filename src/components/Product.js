import React from 'react';
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useStateValue } from '../helper/StateProvider';
import {Link, useNavigate} from 'react-router-dom';
// import { addNewItem, getAllItems } from '../helper/storage';
import {db} from '../firebase-config';

function Product({id,brand, title, image, price, rating, category,data}) {
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
        navigate(`/products/${id}`, {state:{brand: brand, title:title, image:image,price:price,rating:rating, category:category, data: data}});
    }
    

  return (
    <div key={id} className='product'>
        <a className="product_img" onClick={redirectToProductShow} >
        <img 
            src={image} alt=''/>
        </a>
        <div className='product_info'>
            <div className='product_title'>
                <h4><strong>{brand}</strong></h4>
                <a onClick={redirectToProductShow}>
                    <h5>{title}</h5> 
                </a>
            </div>
            {/* <div className='product_rating'>
                {Array(rating).fill().map((n, i)=>(<p><StarIcon/></p>))}
            </div> */}
        </div>
        <div className='product_info_footer'>
            <p className='product_price'>
                <small>$</small>
                <strong>{price.toFixed(2)}</strong>
            </p> 
            <div className='product_add_to_cart'>
                <button className="product_button"onClick={addToCart}>Add Item</button>
            </div>
        </div>

        
    </div>
  )
}

export default Product;