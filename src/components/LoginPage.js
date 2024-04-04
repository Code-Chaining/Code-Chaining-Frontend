import { useEffect } from "react";
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

export default function LoginPage() {
  let navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get("code");

    if (codeParam) {
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
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [login, navigate]);

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