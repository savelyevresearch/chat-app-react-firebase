import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>CrawlerChat</span>
        <div className='user'>
            <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt=''/>
            <span>John</span>
            <button>Log out</button>
        </div>
    </div>
  )
}

export default Navbar