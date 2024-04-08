import {
  PublicRoom,
  PublicRoomSpan,
  PublicRoomDiv,
} from "../css/PublicRoomListCss";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useRooms } from "../contexts/RoomContext";
import { NoRoomMessage } from "../css/MyRoomListCss";

export default function PublicRoomList() {
  let navigate = useNavigate();

  const { publicRooms } = useRooms();

  function handleRoomDetailPage(e, roomId) {
    e.stopPropagation();
    navigate(`/room/${roomId}`);
  }

  return (
    <PublicRoom>
      <PublicRoomSpan>공개 방</PublicRoomSpan>
      <PublicRoomDiv>
        {publicRooms.length > 0 ? (
          <>
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
          </>
        ) : (
          <NoRoomMessage>
            공개된 토론 방이 없습니다!
            <br />
            방을 생성하여 함께 토론해보세요!
          </NoRoomMessage>
        )}
      </PublicRoomDiv>
    </PublicRoom>
  );
}
