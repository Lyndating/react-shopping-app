import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <img 
        className='header_logo'
        src="shopping_logo.png" alt='header_logo'
        /> 
      </Link>      

      <div className='header_search'>
        <input
          className='header_searchInput'
          type='text' 
        />
        <SearchIcon className='header_searchIcon'/>
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello</span>
          <span className='header_optionLineTwo'>Sign in </span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Return</span>
          <span className='header_optionLineTwo'>& Orders </span>
        </div>

        <div className='header_optionShoppingBag'>
          <Link to="/checkout">
            <AddShoppingCartOutlinedIcon/>
            <span className='header_optionLineTwo header_shoppingCount'>0</span>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Header;