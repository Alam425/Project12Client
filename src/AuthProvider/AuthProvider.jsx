import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../fitebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [myClasses, setMyClasses] = useState([]);
    const [myCartItem, setMyCartItem] = useState([]);
    const [myCart, setMyCart] = useState([]);
    const [courses, setCourses] = useState([]);
    const [carrt, setCarrt] = useState([]);
    const [item, setItem] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [review, setReview] = useState([]);
    const [allusers, setAllusers] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [payments, setPayments] = useState([]);
    const [allPayments, setAllPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noSeat, setNoSeat] = useState(true);
    const [user, setUser] = useState(null);
    const [amount, setAmount] = useState("");
    const [theme, setTheme] = useState('light');


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
        axios.post('https://assignment12-3fp9d56r0-alam425.vercel.app/users', { user })
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


    const addClassToMongo = (obj) => {
        const status = "pending";
        axios.post('http://localhost:3000/class', { ...obj, status })
            .then(function (response) {
                if (response.data.insertedId) {
                    console.log(response.data);
                    Swal.fire(obj.name, "has been forwarded to admin.")
                }
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }


    const approvePendingClass = item => {

        axios.patch(`http://localhost:3000/class/${item?._id}`)
            .then((data) => {
                if (data.data.modifiedCount) {
                    Swal.fire(item.name, "has been updated");
                }
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error unsetting field:', error);
            });
    }


    const proceedWithFeedback = hi => {

        axios.put(`http://localhost:3000/class/${hi?._id}`, { hi })
            .then(r => {
                console.log(r.data);
                window.location.reload();
            })
            .catch(e => {
                console.log(e);
            })
    }


    const removeFromClass = it => {
        axios.delete(`http://localhost:3000/class/${it._id}`)
            .then(data => {
                console.log(data);
                if (data.data.deletedCount > 0) {
                    Swal.fire(it.name, 'has been deleted')
                }
                window.location.reload();
            })
            .catch(d => console.log(d.message))
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
        fetch(`http://localhost:3000/myClass/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyClasses(data)
            })
    }, [user])


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


    let oho = allusers.find(i => i.email === user?.email);


    useEffect(() => {
        fetch(`http://localhost:3000/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPayments(data);
            })
    }, [user])


    useEffect(() => {
        axios.get('http://localhost:3000/payments')
            .then(data => setAllPayments(data.data))
            .catch(e => console.log(e.message))
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
        loginViaEmail, loginViaGoogle, registerViaEmail, loading, user, logOut, auth, item, instructors, specialities, review, addToCart, addUserToMongo, allusers, carrt, addToPurchasedCourses, courses, noSeat, setNoSeat, amount, setAmount, myCart, setMyCart, myCartItem, setMyCartItem, addClassToMongo, approvePendingClass, myClasses, theme, setTheme, oho, payments, proceedWithFeedback, allPayments, removeFromClass
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;