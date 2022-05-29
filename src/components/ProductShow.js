import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './ProductShow.css';

const ProductShow = () => {
    const location = useLocation();
    console.log(location.state);
    let params = useParams();
  return (
    <div className='product_show_container'>
      <div className='single_product_category_link'>
        <p>
          <a>Home</a>/<a>{`${location.state.category}`}</a>/<span>{`${location.state.title.toLowerCase()}`}</span>
        </p>
      </div>
      <div className="sigle_product_container"key={params.id}>
        <div className="single_product_img">
          <img src={location.state.image}/>
        </div>
        <div className='single_product_info'>
            <p>{location.state.brand}</p>
          <p>{location.state.title}</p>
          <p><strong>${location.state.price}</strong></p>
        </div>
    </div>
    </div>

  )
}

export default ProductShow;