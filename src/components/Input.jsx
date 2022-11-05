import React from 'react';

import AttachmentIcon from '../assets/attachmentIcon.png';
import UploadPictureIcon from '../assets/uploadPictureIcon.png';

const Input = () => {
  return (
    <div className='input'>
        <input type='text' placeholder='Type something...'/>
        <div className='send'>
            <img src={AttachmentIcon} alt=''/>
            <input type='file' style={{display: 'none'}} id='file'/>
            <label htmlFor='file'>
                 <img src={UploadPictureIcon} alt=''/>
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input