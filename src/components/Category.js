import React from 'react';
import './Category.css';
import {Link} from 'react-router-dom';

const Category = ({id,title,image}) => {
  return (
    <div className='category_container'>
        <Link to={`/category/${title}`}>
            <div className='category_image'>
                <img src={image} alt='category_image'/>
            </div>
            <p>{title}</p>
        </Link>

    </div>
  )
}

export default Category;