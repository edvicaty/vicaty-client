import React, { createContext, useState, useEffect } from "react";
import { getCurrentUser } from "./services/auth";

export const Context = createContext();

export default function OurProvider({ children }) {
  const [user, setuser] = useState(null);

  useEffect(() => {
    async function getSession() {
      const { user } = await getCurrentUser();
      if (user?.username) {
        loginUser(user);
      }
    }
    getSession();
  }, []);

  function loginUser(user) {
    setuser(user);
  }
  function logout() {
    setuser(null);
  }

  return (
    <Context.Provider
      value={{
        user,
        loginUser,
        logout,
      }}>
      {children}
    </Context.Provider>
  );
}
