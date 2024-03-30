import { RoomList, RoomTitle } from "../css/MyRoomListCss.js";
import Button from "./Button";

export default function MyRoomList() {
  return (
    <RoomList>
      <RoomTitle>내 토론 방</RoomTitle>
      {/* 서버에서 받아오는 데이터 리턴 */}
      <Button title="제목입니다" commentCount="9"></Button>
      <Button title="제목입니다" commentCount="9"></Button>
      <Button title="제목입니다" commentCount="9"></Button>
      <Button title="제목입니다" commentCount="9"></Button>
    </RoomList>
  );
}
