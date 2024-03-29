import logoImage from "../assets/Logo.png";
import { LogoAndTextContainer, Logo, Text } from "../css/HeaderCss";

export default function Header() {
  return (
    <LogoAndTextContainer>
      <Logo alt="Logo" src={logoImage} />
      <Text>
        CODE
        <br />
        CHAINING
      </Text>
    </LogoAndTextContainer>
  );
}
