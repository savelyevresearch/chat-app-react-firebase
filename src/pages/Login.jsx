import React from 'react'
import AddAvatarIcon from '../assets/addAvatarIcon.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>CrawlerChat</span>
            <span className='title'>Register</span>
            <form>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button>Sign in</button>
            </form>
            <p>Don't you have an account? Register</p>
        </div>
    </div>
  )
}

export default Login