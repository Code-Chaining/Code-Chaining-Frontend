import { RoomList, RoomTitle } from "../css/MyRoomListCss.js";

export default function MyRoomList() {
  return (
    <RoomList>
      <RoomTitle>MY ROOM</RoomTitle>
      {/* 버튼 컴포넌트 만들어서 분리하기 */}
      <button>1. TITLE</button>
      <button>2. TITLE</button>
      <button>3. TITLE</button>
    </RoomList>
  );
}
