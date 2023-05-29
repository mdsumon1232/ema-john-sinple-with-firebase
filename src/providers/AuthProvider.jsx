import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../components/firebase/firebase.config';

export  const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => { 

    const [ user ,setUser ] = useState(null) ;
    const [loading , setLoading] = useState(true);
    
    const singUpHandle = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password)
    }
    

    const loginHandle = (email , password ) =>{
         setLoading(true);
        return signInWithEmailAndPassword(auth, email , password);
    }

    const logOut = () => {
        return signOut(auth);
    }

   useEffect(()=>{
    
    const unsubscribe = onAuthStateChanged(auth , currentUser => {
         setUser(currentUser);
         setLoading(false);
    })

    return () => unsubscribe();
       
   } , [])

    const authInfo = {
        singUpHandle,
        loginHandle,
        user,
        logOut,
        loading
    }
   
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;