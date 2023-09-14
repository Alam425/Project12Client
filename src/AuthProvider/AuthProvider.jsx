import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../fitebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [Cart, setCart] = useState([]);
    const [item, setItem] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [review, setReview] = useState([]);
    const [allusers, setAllusers] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const registerViaEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginViaEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginViaGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            console.log("successfully signed out");
        }).catch((error) => {
            console.log(error.message);
        });
    }

    const addToCart = ite => {
        // axios.post('https://assignment12-fz53fo930-alam425.vercel.app/cart', {
        axios.post('http://localhost:3000/cart', {
            item: ite
        })
            .then(function (response) {
                if (response?.data?.error) {
                    Swal.fire({
                        position: 'top',
                        icon: 'error',
                        title: `${ite.name} </br> Already Exists!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                if (response?.data?.insertedId) {
                    Swal.fire(
                        "Successful",
                        `${ite.name}Added to Cart!`,
                        'success'
                    )
                }
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }

    const addUserToMongo = user => {
        // axios.post('https://assignment12-fz53fo930-alam425.vercel.app/users', {
        axios.post('http://localhost:3000/users', {
            user: user
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    console.log( "Welcome", user.displayName);
                }
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }

    useEffect(() => {
        const userChange = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        });
        return () => {
            return userChange;
        }
    }, [])

    useEffect(() => {
        fetch("https://assignment12-fz53fo930-alam425.vercel.app/class")
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [])

    useEffect(() => {
        fetch("https://assignment12-fz53fo930-alam425.vercel.app/instructor")
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])

    useEffect(() => {
        fetch("https://assignment12-fz53fo930-alam425.vercel.app/specialities")
            .then(res => res.json())
            .then(data => {
                setSpecialities(data);
            })
    }, [])

    useEffect(() => {
        fetch("https://assignment12-fz53fo930-alam425.vercel.app/reviews")
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])

    useEffect(() => {
        fetch("https://assignment12-fz53fo930-alam425.vercel.app/users")
            .then(res => res.json())
            .then(data => {
                setAllusers(data);
            })
    }, [])

    const info = {
        loginViaEmail, loginViaGoogle, registerViaEmail, loading, user, logOut, auth, item, instructors, specialities, review, addToCart, setCart, Cart, addUserToMongo, allusers
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;