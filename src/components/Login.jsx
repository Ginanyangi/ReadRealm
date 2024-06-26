import React from 'react';
import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC46LMa8iLa7yI7GhAjanW7kVaqLvFS50w",
    authDomain: "log-in-5a629.firebaseapp.com",
    projectId: "log-in-5a629",
    storageBucket: "log-in-5a629.appspot.com",
    messagingSenderId: "855910285046",
    appId: "1:855910285046:web:9bfd521155e86e6c0936d7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const GoogleLoginButton = () => {
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            window.location.href='/Home.jsx';
        })
        .catch((error) => {
            console.error('Error during sign-in',error);
        });
    };

    return (
          <>
             
        <div className="flex  flex-col items-center justify-center min-h-screen bg-white  bg-[url('./static/login.avif')] bg-cover bg-center" >
            <br />
            <br />
            <p className='font-semibold text-2xl text-black text-center'>
              Welcome to Read Realm 
              Explore Read Realm today and discover a world of books  just for you  </p>
          
             <button onClick={handleGoogleLogin} className="rounded bg-red-950 px-4 py-2 text-white" >
            Sign in with Google
        </button>
        <br />
        <br />
         
        </div>
        </>
    );
  };

export default GoogleLoginButton;