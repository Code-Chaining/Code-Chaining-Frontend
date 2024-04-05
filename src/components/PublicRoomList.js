import { useEffect, useState } from "react";
import {
  PublicRoom,
  PublicRoomSpan,
  PublicRoomDiv,
} from "../css/PublicRoomListCss";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import { axiosInstance } from "../utils/apiConfig";

export default function PublicRoomList() {
  let navigate = useNavigate();

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await axiosInstance.get(`/room/public`);
      try {
        const roomsData = response.data.data.publicRoomList.map((room) => ({
          roomId: room.roomId,
          title: room.title,
          writer: room.writer,
          commentCount: room.commentCount,
        }));
        setRooms(roomsData);
      } catch (error) {
        console.error(response);
      }
    };

    fetchRooms();
  }, []);

  function handleRoomDetailPage(e, roomId) {
    e.stopPropagation();
    navigate(`/room/${roomId}`);
  }

  return (
    <PublicRoom>
      <PublicRoomSpan>공개 방</PublicRoomSpan>
      <PublicRoomDiv>
        {rooms.map((room) => (
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
