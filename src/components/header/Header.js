import React from "react";
import logoImage from "../../assets/Logo.png";

import {
  LogoAndTextContainer,
  Logo,
  Text,
  HeaderCss,
  StyledLink,
} from "../../css/HeaderCss";

import { useAuth } from "../../contexts/AuthContext";
import AuthenticatedHeader from "./AuthenticatedHeader";
import UnauthenticatedHeader from "./UnauthenticatedHeader";

export default function Header() {
  const { isLoggedIn } = useAuth();

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
      {isLoggedIn ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}
    </HeaderCss>
  );
}
