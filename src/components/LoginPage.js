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

export default function LoginPage() {
  let navigate = useNavigate();

  function handleMainPage() {
    navigate("/");
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get("code");

    if (codeParam) {
      console.log(codeParam);
      // 서버에 인증 요청

      handleMainPage();
    }
  }, []);

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
