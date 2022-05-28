import React, {useState, useEffect} from 'react'; 
import { useNavigate } from 'react-router-dom';
import {db} from '../firebase-config';
import { useStateValue } from '../helper/StateProvider';
import './Order.css';
import SingleOrder from './SingleOrder';

const Orders = () => {
    const [{basket, address, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    //fetch order data from db
    useEffect(()=>{
        if(user){
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created','desc').onSnapshot(snapshot => {
            console.log(snapshot.docs);
            setOrders(snapshot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()
            })))
            })}else {
                setOrders([]);
            }
    },[user]);

    console.log(orders);

    //empty order list redirect to home page 
    const routeChange = () => {
        navigate('/');
    };


  return (
      <div className='order_history_container'>
        <div className='order_history_title'>
            <h2>Your Orders</h2>
        </div>
        {orders.length=== 0 && 
            <div className='empty_order_container'>
                <h3>
                    There is no Order History.
                </h3>
                <button onClick={routeChange}>CONTINUE SHOPPING</button>
            </div>

        }
        {orders.length >0 &&
            <div className='order_list_container'>
                {orders?.map(order => (
                    <SingleOrder key={order.id} id={order.id} item={order.data}/>
                ))}
            </div>
        }
      </div>

  )
}

export default Orders;