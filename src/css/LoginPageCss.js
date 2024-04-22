import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginLogoAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
`;

export const Logo = styled.img`
  width: 30%;
  object-fit: cover;
`;

export const Text = styled.div`
  color: #000000;
  font-family: "Pretendard-Black", Helvetica;
  font-size: 3vw;
  margin-left: 3vw;
`;

export const KakaoLoginButton = styled.img`
  margin-top: 10vh;
  cursor: pointer;
`;
