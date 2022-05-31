import React from 'react';
import './Category.css';
import {useNavigate} from 'react-router-dom';

const Category = (props) => {
    const {id,title,image,data}=props;
    const navigate = useNavigate();
    const toProductList = ()=> {
        navigate(`/category/${title}`,{state: {data: data}})
    }
  return (
    <div key={id} className='category_container'>
        <a onClick={()=> toProductList()}>
            <div className='category_image'>
                <img src={image} alt='category_image'/>
            </div>
            <p>{title}</p>
        </a>

    </div>
  )
}

export default Category;