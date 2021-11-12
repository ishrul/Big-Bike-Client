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
    setUser,
    isLoading,
    setIsLoading,
    logOut,
    setUserName,
  };
};

export default useFirebase;
