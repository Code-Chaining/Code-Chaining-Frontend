import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.png";
import { LogoAndTextContainer, Logo, Text } from "../css/HeaderCss";

export default function Header() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <LogoAndTextContainer>
          <Logo alt="Logo" src={logoImage} />
          <Text>
            CODE
            <br />
            CHAINING
          </Text>
        </LogoAndTextContainer>
      </Link>
    </header>
  );
}
