import styled from "styled-components";

export const PublicRoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1.25vw;
  position: relative;
  width: 80vw;
  margin: 1.875vw 0 0 20vw;
  z-index: 6;
`;

export const PublicRoomSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20vw;
  height: 5vh;
  color: #000000;
  font-size: 1.875vw;
  font-weight: 400;
  line-height: 2.28vw;
  text-align: center;
  border-radius: 1vw;
  box-shadow: 0vw 0.4vw 0.6vw rgba(0, 0, 0, 0.1);
  margin-right: auto;
  margin-left: auto;
`;

export const PublicRoomDiv = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 74vw;
  height: 88vh;
  background: #ffffff;
  z-index: 9;
  overflow: hidden;
  overflow-y: scroll;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  align-items: center;
`;

export const SearchImage = styled.img`
  width: 2vw;
`;

export const SearchInput = styled.input`
  padding: 8px;
  margin-left: 0.5vw;
  border: 1px solid #000000;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;
