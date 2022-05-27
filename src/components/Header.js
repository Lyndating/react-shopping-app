import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {Link} from 'react-router-dom';
import {useStateValue} from '../helper/StateProvider';
import {auth} from '../firebase-config';

function Header() {
  const [{basket, user},dispatch]= useStateValue();
  console.log(basket);
  let signInState;
  user? signInState="Sign Out" : signInState="Sign In";

  const signOutHandler = ()=> {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
      <Link to="/">
        <img 
        className='header_logo'
        src="shopping_logo.gif" alt='header_logo'
        />
      </Link>      

      <div className='header_search'>
        {/* <input
          className='header_searchInput'
          type='text' 
        />
        <SearchIcon className='header_searchIcon'/> */}
      </div>

      <div className='header_nav'>
        <Link to={!user && "/login"}>
        <div onClick={signOutHandler} className='header_option'>
          <span className='header_optionLineOne'>Hello {user? user.email : "Guest" }</span>
          <span className='header_optionLineTwo'>{signInState}</span>
        </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionLineOne'>Return</span>
          <span className='header_optionLineTwo'>& Orders </span>
        </div>

        <div className='header_optionShoppingBag'>
          <Link to="/checkout">
          {!basket || basket.length === 0 &&
              <ShoppingBagOutlinedIcon/>
          }
          {basket.length > 0 &&
            <>
              <ShoppingBagOutlinedIcon/>
              <span className='header_optionLineTwo header_shoppingCount'>{basket?basket.length:0}</span>
            </>

          }
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Header;