import React, { useState } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '../firebase';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    const queryResult = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    );

    try {
      const querySnapshot = await getDocs(queryResult);

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setError(true);
    }
  };

  const handleKey = (event) => {
    event.code === 'Enter' && handleSearch();
  };

  return (
    <div className='search'>
        <div className='searchForm'>
            <input
              type='text'
              placeholder='Find a user'
              onKeyDown={handleKey}
              onChange={
                (event) => setUsername(event.target.value)
              }  
            />
        </div>
        {error && <span>User not found!</span>}
        {user && <div className='userChat'>
            <img src={user.photoURL} alt=''/>
            <div className='userChatInfo'>
                <span>{user.displayName}</span>
            </div>
        </div>}
    </div>
  )
}

export default Search