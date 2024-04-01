import styled from "styled-components";

export const HeaderCss = styled.header`
  height: 10vh;
  display: flex;
  border-radius: 1vw;
  align-items: center;
  box-shadow: 0vw 0.4vw 0.6vw rgba(0, 0, 0, 0.1);
`;

export const LogoAndTextContainer = styled.div`
  gap: 1.1vw;
  margin-left: 30px;
  alignitems: "center";
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
  font-weight: 900;
`;
