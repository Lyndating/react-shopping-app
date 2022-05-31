import React from 'react';
import Product from './Product';
import "./ProductList.css";
import { Link, useLocation} from 'react-router-dom';

const ProductList = () => {
    const location = useLocation();
  return (
    <div>
        <div className='product_list_nav'>
            <p><Link to="/">Home</Link> / {location.state.title}</p>
        </div>
        <div className='category_title'>
            <h2>{location.state.title}</h2>
        </div>
            <div className='category_products_rows'>
                <div className='category_product_list'>
                    {location.state.data.map((list)=>(
                    <Product
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    brand={list.brand}
                    image={list.image}
                    rating={list.rating}
                    price={list.price}
                    category={list.category}
                    data={location.state.data}
                    />

            ))}
            </div>
        </div>
    </div>
  )
}

export default ProductList;