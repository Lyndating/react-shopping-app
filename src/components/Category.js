import React from 'react';
import './Category.css';
import {useNavigate} from 'react-router-dom';

const Category = ({id,title,image,items}) => {
    console.log("category",items);
    const navigate = useNavigate();
    const toProductList = ()=> {
        navigate(`/category/${id}`,{state: {id: id, title: title, items: items}})
    }
  return (
    <div className='category_container'>
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