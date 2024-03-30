import styled from "styled-components";

export const LogoAndTextContainer = styled.div`
  align-items: center;
  display: flex;
  border-radius: 1vw;
  gap: 1.1vw;
  padding-left: 3vw;
  padding-top: 2vw;
  padding-bottom: 2vw;
  box-shadow: 0vw 0.4vw 0.6vw rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 5vw;
  object-fit: cover;
  width: 5vw;
`;

export const Text = styled.div`
  color: #000000;
  font-family: "Pretendard-Black", Helvetica;
  font-size: 1.3vw;
  font-weight: 900;
  text-align: center;
`;
