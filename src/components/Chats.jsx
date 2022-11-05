import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
        <div className='userChat'>
            <img src='https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=''/>
            <div className='userChatInfo'>
                <span>Elizabeth</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='userChat'>
            <img src='https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=''/>
            <div className='userChatInfo'>
                <span>Anne</span>
                <p>Hi. How are you?</p>
            </div>
        </div>
        <div className='userChat'>
            <img src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80' alt=''/>
            <div className='userChatInfo'>
                <span>Justin</span>
                <p>What's up! Offer to listen the following history</p>
            </div>
        </div>
    </div>
  )
}

export default Chats