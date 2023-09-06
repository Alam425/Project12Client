import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../../fitebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [item, setItem] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [review, setReview] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [maleInstructors, setMaleInstructors] = useState([]);
    const [femaleInstructors, setFemaleInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

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

        // axios.post('https://assignment12-one.vercel.app/cart', {
        axios.post('http://localhost:3000/cart', {
            item : ite
        })
          .then(function (response) {
            console.log(response);
            setCart(ite);
            Swal.fire(
                "Successful",
                `${ite.name}Added to Cart!`,
                'success'
              )
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
        fetch("https://assignment12-one.vercel.app/class")
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [])

    useEffect(() => {
        fetch("https://assignment12-one.vercel.app/instructor")
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
                const maleInstructor = data.filter(i => i.gender === 'male');
                setMaleInstructors(maleInstructor);
                const femaleInstructor = data.filter(i => i.gender === 'female');
                setFemaleInstructors(femaleInstructor);
            })
    }, [])

    useEffect(() => {
        fetch("https://assignment12-one.vercel.app/specialities")
            .then(res => res.json())
            .then(data => {
                setSpecialities(data);
            })
    }, [])

    useEffect(() => {
        fetch("https://assignment12-one.vercel.app/reviews")
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
    }, [])

    const info = {
        loginViaEmail, loginViaGoogle, registerViaEmail, loading, user, logOut, auth, item, instructors, maleInstructors, femaleInstructors, specialities, review, addToCart, cart
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;