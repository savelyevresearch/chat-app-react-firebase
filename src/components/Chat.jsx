import React from 'react';

import VideoStreamingIcon from '../assets/videoStreamingIcon.png';
import AddUserIcon from '../assets/addUserIcon.png';
import MoreIcon from '../assets/moreIcon.png';

const Chat = () => {
  return (
    <div className='chat'>
        <div className='chatInfo'>
            <span>Jane</span>
            <div className='chatIcons'>
                <img src={VideoStreamingIcon} alt=''/>
                <img src={AddUserIcon} alt=''/>
                <img src={MoreIcon} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Chat