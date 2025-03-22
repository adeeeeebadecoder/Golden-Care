import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  //   useEffect(() => {
  //     if (token) {
  //       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //     }
  //   }, [token]);

  useEffect(() => {
    const axiosInstance = axios.create();

    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          try {
            const refreshToken = localStorage.getItem("refreshToken");
            const res = await axios.post(
              "http://localhost:5000/api/auth/refresh-token",
              { token: refreshToken }
            );

            localStorage.setItem("token", res.data.accessToken);
            setToken(res.data.accessToken);

            error.config.headers[
              "Authorization"
            ] = `Bearer ${res.data.accessToken}`;
            return axiosInstance.request(error.config);
          } catch (err) {
            console.error("Session expired, please log in again.");
            logout();
          }
        }
        return Promise.reject(error);
      }
    );
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setToken(response.data.accessToken);
      setUser(response.data.user);
    } catch (error) {
      console.error("Login failed", error.response?.data?.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
