import React, { useState } from 'react';

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let [email, password] = [
      event.target[0].value,
      event.target[1].value,
    ];

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate('/');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>CrawlerChat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button>Sign in</button>
                {error && <span>Something went wrong...</span>}
            </form>
            <p>Don't you have an account? <Link to='/signup'>Register</Link></p>
        </div>
    </div>
  )
}

export default Login