import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
export const AuthContext = React.createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    function setUser() {
      auth.onAuthStateChanged((user) => setCurrentUser(user));
    }
    return setUser;
  }, []);
  function signUp(email, pswd) {
    return auth.createUserWithEmailAndPassword(email, pswd);
  }
  function logIn(email, pswd) {
    return auth.signInWithEmailAndPassword(email, pswd);
  }
  function logOut() {
    return auth.signOut();
  }
  const contextValues = { currentUser, signUp, logIn, logOut };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
}
