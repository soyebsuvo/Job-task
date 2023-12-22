import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/firebase.config';
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ loading , setLoading ] = useState(true);

    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const login = (email , password ) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth , googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth , githubProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe();
        }
    } , [])

    const authInfo = { user, loading , createUser , login , logout , googleLogin , githubLogin};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children : PropTypes.node
}