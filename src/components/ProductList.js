import React from 'react';
import Product from './Product';
import "./ProductList.css";
import { useLocation} from 'react-router-dom';
import { useStateValue } from '../helper/StateProvider';

const ProductList = () => {
    const location = useLocation();
    const [{products}, dispatch] = useStateValue();
    console.log(location.state);

  return (
    <div>
        
        <div className='category_title'>
            <h2>{location.state.title}</h2>
        </div>
            <div className='category_products_rows'>
                <div className='category_product_list'>
                    {location.state.items.map((list)=>(
                    <Product
                    key={list.id}
                    title={list.title}
                    brand={list.brand}
                    image={list.image}
                    rating={list.rating}
                    price={list.price}
                    />

            ))}
            </div>
        </div>
    </div>
  )
}

export default ProductList;