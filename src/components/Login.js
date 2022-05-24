import { Checkbox } from '@mui/material';
import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { auth } from '../firebase';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(true);
    let navigate = useNavigate();

    const signInHandler = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((authResponse)=>{
            console.log(authResponse);
            if(authResponse){
                navigate('/');
            }
        }).catch(error=> alert(error.message));
    }

    const signUpHandler = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((authResponse) => {
            console.log(authResponse);
            if (authResponse) {
                navigate('/');
            }
        }).catch(error => alert(error.message))
    }


  return (

    <div className='login'>
        <div className='login_logo'>
            <Link to="/">
                <img className="login_img"src='shopping_logo.gif' alt='logo'/>
            </Link>
        </div>

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
                        className='signUp-btn'
                        onClick={signUpHandler}
                    >SIGN UP</button>
                </div>

            </form>
            <p></p>
        </div>
    </div>
  )
}

export default Login;