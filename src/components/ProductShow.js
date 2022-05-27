import React from 'react';
import { useParams, useLocation } from 'react-router-dom';


const ProductShow = () => {
    const location = useLocation();

    let params = useParams();
  return (
    <div key={params.id}>
        <p>{location.state.brand}</p>
        <p>{location.state.title}</p>
        <img src={location.state.image}/>
        <p>${location.state.price}</p>

    </div>
  )
}

export default ProductShow;