import React from 'react';
import './Category.css';
import {useNavigate} from 'react-router-dom';

const Category = ({id,title,image,data}) => {
    const navigate = useNavigate();
    const toProductList = ()=> {
        navigate(`/category/${title}`,{state: {data: data}})
    }
  return (
    <div key={id} className='category_container'>
        <div onClick={()=> toProductList()}>
            <div className='category_image'>
                <img src={image} alt='category_image'/>
            </div>
            <p>{title}</p>
        </div>

    </div>
  )
}

export default Category;