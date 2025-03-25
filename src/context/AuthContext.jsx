// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   //   useEffect(() => {
//   //     if (token) {
//   //       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   //     }
//   //   }, [token]);

//   useEffect(() => {
//     const axiosInstance = axios.create();

//     axiosInstance.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         if (error.response?.status === 401) {
//           try {
//             const refreshToken = localStorage.getItem("refreshToken");
//             const res = await axios.post(
//               "http://localhost:5000/api/auth/refresh-token",
//               { token: refreshToken }
//             );

//             localStorage.setItem("token", res.data.accessToken);
//             setToken(res.data.accessToken);

//             error.config.headers[
//               "Authorization"
//             ] = `Bearer ${res.data.accessToken}`;
//             return axiosInstance.request(error.config);
//           } catch (err) {
//             console.error("Session expired, please log in again.");
//             logout();
//           }
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       localStorage.setItem("token", response.data.accessToken);
//       localStorage.setItem("refreshToken", response.data.refreshToken);
//       localStorage.setItem("user", JSON.stringify(response.data.user));

//       setToken(response.data.accessToken);
//       setUser(response.data.user);
//     } catch (error) {
//       console.error("Login failed", error.response?.data?.message);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("refreshToken");
//     localStorage.removeItem("user");
//     setUser(null);
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import { createContext, useEffect, useState } from "react";

// Context creation
export const LoginContext = createContext(null);

const ContextProvider = ({ children }) => {
  // State for login data
  const [loginData, setLoginData] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  // Load stored data once when the component mounts
  useEffect(() => {
    const storedLoginData = localStorage.getItem("user");
    if (storedLoginData) {
      setLoginData(JSON.parse(storedLoginData));
    }
  }, []); // Empty dependency array ensures it runs only on mount

  // Update localStorage when loginData changes
  useEffect(() => {
    if (loginData) {
      localStorage.setItem("user", JSON.stringify(loginData));
    } else {
      localStorage.removeItem("user"); // Clean up if user logs out
    }
  }, [loginData]);

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </LoginContext.Provider>
  );
};

export default ContextProvider;