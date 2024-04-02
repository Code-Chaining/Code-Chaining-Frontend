import { useEffect, useState } from "react";
import { RoomList, RoomTitle } from "../css/MyRoomListCss.js";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import axios from "axios";
import { apiBaseUrl } from "../utils/apiConfig";

export default function MyRoomList() {
  let navigate = useNavigate();

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/room/my`);
        const roomsData = response.data.data.myRoomList.map((room) => ({
          roomId: room.roomId,
          title: room.title,
        }));

        setRooms(roomsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRooms(apiBaseUrl, setRooms);
  }, []);

  function handleRoomDetailPage(e, roomId) {
    e.stopPropagation();
    navigate(`/room/${roomId}`);
  }

  return (
    <RoomList>
      <RoomTitle>내 토론 방</RoomTitle>
      {rooms.map((room) => (
        <Button
          key={room.roomId}
          title={room.title}
          commentCount="1"
          // commentCount={room.commentCount}
          onClick={(e) => handleRoomDetailPage(e, room.roomId)}
        />
      ))}
    </RoomList>
  );
}
