import { useEffect } from "react";
import Cookies from "js-cookie";
import logoImage from "../assets/Logo.png";
import kakaoLoginImage from "../assets/kakaoLogin.png";

import {
  LoginContainer,
  LoginLogoAndTextContainer,
  Logo,
  Text,
  KakaoLoginButton,
} from "../css/LoginPageCss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiBaseUrl } from "../utils/apiConfig";
import { useAuth } from "../contexts/AuthContext";
import { useLoading } from "../contexts/LoadingContext";
import LoaderSpinner from "./LoaderSpinner";

export default function LoginPage() {
  let navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }

    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get("code");

    if (codeParam) {
      setIsLoading(true);

      axios({
        method: "post",
        url: "https://kauth.kakao.com/oauth/token",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          code: codeParam,
          client_id: `${process.env.REACT_APP_KAKAO_CLIENT_ID}`,
          grant_type: "authorization_code",
          redirect_uri: `${process.env.REACT_APP_REDIRECT_URI}`,
        },
      })
        .then((response) => {
          return axios({
            method: "post",
            url: `${apiBaseUrl}/kakao/token`,
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify({ idToken: response.data.id_token }),
          });
        })
        .then((response) => {
          login(response.data.data);

          return axios.get(`${apiBaseUrl}/csrf-token`, {
            withCredentials: true,
          });
        })
        .then((response) => {
          const csrfToken = response.data.data;
          Cookies.set("X-CSRF-TOKEN", csrfToken);

          setIsLoading(false);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [isLoggedIn, login, navigate]);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  const kakaoHandleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  };

  return (
    <LoginContainer>
      <LoginLogoAndTextContainer $login="login">
        <Logo alt="Logo" src={logoImage} />
        <Text>
          CODE
          <br />
          CHAINING
        </Text>
      </LoginLogoAndTextContainer>
      <KakaoLoginButton
        alt="카카오톡 로그인 버튼"
        src={kakaoLoginImage}
        onClick={kakaoHandleLogin}
      />
    </LoginContainer>
  );
}
