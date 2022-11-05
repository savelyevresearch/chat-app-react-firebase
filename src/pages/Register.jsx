import React from 'react'
import AddAvatarIcon from '../assets/addAvatarIcon.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>CrawlerChat</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display: 'none'}} type='file' id='file'/>
                <label htmlFor='file'>
                    <img src={AddAvatarIcon} alt=''/>
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Do you already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register