import React, {useState} from 'react';
import { useParams, useLocation, useNavigate} from 'react-router-dom';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyFormat from 'react-currency-format';
import { subtotalAmount } from '../helper/reducer';
import { useStateValue } from '../helper/StateProvider';
import './ProductShow.css';

const ProductShow = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let params = useParams();
    const categoryInfo=location.state.data;
    const {brand, category, image, price, rating, title} = location.state;
    const toCategoryPage =()=>{
      navigate(`/category/${categoryInfo.title}`,{state:{id:categoryInfo.id, title:categoryInfo.title,image:categoryInfo.image,items:categoryInfo.items}})
    };

    const [quantity, setQuantity] = useState(1);
    const [{basket},dispatch] = useStateValue();

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
      if(quantity != 1){
        setQuantity(quantity-1);
      }
      
    }
    let qty;
    if (basket.length > 0){
      const product = basket.map((product)=> 
      product.id === params.id);
      qty = product.qty;
    }
    console.log(qty);

  return (
    <div className='product_show_container'>
      <div className='single_product_category_link'>
        <p>
          <a onClick={()=>{navigate("/")}}> Home </a>
          /<a onClick={()=>{toCategoryPage()}}> {`${location.state.category}`} </a>
          /<span> {`${location.state.title.toLowerCase()}`} </span>
        </p>
      </div>

      <div className="sigle_product_container" key={params.id}>
        <div className="single_product_img">
          <img src={location.state.image}/>
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
                    <span>Quantity: </span>
                    <button onClick={quantityDecrement}>-</button>
                    <span> {quantity} </span> 
                    <button onClick={quantityIncrement}>+</button>                
                </div>
                <button onClick={addItemHandler}>ADD TO BAG</button>
            </div>
        </div>
        
    </div>
    </div>

  )
}

export default ProductShow;