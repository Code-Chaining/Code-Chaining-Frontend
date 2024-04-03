import React from "react";
import logoImage from "../assets/Logo.png";
import {
  LogoAndTextContainer,
  Logo,
  Text,
  HeaderCss,
  StyledLink,
  LoginButton,
} from "../css/HeaderCss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();

  function handleLoginPage() {
    navigate("/login");
  }

  return (
    <HeaderCss>
      <LogoAndTextContainer>
        <StyledLink to="/">
          <Logo alt="Logo" src={logoImage} />
          <Text>
            CODE
            <br />
            CHAINING
          </Text>
        </StyledLink>
      </LogoAndTextContainer>
      <LoginButton onClick={handleLoginPage}>로그인</LoginButton>
    </HeaderCss>
  );
}
