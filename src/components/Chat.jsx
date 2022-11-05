import React from 'react';

import VideoStreamingIcon from '../assets/videoStreamingIcon.png';
import AddUserIcon from '../assets/addUserIcon.png';
import MoreIcon from '../assets/moreIcon.png';

import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
        <div className='chatInfo'>
            <span>Jacob</span>
            <div className='chatIcons'>
                <img src={VideoStreamingIcon} alt=''/>
                <img src={AddUserIcon} alt=''/>
                <img src={MoreIcon} alt=''/>
            </div>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat