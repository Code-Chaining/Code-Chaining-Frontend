import { createContext, useState, useContext, useEffect } from "react";
import { axiosInstance } from "../utils/apiConfig";
import Cookies from "js-cookie";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      fetchMemberInfo();
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const fetchMemberInfo = async () => {
    try {
      const response = await axiosInstance.get(`/member/info`);
      setUserInfo(response.data.data);
    } catch (error) {
      console.log("유저 정보를 가져오는데 실패했습니다.");
    }
  };

  const fetchLogout = async () => {
    try {
      await axiosInstance.post(`/logout`);
    } catch (error) {
      console.log("로그아웃 실패");
    }
  };

  const login = ({ accessToken, refreshToken }) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    if (localStorage.getItem("accessToken")) {
      fetchMemberInfo();
      setIsLoggedIn(true);
    }
  };

  const logout = async () => {
    const isConfirmed = window.confirm("정말 로그아웃 하시겠습니까?");
    if (isConfirmed) {
      await fetchLogout();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      Cookies.remove("X-CSRF-TOKEN");
      setIsLoggedIn(false);
      setUserInfo([]);
      alert("로그아웃 성공!");
    } else {
      alert("로그아웃 실패");
    }
  };

  const value = {
    isLoggedIn,
    userInfo,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
