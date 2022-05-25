import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../helper/StateProvider';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Payment = () => {
    const [{basket,user,address},dispatch] = useStateValue();
    console.log(basket, user, address);
    const [deliveryAddress,setDeliveryAddress] = useState(false);
    const [infoShow, setInfoShow] = useState(false);
    const [cardShow, setCardShow] = useState(false);
    const [states, setStates] = useState({
        address: '',
        contact: '',
        first_name: '',
        last_name: '',
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setStates((prev)=>({...prev, [e.target.name]:e.target.value}));
    }

    const addressConfirm = (e)=>{
        e.preventDefault();
        console.log('clicked', e.target.value);
        setDeliveryAddress(false);
        setInfoShow(true);        
        dispatch({
            type: 'add_address',
            item: {
                address: states.address,
                contact: states.contact,
                first_name: states.first_name,
                last_name: states.last_name
            },
        });
    };


    let delivery_info_ClassStyle;
    if (infoShow && states.address){
        delivery_info_ClassStyle="delivery_info_show";
    }else{
        delivery_info_ClassStyle="delivery_info_hide";
    }

    let payment_process_ClassStyle;
    if(!cardShow){
        payment_process_ClassStyle="payment_nextstep_show";
    }else{
        payment_process_ClassStyle="payment_nextstep_hide";
    }
    
    const handleBilling=()=>{
        if (address === null) {
            alert("Please confirm delivery address!");
        }else{
            setCardShow(true);
        }

    }

  return (
      <>
        <div onClick={()=>navigate('/checkout')} className='back_to_checkout'>
            <ArrowBackIosOutlinedIcon/>Shopping Bag
        </div>
        <div className='payment'>
            <div className='payment_body'>
                {!deliveryAddress &&
                <div onClick={()=>{setDeliveryAddress(true)}}className='payment_delivery'>

                    <h4>Delivery Address</h4>
                        <button className='payment_delivery_arrow'>
                            <KeyboardArrowDownOutlinedIcon/>
                        </button>
                     
                </div>
                }
                {deliveryAddress&&
                    <form onSubmit={addressConfirm}>
                        <div className='delivery_form'>
                            <label>
                                First Name: 
                                <input 
                                    name="first_name"
                                    type='text' 
                                    value={states.first_name}
                                    onChange={handleChange} placeholder='your first name...' 
                                    required
                                />
                            </label>
                            <label>
                                Last Name: 
                                <input 
                                    name="last_name"
                                    type="text" 
                                    value={states.last_name}
                                    onChange={handleChange} placeholder='your last name...' 
                                    required/>
                            </label>
                            <label>
                                Delivery Address: 
                                <input 
                                    name="address"
                                    type="text" 
                                    value={states.address}
                                    onChange={handleChange} placeholder="your delivery address..." required
                                />
                            </label>
                            <label>
                                Contact Number: 
                                <input 
                                    name="contact"
                                    type="text" 
                                    value={states.contact}
                                    onChange={handleChange} placeholder="your contact number..." required
                                />
                            </label>

                            <button className='delivery_confirm_btn'>
                            CONFIRM
                        </button>
                        </div>
                    </form>
                }
                {address &&
                <div className={delivery_info_ClassStyle}>
                    <p>{`${address.last_name} ${address.first_name}`}</p>
                    <p>{`${address.contact}`}</p>
                    <p>{`${address.address}`}</p>
                </div> 
                }
                <div className='payment_items'>
                    {basket.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            brand={item.brand}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className='payment_section'> 
                <div className='payment_total_amount'>
                    <h2>TOTAL</h2>
                    <Subtotal/>
                </div>
                <div className={payment_process_ClassStyle}>
                    <button 
                        onClick={handleBilling}
                    >CONTINUE TO BILLING</button>
                </div>
                {cardShow &&
                <div className='payment_step'>

                    <div className='payment_title'>
                    <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'>
                    </div>
                </div>
                }
            </div>    
        </div>
      </>

  )
}

export default Payment;