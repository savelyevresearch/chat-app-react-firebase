import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='Find a user'/>
        </div>
        <div className='userChat'>
            <img src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=''/>
            <div className='userChatInfo'>
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search