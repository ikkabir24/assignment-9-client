import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

// context
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    // state for user
    const [user, setUser] = useState(null);

    // state for user loading
    const [loading, setLoading] = useState(true);

    // authentication state observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])

    // create new user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log in functionality
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    // logOut user
    const logOut = () =>{
        return signOut(auth);
    }

    // update user
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // reset password
    const resetEmail = (email) =>{
        return sendPasswordResetEmail(auth, email);
    }

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        googleLogIn,
        updateUser,
        resetEmail
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;