// import all the necessary packages
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

// create a context
export const AuthContext = createContext();
const auth = getAuth(app);

// create a provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const gootgleProvider = new GoogleAuthProvider();

  // create a signup function
  const signUp = async (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create a login function
  const login = async (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // create a logout function
  const logout = async () => {
    setLoading(true);
    return signOut(auth);
  };
  // Google Signin Function
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gootgleProvider);
  };

  // create a State change listener to set the user and loading state when the user logs in or logs out of the app
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        const loggedUser = { email: currentUser.email };
        // Send the logged user to get a JWT
        fetch("https://car-doctor-server-cyan-iota.vercel.app/jwt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // Save the JWT in the local storage
            // This is not a secure way to store the JWT
            localStorage.setItem("access-token", data.token);
          });
      }
    });
    return () => unsubscribe();
  }, []);
  // signout function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // create a authInfo object to pass the context
  const authInfo = {
    user,
    logout,
    loading,
    signUp,
    googleSignIn,
    login,
    logOut,
  };
  // return the context provider with the authInfo object
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
