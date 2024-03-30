import styled from "styled-components";

export const RoomList = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 13px;
  height: 600px;
  max-height: 600px;
  overflow-y: scroll;
`;

export const RoomTitle = styled.div`
  color: #000000;
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
