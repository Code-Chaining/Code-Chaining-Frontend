import styled from "styled-components";

export const RoomList = styled.div`
  background-color: #ffffff;
  border-radius: 0.625vw;
  display: flex;
  flex-direction: column;
  gap: 0.625vw;
  padding: 0.8125vw;
  height: 70vh;
  max-height: 70vh;
  overflow-y: scroll;
`;

export const RoomTitle = styled.div`
  color: #000000;
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 1.25vw;
  font-weight: 400;
  text-align: center;
`;

export const LoginPrompt = styled.div`
  color: #979797;
  border-radius: 5px;
  font-family: "Pretendard-Regular", Helvetica;
  padding: 1.5vh;
  margin: 1vh 0;
  text-align: center;
  opacity: 0.8;
  font-size: 1.05rem;
`;
