import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../fitebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [myCartItem, setMyCartItem] = useState([]);
    const [myCart, setMyCart] = useState([]);
    const [courses, setCourses] = useState([]);
    const [carrt, setCarrt] = useState([]);
    const [item, setItem] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [review, setReview] = useState([]);
    const [allusers, setAllusers] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noSeat, setNoSeat] = useState(true);
    const [user, setUser] = useState(null);
    const [amount, setAmount] = useState("");


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

        const userEmail = user?.providerData[0]?.email;
        // axios.post(`https://assignment12-3fp9d56r0-alam425.vercel.app/cart/${user.email}`, {
        axios.post(`http://localhost:3000/cart/${user.email}`, {
            ite, userEmail
        })
            .then(function (response) {
                console.log(response.data);
                if (response?.data?.insertedId) {
                    axios.put(`http://localhost:3000/class/availableSeats/${ite._id}`)
                        .then(response => {
                            if (response.data.modifiedCount > 0) {
                                Swal.fire({
                                    position: 'top',
                                    icon: 'success',
                                    title: `${ite.name} </br> Added to Cart!`,
                                    showConfirmButton: false,
                                    timer: 3000
                                })
                                window.location.reload();
                            }
                        })
                        .catch((error) => {
                            console.error(error.message);
                        });
                }
                if (response?.data?.error) {
                    Swal.fire({
                        position: 'top',
                        icon: 'error',
                        title: response?.data?.error,
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }


    const addUserToMongo = user => {
        axios.post('https://assignment12-3fp9d56r0-alam425.vercel.app/users', {
            user
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    console.log("Welcome", user.displayName);
                }
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }


    const addToPurchasedCourses = () => {
        axios.post('http://localhost:3000/courses', {
            myCartItem
        })
            .then(function (response) {
                if (response.data.insertedId) {
                    window.location.reload();
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
        // fetch("https://assignment12-3fp9d56r0-alam425.vercel.app/class")
        fetch("http://localhost:3000/class")
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [])


    useEffect(() => {
        fetch("https://assignment12-3fp9d56r0-alam425.vercel.app/instructor")
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])


    useEffect(() => {
        fetch("https://assignment12-3fp9d56r0-alam425.vercel.app/specialities")
            .then(res => res.json())
            .then(data => {
                setSpecialities(data);
            })
    }, [])


    useEffect(() => {
        fetch("https://assignment12-3fp9d56r0-alam425.vercel.app/reviews")
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])


    useEffect(() => {
        fetch("https://assignment12-3fp9d56r0-alam425.vercel.app/users")
            .then(res => res.json())
            .then(data => {
                setAllusers(data);
            })
    }, [])


    useEffect(() => {
        fetch("http://localhost:3000/cart")
            .then(res => res.json())
            .then(data => {
                setCarrt(data);
            })
    }, [])


    useEffect(() => {
        axios.get(`http://localhost:3000/cart/${user?.email}`)
            .then(data => {
                setMyCart(data?.data);
            })
            .catch(e => { console.log(e.message); })
    }, [user])


    useEffect(() => {
        axios.get(`http://localhost:3000/courses/`)
            .then(data => {
                const myCourses = data?.data?.filter(i => i?.myCartItem?.userEmail === user?.email);
                setCourses(myCourses);
            })
            .catch(e => { console.log(e.message); })
    }, [user])





    const info = {
        loginViaEmail, loginViaGoogle, registerViaEmail, loading, user, logOut, auth, item, instructors, specialities, review, addToCart, addUserToMongo, allusers, carrt, addToPurchasedCourses, courses, noSeat, setNoSeat, amount, setAmount, myCart, setMyCart, myCartItem, setMyCartItem
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;