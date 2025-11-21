// src/Context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Try to restore user from localStorage so login "persists"
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("blogUser");
    return stored ? JSON.parse(stored) : null;
  });

  const isAuthenticated = !!user;

  function login(username, password) {
    // basic validation
    if (!username || !password) {
      return {
        success: false,
        message: "Username and password are required.",
      };
    }

    // For this project we don't call a real API.
    // We just accept any non-empty username/password.
    const loggedInUser = { username };
    setUser(loggedInUser);
    return { success: true };
  }

  function logout() {
    setUser(null);
  }

  // keep auth state in localStorage so it survives refreshes
  useEffect(() => {
    if (user) {
      localStorage.setItem("blogUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("blogUser");
    }
  }, [user]);

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
