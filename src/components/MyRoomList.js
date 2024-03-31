import { RoomList, RoomTitle } from "../css/MyRoomListCss.js";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import { rooms } from "../data";

export default function MyRoomList() {
  let navigate = useNavigate();

  function handleRoomDetailPage(e, roomId) {
    e.stopPropagation();

    navigate(`/room/${roomId}`);
  }

  return (
    <RoomList>
      <RoomTitle>내 토론 방</RoomTitle>
      {/* 서버에서 받아오는 데이터 리턴 */}
      {rooms.map((room) => (
        <Button
          key={room.roomId}
          title={room.title}
          commentCount={room.commentCount}
          onClick={(e) => handleRoomDetailPage(e, room.roomId)}
        />
      ))}
    </RoomList>
  );
}
