import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../helper/StateProvider';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import Subtotal from './Subtotal';
import {CardElement,useStripe,useElements}from '@stripe/react-stripe-js';
import { subtotalAmount } from '../helper/reducer';
import axios from '../axios';
import {db} from '../firebase-config';

const Payment = () => {
    const [{basket,user,address},dispatch] = useStateValue();
    const [states, setStates] = useState({
        address: '',
        contact: '',
        first_name: '',
        last_name: '',
    });
    console.log(user);
    const navigate = useNavigate();
    

    // show delivery address form 
    const [deliveryAddress,setDeliveryAddress] = useState(false);
    const [infoShow, setInfoShow] = useState(false);
    let delivery_info_ClassStyle;
    if (infoShow && states.address){
        delivery_info_ClassStyle="delivery_info_show";
    }else{
        delivery_info_ClassStyle="delivery_info_hide";
    }

    // handle all the changes in delivery address form
    const handleChange = (e) => {
        setStates((prev)=>({...prev, [e.target.name]:e.target.value}));
    }

    // enter delivery address
    const addressConfirm = (e)=>{
        e.preventDefault();
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

    
    // show payment card form 
    const [cardShow, setCardShow] = useState(false);
    // open or close delivery section downdown form
    // let payment_process_ClassStyle;
    // if(!cardShow){
    //     payment_process_ClassStyle="payment_nextstep_show";
    // }else{
    //     payment_process_ClassStyle="payment_nextstep_hide";
    // }
    
    // disabled next step if delivery address is empty
    const handleBilling=()=>{
        if (address === null) {
            alert("Please confirm delivery address!");
        }else{
            setCardShow(true);
        }

    }

    // setup state to track client secret, errors and checkout status
    const [btndisabled, setBtnDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeed, setSucceed] = useState(false);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(true);
    // store reference to stripe
    const stripe = useStripe();
    const elements = useElements();

    console.log(basket);

    //create paymentintent and fetch client secret as soon as the page loads
    //whenever the basket changed, make the request and update the clientSecret to charge the updated value.
    const paymentAmount = Number((subtotalAmount(basket)*100).toFixed(2));
    console.log(paymentAmount);
    useEffect(()=>{
        const getClientSecret = async ()=>{
            const res = await axios({
                method: "post",
                url:`/payments/create?total=${paymentAmount}`
            })
            setClientSecret(res.data.clientSecret);
            console.log(res.data.clientSecret);
        }
        
        getClientSecret();
    },[basket]);


    console.log("this is client secret",clientSecret);
    // submit the payment form
    const paymentSubmit = async (e)=>{
        e.preventDefault();
        setProcessing(true);
        //confirm card payment, passing clientSecret
        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }).then((resp)=> {
            console.log(resp);
            // once the payment succeed, pass the order data to firebase db
            db.collection("users").doc(user?.uid).collection("orders").doc(resp.paymentIntent.id).set({
                basket: basket,
                amount: resp.paymentIntent.amount,
                delivery: address,
                created: resp.paymentIntent.created,
            })

            // re-set to the initial state
            setSucceed(true);
            setError(null);
            setProcessing(false);

            // clear the basket
            dispatch({
                type: "empty_basket",
            })

            // redirect to order page upon payment completion
            navigate('/orders', {replace:true});
        });
        
    }
    // listen for changes in the CarElement and display any errors as the customer types their card details
    const handleCardChange = (e)=>{
        setBtnDisabled(e.empty);
        setError(e.error? e.error.message : '');
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
                            <div className='delivery_form_input_area'>
                            <label>
                                First Name: 
                                <input 
                                    name="first_name"
                                    type='text' 
                                    value={states.first_name}
                                    onChange={handleChange} placeholder='first name...' 
                                    required
                                />
                            </label>
                            <label>
                                Last Name: 
                                <input 
                                    name="last_name"
                                    type="text" 
                                    value={states.last_name}
                                    onChange={handleChange} placeholder='last name...' 
                                    required/>
                            </label>
                            <label>
                                Delivery Address: 
                                <input 
                                    name="address"
                                    type="text" 
                                    value={states.address}
                                    onChange={handleChange} placeholder="delivery address..." required
                                />
                            </label>
                            <label>
                                <span>Contact Number: </span>
                                <input 
                                    name="contact"
                                    type="text" 
                                    value={states.contact}
                                    onChange={handleChange} placeholder="contact number..." required
                                />
                            </label>
                            </div>
                            <div className='delivery_form_btn'>
                            <button className='delivery_confirm_btn'>
                            CONFIRM
                            </button>
                            </div>
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
                            qty={item.qty}
                        />
                    ))}
                </div>
            </div>
            <div className='payment_section'> 
                <div className='payment_total_amount'>
                    <h2>TOTAL</h2>
                    <Subtotal/>
                </div>
                <div className={!cardShow? "payment_nextstep_show" : "payment_nextstep_hide"}>
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
                        <form onSubmit={paymentSubmit}>
                            <div className='card_details'>  
                                <CardElement onChange={handleCardChange}/>
                            </div>
                            <div className='price_container'>
                                <CurrencyFormat
                                    renderText={(value)=> (
                                    <>
                                        <h3>Order Total: <strong>{`${value}`}</strong></h3>
                                    </>
                                    )}
                                decimalScale={2}
                                value={subtotalAmount(basket)}
                                displayType='text'
                                thousandSeparator={true}
                                prefix={"$"}/>
                            </div>
                            {error &&
                                    <div className='card-error' role='alert'>{error}</div>
                            }
                            <button disabled={btndisabled || processing || succeed }>{processing? <p>Processing</p> : "SUBMIT" }</button>
                                {/* show any error that happens when processing  the payment */}

                                {/* show a success message upon completion */}
                                <p className={succeed? 'reasult_message' : 'result_message_hide'}>Payment Succeeded!</p>
                        </form>
                    </div>
                </div>
                }
            </div>    
        </div>
      </>

  )
}

export default Payment;