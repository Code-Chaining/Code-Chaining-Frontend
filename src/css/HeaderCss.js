import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderCss = styled.header`
  height: 10vh;
  display: flex;
  border-radius: 1vw;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0vw 0.4vw 0.6vw rgba(0, 0, 0, 0.1);
`;

export const LogoAndTextContainer = styled.div`
  gap: 1.1vw;
  margin-left: 30px;
  align-items: "center";
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Text = styled.div`
  color: #000000;
  font-family: "Pretendard-Black", Helvetica;
  font-size: 1.3vw;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  display: flex;
  gap: 1.1vw;
  height: 60px;
  align-items: center;
  text-decoration: none;
`;

export const LoginButton = styled.button`
  width: 10vw;
  padding: 1vh;
  margin-right: 2vw;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }

  border-radius: 0.375rem;
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #dedede;

  cursor: pointer;
  &:hover {
    background-color: #434343;
    color: #ffffff;
  }
`;
