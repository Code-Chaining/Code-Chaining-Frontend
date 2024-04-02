import { useEffect, useState } from "react";
import {
  PublicRoom,
  PublicRoomSpan,
  PublicRoomDiv,
} from "../css/PublicRoomListCss";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import axios from "axios";
import { apiBaseUrl } from "../utils/apiConfig";

export default function PublicRoomList() {
  let navigate = useNavigate();

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await axios.get(`${apiBaseUrl}/room/public`);
      try {
        const roomsData = response.data.data.publicRoomList.map((room) => ({
          roomId: room.roomId,
          title: room.title,
          writer: room.writer,
        }));
        setRooms(roomsData);
      } catch (error) {
        console.error(response);
      }
    };

    fetchRooms(apiBaseUrl, setRooms);
  }, []);

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
            writer={room.writer}
            commentCount="1"
            // commentCount={room.commentCount}
            size="large"
            onClick={(e) => handleRoomDetailPage(e, room.roomId)}
          />
        ))}
      </PublicRoomDiv>
    </PublicRoom>
  );
}
