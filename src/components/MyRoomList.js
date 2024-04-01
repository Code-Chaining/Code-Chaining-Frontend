import { RoomList, RoomTitle } from "../css/MyRoomListCss.js";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import { useEffect, useState } from "react";
import axios from "axios";

export default function MyRoomList() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  let navigate = useNavigate();

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/room/my`);
        const roomsData = response.data.data.roomList.map((room) => ({
          roomId: room.roomId,
          title: room.title,
        }));

        setRooms(roomsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRooms(apiBaseUrl, setRooms);
  }, [apiBaseUrl]);

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
          // commentCount={room.commentCount}
          onClick={(e) => handleRoomDetailPage(e, room.roomId)}
        />
      ))}
    </RoomList>
  );
}
