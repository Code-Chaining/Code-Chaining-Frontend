import React from "react";
import logoImage from "../assets/Logo.png";
import {
  LogoAndTextContainer,
  Logo,
  Text,
  HeaderCss,
  StyledLink,
} from "../css/HeaderCss";

export default function Header() {
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
    </HeaderCss>
  );
}
