import { useEffect } from "react";
import {
  PublicRoom,
  PublicRoomSpan,
  PublicRoomDiv,
} from "../css/PublicRoomListCss";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import { useRooms } from "../contexts/RoomContext";

export default function PublicRoomList() {
  let navigate = useNavigate();

  const { publicRooms, publicFetchRooms } = useRooms();

  useEffect(() => {
    publicFetchRooms();
  }, []);

  function handleRoomDetailPage(e, roomId) {
    e.stopPropagation();
    navigate(`/room/${roomId}`);
  }

  return (
    <PublicRoom>
      <PublicRoomSpan>공개 방</PublicRoomSpan>
      <PublicRoomDiv>
        {publicRooms.map((room) => (
          <Button
            key={room.roomId}
            title={room.title}
            writer={room.writer}
            commentCount={room.commentCount}
            size="large"
            onClick={(e) => handleRoomDetailPage(e, room.roomId)}
          />
        ))}
      </PublicRoomDiv>
    </PublicRoom>
  );
}
