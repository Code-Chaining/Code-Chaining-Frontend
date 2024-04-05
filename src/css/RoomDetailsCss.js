import styled from "styled-components";

export const RoomDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1.25vw;
  position: relative;
  width: 80vw;
  height: 90vh;
  margin: 0 0 0 22vw;
  overflow: scroll;
  z-index: 6;
`;

export const Divider = styled.div`
  border-top: 1px solid #ccc; /* 구분선 색상을 #ccc로 설정 */
  margin: 2vh 4vw 2vh 0;
`;
