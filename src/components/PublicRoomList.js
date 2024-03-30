import styled from "styled-components";

const PublicRoom = styled.div`
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

const PublicRoomSpan = styled.span`
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
`;

export default function PublicRoomList() {
  return (
    <PublicRoom>
      <PublicRoomSpan>공개 방</PublicRoomSpan>
      <div>
        <button>1. TITLE</button>
        <button>2. TITLE</button>
        <button>3. TITLE</button>
        <button>1. TITLE</button>
        <button>2. TITLE</button>
        <button>3. TITLE</button>
        <button>1. TITLE</button>
        <button>2. TITLE</button>
        <button>3. TITLE</button>
        <button>1. TITLE</button>
        <button>2. TITLE</button>
        <button>3. TITLE</button>
        <button>1. TITLE</button>
        <button>2. TITLE</button>
        <button>3. TITLE</button>
      </div>
    </PublicRoom>
  );
}
