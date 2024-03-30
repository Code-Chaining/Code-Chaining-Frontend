import styled from "styled-components";

export const LogoAndTextContainer = styled.div`
  align-items: center;
  display: flex;
  border-radius: 10px;
  gap: 11px;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 100px;
  object-fit: cover;
  width: 100px;
`;

export const Text = styled.div`
  color: #000000;
  font-family: "Pretendard-Black", Helvetica;
  font-size: 30px;
  font-weight: 900;
  text-align: center;
`;
