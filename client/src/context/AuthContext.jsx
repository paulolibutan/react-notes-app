import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: true,
  });

  const authenticateUser = (token) => {
    fetch(`${baseUrl}/api/users/details`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.user !== "undefined") {
          setAuthState({
            isAuthenticated: true,
            user: data.user,
            token: token,
            isLoading: false,
          });
        } else {
          setAuthState({
            isAuthenticated: false,
            user: null,
            token: null,
            isLoading: false,
          });
        }
      });
  };

  const login = (token) => {
    localStorage.setItem("token", token);
    authenticateUser(token);
  };

  const logout = () => {
    localStorage.clear();
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      authenticateUser(storedToken);
    } else {
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {authState.isLoading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
