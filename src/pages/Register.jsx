import React from 'react'

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
                <input type='file' />
                <button>Sign up</button>
            </form>
            <p>Do you already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register