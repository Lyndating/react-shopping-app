import React from 'react';
import { useParams } from 'react-router-dom';


const ProductShow = (props) => {
    const params = useParams();
    console.log(params.id);
  return (
    <div>ProductShow</div>
  )
}

export default ProductShow;