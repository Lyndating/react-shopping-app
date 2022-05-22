import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingCart } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
      <img 
        className='header_logo'
        src="shopping_logo.png" alt='header_logo'
        /> 
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
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>

        <div className='header_optionBasket'>
          <ShoppingCart/>
          <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>
      </div>
    
    </div>
  )
}

export default Header