import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../fitebase.config";
import Swal from "sweetalert2";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
    const [oho, setOho] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [payments, setPayments] = useState([]);
    const [allPayments, setAllPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noSeat, setNoSeat] = useState(true);
    const [user, setUser] = useState(null);
    const [amount, setAmount] = useState("");
    const [theme, setTheme] = useState('light');


    const queryClient = new QueryClient()


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
            localStorage.removeItem('access');
        }).catch((error) => {
            console.log(error.message);
        });
    }


    const addToCart = ite => {

        const userEmail = user?.providerData[0]?.email;
        axios.post(`https://assignment12-h6mv4a5ar-alam425.vercel.app/cart/${user.email}`, { ite, userEmail }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        })
            .then(function (response) {
                if (response?.data?.insertedId) {
                    axios.put(`https://assignment12-h6mv4a5ar-alam425.vercel.app/class/availableSeats/${ite._id}`)
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


    const deleteFromCart = (_id, name) => {
        axios.delete(`https://assignment12-h6mv4a5ar-alam425.vercel.app/cart/${_id}`)
                        .then(data => {
                            if (data?.data?.deletedCount > 0) {
                                axios.put(`https://assignment12-h6mv4a5ar-alam425.vercel.app/class/availableSeatsIncrease/${_id}`)
                                    .then(response => {
                                        if (response.data.modifiedCount > 0) {
                                            window.location.reload();
                                            Swal.fire(`${name} has been removed successfully...`)
                                        }
                                    })
                                    .catch((error) => {
                                        console.error(error.message);
                                    });
                            }
                        })
                        .catch(r => console.log(r.message))
    }


    const addUserToMongo = user => {
        axios.post('https://assignment12-h6mv4a5ar-alam425.vercel.app/users', { user })
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
        axios.post('https://assignment12-h6mv4a5ar-alam425.vercel.app/courses', { myCartItem })
            .then(function (response) {
                if (response.data.insertedId) {
                    Swal.fire('Payment done...')
                }
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }


    const addClassToMongo = (obj) => {
        const status = "pending";
        axios.post('https://assignment12-h6mv4a5ar-alam425.vercel.app/class', { ...obj, status })
            .then(function (response) {
                if (response.data.insertedId) {
                    Swal.fire(obj.name, "has been forwarded to admin.")
                }
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }


    const approvePendingClass = item => {
        axios.patch(`https://assignment12-h6mv4a5ar-alam425.vercel.app/class/${item?._id}`)
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
        axios.put(`https://assignment12-h6mv4a5ar-alam425.vercel.app/class/${hi?._id}`, { hi })
            .then(() => {
                window.location.reload();
            })
            .catch(e => {
                console.log(e);
            })
    }


    const removeFromClass = it => {
        axios.put(`https://assignment12-h6mv4a5ar-alam425.vercel.app/class/remove/${it._id}`, { it })
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire(it.name, 'has been updated.')
                }
                window.location.reload();
            })
            .catch(r => console.log(r.message))
    }


    useEffect(() => {
        const userChange = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
            if (currentUser) {
                let email = currentUser?.email;
                axios.post(`https://assignment12-h6mv4a5ar-alam425.vercel.app/jwt`, { email })
                    .then(data => {
                        localStorage.setItem('access', data?.data?.token);
                    })
                    .catch((e) => {
                        console.log(e.message);
                    })
            }
        });
        return () => {
            return userChange;
        }
    }, [])


    useEffect(() => {
        fetch(`https://assignment12-h6mv4a5ar-alam425.vercel.app/myClass/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyClasses(data)
            })
    }, [user])


    useEffect(() => {
        fetch("https://assignment12-h6mv4a5ar-alam425.vercel.app/class")
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [])


    useEffect(() => {
        fetch("https://assignment12-h6mv4a5ar-alam425.vercel.app/instructor")
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])


    useEffect(() => {
        fetch("https://assignment12-h6mv4a5ar-alam425.vercel.app/specialities")
            .then(res => res.json())
            .then(data => {
                setSpecialities(data);
            })
    }, [])


    useEffect(() => {
        fetch("https://assignment12-h6mv4a5ar-alam425.vercel.app/reviews")
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])


    useEffect(() => {
        fetch("https://assignment12-h6mv4a5ar-alam425.vercel.app/users")
            .then(res => res.json())
            .then(data => {
                setAllusers(data);
                setOho(data?.find(i => i?.email === user?.email));
            })
    }, [user])


    useEffect(() => {
        fetch(`https://assignment12-h6mv4a5ar-alam425.vercel.app/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPayments(data);
            })
    }, [user])


    useEffect(() => {
        axios.get('https://assignment12-h6mv4a5ar-alam425.vercel.app/payments')
            .then(data => setAllPayments(data.data))
            .catch(e => console.log(e.message))
    }, [])


    useEffect(() => {
        fetch("https://assignment12-h6mv4a5ar-alam425.vercel.app/cart", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setCarrt(data);
            })
    }, [])


    useEffect(() => {
        axios.get(`https://assignment12-h6mv4a5ar-alam425.vercel.app/cart/${user?.email}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }})
            .then(data => {
                setMyCart(data?.data);
            })
            .catch(e => { console.log(e.message); })
    }, [user])


    useEffect(() => {
        axios.get(`https://assignment12-h6mv4a5ar-alam425.vercel.app/courses/`)
            .then(data => {
                const myCourses = data?.data?.filter(i => i?.myCartItem?.userEmail === user?.email);
                setCourses(myCourses);
            })
            .catch(e => { console.log(e.message); })
    }, [user])




    const info = {
        loginViaEmail, loginViaGoogle, registerViaEmail, loading, user, logOut, auth, item, instructors, specialities, review, addToCart, addUserToMongo, allusers, carrt, addToPurchasedCourses, courses, noSeat, setNoSeat, amount, setAmount, myCart, setMyCart, myCartItem, setMyCartItem, addClassToMongo, approvePendingClass, myClasses, theme, setTheme, oho, payments, proceedWithFeedback, allPayments, removeFromClass, deleteFromCart
    }

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </QueryClientProvider>
    );
};

export default AuthProvider;