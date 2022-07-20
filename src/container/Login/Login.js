import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      navigate('/');
    })  
    .catch(error => alert(error.message));
  }

  const register = e => {
    console.log(e)
    createUserWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      console.log(auth);
      if (auth) {
        navigate('/');
      }
    })
    .catch(error => alert(error.message));
  }

  return (
    <div className='login'>
        <Link to ='/'>
        <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to THIS FAKE AMAZON CLONE Conditions of Use & Sale. 
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your FAKE AMAZON account</button>
        </div>
    </div>
  )
}

export default Login