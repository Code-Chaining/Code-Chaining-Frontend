import styled from "styled-components";

export const RoomList = styled.div`
  background-color: #ffffff;
  border-radius: 0.625vw;
  display: flex;
  flex-direction: column;
  gap: 0.625vw;
  padding: 0.8125vw;
  height: 85vh;
  max-height: 85vh; // 600px 대신, 화면 높이의 37.5%를 사용
  overflow-y: scroll;
`;

export const RoomTitle = styled.div`
  color: #000000;
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 1.25vw;
  font-weight: 400;
  text-align: center;
  text-shadow: 0.125vw 0.125vw 0.25vw rgba(0, 0, 0, 0.5);
`;
