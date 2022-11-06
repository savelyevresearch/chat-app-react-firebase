import React, { useState } from 'react';

import AddAvatarIcon from '../assets/addAvatarIcon.png';

import { createUserWithEmailAndPassword, updateEmail, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let [displayName, email, password, file] = [
      event.target[0].value,
      event.target[1].value,
      event.target[2].value,
      event.target[3].files[0]
    ];

    /* console.log(displayName, email, password, file); */

    try {
      const resultUserAuthObject = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on((error) => {
        setError(true);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await updateProfile(resultUserAuthObject.user, {
            displayName,
            photoURL: downloadURL
          });

          await setDoc(doc(db, 'users', resultUserAuthObject.user.uid), {
            uid: resultUserAuthObject.user.uid,
            displayName,
            email,
            photoURL: downloadURL
          });

          await setDoc(doc(db, 'userChats', resultUserAuthObject.user.uid), {});
        });
      });
    } catch (error) {
      setError(true);
    }

    /* createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(
          `
          Error code: "${errorCode}"
          Error message: "${errorMessage}"
          `
        );
        // ..
      }); */
  };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>CrawlerChat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display: 'none'}} type='file' id='file'/>
                <label htmlFor='file'>
                    <img src={AddAvatarIcon} alt=''/>
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
                {error && <span>Something went wrong...</span>}
            </form>
            <p>Do you already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register