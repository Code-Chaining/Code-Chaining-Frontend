import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.png";
import { LogoAndTextContainer, Logo, Text } from "../css/HeaderCss";

export default function Header() {
  return (
    <header>
      <LogoAndTextContainer>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: "1.1vw",
          }}
        >
          <Logo alt="Logo" src={logoImage} />
          <Text>
            CODE
            <br />
            CHAINING
          </Text>
        </Link>
      </LogoAndTextContainer>
    </header>
  );
}
