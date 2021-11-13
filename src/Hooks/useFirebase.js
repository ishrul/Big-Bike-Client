import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const createAccountWithGoogle = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginAccountWithGoogle = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   setup user name start
  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        //   profile updated
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //   setup user name end

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user.email]);

  // user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
        // User is signed out
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // SAVE USER
  const saveUser = (email, displayName) => {
    const user = {
      email,
      displayName,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // LOG OUT
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    createAccountWithGoogle,
    error,
    setError,
    LoginAccountWithGoogle,
    user,
    admin,
    setUser,
    isLoading,
    setIsLoading,
    logOut,
    setUserName,
    saveUser,
  };
};

export default useFirebase;
