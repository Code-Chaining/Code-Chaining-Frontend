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
  align-items: center;
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

export const MyProfileContainer = styled.div`
  display: flex;
  gap: 0.4vw;
  padding: 0.7vw;
  margin-right: 1.5vw;
  border-radius: 0.375rem;
  align-items: center;
`;

export const MyProfileImage = styled.img`
  width: 3vw;
  border-radius: 50%;
  object-fit: cover;
`;

export const MyProfileText = styled.div`
  color: #000000;
  font-family: "Pretendard", Helvetica;
  font-size: 1.2vw;
`;

export const LogoutButton = styled.button`
  width: 2.5vw;
  margin-left: 0.2vw;
  padding: 0 0.2vw 0 0.2vw;
  font-size: 0.7rem;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-left: 1px solid rgba(169, 169, 169, 0.4);

  cursor: pointer;
  &:hover {
    color: #ffffff;
  }

  img {
    width: 100%;
    padding-top: 0.2vh;
    padding-left: 0.2vw;

    object-fit: cover;
  }
`;
