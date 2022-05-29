import React from 'react';
import './Category.css';
import {useNavigate} from 'react-router-dom';

const Category = ({id,title,image,items}) => {

    const navigate = useNavigate();
    const toProductList = ()=> {
        navigate(`/category/${title}`,{state: {id: id, title: title, image:image, items: items}})
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