import React, { useContext, useState } from 'react';

import { collection, getDocs, query, serverTimestamp, updateDoc, where, doc, setDoc, getDoc } from 'firebase/firestore';

import { db } from '../firebase';

import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

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

  const handleSelect = async (event) => {
    const combinedId = 
      currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid;
    
    try {
      const chatsCollectionDoc = await getDoc(doc(db, 'chats', combinedId));

      if (!chatsCollectionDoc.exists()) {
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        });

        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        });
      }
    } catch (error) {
      setUser(null);
      setUsername("");
    }
  };

  return (
    <div className='search'>
        <div className='searchForm'>
            <input
              type='text'
              placeholder='Find a user'
              onKeyDown={handleKey}
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
        </div>
        {error && <span>User not found!</span>}
        {user && <div className='userChat' onClick={handleSelect}>
            <img src={user.photoURL} alt=''/>
            <div className='userChatInfo'>
                <span>{user.displayName}</span>
            </div>
        </div>}
    </div>
  )
}

export default Search