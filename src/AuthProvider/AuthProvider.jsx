import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../fitebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [ loading, setLoading ] = useState(true);
    const [ user, setUser ] = useState(null)

    const registerViaEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
//   .then((res) => {
//     const user = res.user;
//     })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

    const loginViaEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const loginViaGoogle = () => {
        setLoading(true);
        return signInWithPopup( auth, provider )
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            console.log("successfully signed out");
          }).catch((error) => {
            console.log(error.message);
          });
    }

    useEffect(()=>{
        const userChange = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        });
        return ()=>{
            return userChange;
        }
    },[])

    const info = {
        loginViaEmail, loginViaGoogle, registerViaEmail, loading, user, logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;