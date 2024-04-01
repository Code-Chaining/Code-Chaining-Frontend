import React from "react";
import logoImage from "../assets/Logo.png";
import { LogoAndTextContainer, Logo, Text, HeaderCss } from "../css/HeaderCss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderCss>
      <LogoAndTextContainer>
        <Link
          to="/"
          style={{
            color: "inherit",
            display: "flex",
            gap: "1.1vw",
            height: "60px",
            alignItems: "center",
            textDecoration: "none",
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
    </HeaderCss>
  );
}
