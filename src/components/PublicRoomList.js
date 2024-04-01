import {
  PublicRoom,
  PublicRoomSpan,
  PublicRoomDiv,
} from "../css/PublicRoomListCss";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import { rooms } from "../data";

export default function PublicRoomList() {
  let navigate = useNavigate();

  function handleRoomDetailPage(e, roomId) {
    e.stopPropagation();

    navigate(`/room/${roomId}`);
  }

  return (
    <PublicRoom>
      <PublicRoomSpan>공개 방</PublicRoomSpan>
      <PublicRoomDiv>
        {/* 서버에서 받아오는 데이터 리턴 */}
        {rooms.map((room) => (
          <Button
            key={room.roomId}
            title={room.title}
            name={room.name}
            commentCount={room.commentCount}
            size="large"
            onClick={(e) => handleRoomDetailPage(e, room.roomId)}
          />
        ))}
      </PublicRoomDiv>
    </PublicRoom>
  );
}
