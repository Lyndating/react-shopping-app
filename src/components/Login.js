import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { auth } from "../firebase-config";
import "./Login.css";
import { useStateValue } from '../helper/StateProvider';
import logo from '../images/shopping_logo.gif'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(true);
    const [existingUser, setExistingUser] = useState(true);
    const [{basket}] = useStateValue();
    let navigate = useNavigate();

    const signInHandler = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((authResponse)=>{
            console.log(authResponse);
            if(authResponse){
                if (basket){
                    navigate('/checkout');
                }else{
                    navigate('/');
                }
            }
        }).catch(error=> alert(error.message));
    }

    const signUpHandler = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((authResponse) => {
            console.log(authResponse);
            if (authResponse) {
                if (basket){
                    navigate('/checkout');
                }else{
                    navigate('/');
                }
                setExistingUser(true);
            }
        }).catch(error => alert(error.message))
    }


  return (

    <div className='login'>
        <div className='login_logo'>
            <Link to="/">
                <img className="login_img" src={logo} alt='logo'/>
            </Link>
        </div>
        {existingUser &&
        <div className='login_form'>
            <h1>Sign in</h1>
            <form>
                <h3>
                    Email
                </h3>
                <input 
                    type="email" placeholder='name@email.com'required
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <h3>
                    Password
                </h3>
                <input 
                    type="password" placeholder='*******' required
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <div className='login_checkbox'>
                    <input type="checkbox" onChange={()=>setChecked(!checked)} defaultChecked={checked}/>
                    <span>Keep me signed in</span>
                </div>

                <button 
                    className='signIn-btn'
                    onClick={signInHandler}
                >SIGN IN</button>
                <div className='sign_up'>
                    <h5>Don't have an account?</h5>
                    <button 
                        className='loginform_signUp-btn'
                        onClick={()=>setExistingUser(false)}
                    >CREATE AN ACCOUNT</button>
                </div>
            </form>
        </div>
        }
        {!existingUser &&
            <div className='signup_form'>
                <h1>Sign Up</h1>
            <form>
                <h3>
                    Email
                </h3>
                <input 
                    type="email" placeholder='name@email.com'required
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <h3>
                    Password
                </h3> 
                <input 
                    type="password" placeholder='*******' required
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <div className='login_checkbox'>
                    <input type="checkbox" onChange={()=>setChecked(!checked)} defaultChecked={checked}/>
                    <span>Keep me signed in</span>
                </div>

                <button 
                    className='signUp-btn'
                    onClick={signUpHandler}
                >CREATE AN ACCOUNT</button>
                <div className='sign_up'>
                    <h5>Already have an account?</h5>
                    <button 
                        className='signupform_login-btn'
                        onClick={()=> setExistingUser(true)}
                    >SIGN IN</button>
                </div>
                </form>
            </div>

        }
    </div>
  )
}

export default Login;