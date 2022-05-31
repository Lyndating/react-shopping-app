import React, {useState} from 'react';
import { useParams, useLocation, useNavigate} from 'react-router-dom';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../helper/StateProvider';
import './ProductShow.css';

const ProductShow = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let params = useParams();
    const categoryInfo=location.state;
    const {brand, category, image, price, rating, title} = location.state;
    const toCategoryPage =()=>{
      navigate(`/category/${category}`,{state:{id:categoryInfo.id, title:categoryInfo.category,image:categoryInfo.image,data:categoryInfo.data}})
    };

    const [quantity, setQuantity] = useState(1);
    const [dispatch] = useStateValue();

    // add to bag button handler
    const addItemHandler=()=>{
        dispatch({
            type: "add_to_basket",
            item:{
                id: params.id,
                brand: brand,
                title: title,
                image: image,
                price: price,
                rating: rating,
                qty: quantity,
            }
        })
    }
    
    // increase quantity handler
    const quantityIncrement = ()=> {
      setQuantity(quantity+1);
    }

    // decrease quantity handler
    const quantityDecrement = ()=>{
      if(quantity !== 1){
        setQuantity(quantity-1);
      }
      
    }

  return (
    <div className='product_show_container'>
      <div className='single_product_category_link'>
        <p>
          <span onClick={()=>{navigate("/")}}> Home </span>
          /<span  onClick={()=>{toCategoryPage()}}> {`${location.state.category}`} </span>
          /<span> {`${location.state.title.toLowerCase()}`} </span>
        </p>
      </div>
      <div>
      <div className="sigle_product_container" key={params.id}>
        <div className="single_product_img">
          <img src={location.state.image} alt={location.state.title}/>
        </div>
        <div className='single_product_info'>
            <h3>{location.state.brand}</h3>
            <h2>{location.state.title}</h2>
            <CurrencyFormat
            renderText={(value)=> (
                <>
                <h1><strong>{`${value}`}</strong></h1>
                </>
            )}
            decimalScale={2}
            value={location.state.price.toFixed(2)}
            displayType='text'
            thousandSeparator={true}
            prefix={"$"}/>
            <div className='delivery_information'>
              <LocalShippingOutlinedIcon/>
              <p>Free Delivery</p>
            </div>
            <div className='single_product_btn'>
                <div className='qty_wrapper'>
                    <span>Quantity:  </span>
                    <button onClick={quantityDecrement}>-</button> 
                    <span> {quantity || 1} </span> 
                    <button onClick={quantityIncrement}>+</button>
                </div>
                <button onClick={addItemHandler}>ADD TO BAG</button>
            </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default ProductShow;