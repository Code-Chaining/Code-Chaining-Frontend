import { useEffect, useState } from "react";
import { RoomList, RoomTitle, LoginPrompt } from "../css/MyRoomListCss.js";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import { axiosInstance } from "../utils/apiConfig";
import { useAuth } from "../contexts/AuthContext.js";

export default function MyRoomList() {
  let navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      return;
    }

    const fetchRooms = async () => {
      try {
        const response = await axiosInstance.get(`/room/my`);
        const roomsData = response.data.data.myRoomList.map((room) => ({
          roomId: room.roomId,
          title: room.title,
        }));

        setRooms(roomsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRooms();
  }, [isLoggedIn]);

  function handleRoomDetailPage(e, roomId) {
    e.stopPropagation();
    navigate(`/room/${roomId}`);
  }

  return (
    <RoomList>
      <RoomTitle>내 토론 방</RoomTitle>
      {isLoggedIn === false ? (
        <LoginPrompt>로그인이 필요해요 🚀</LoginPrompt>
      ) : (
        <>
          {rooms.map((room) => (
            <Button
              key={room.roomId}
              title={room.title}
              commentCount="1" // 실제 commentCount를 사용하려면 이 주석을 해제하고 적절히 조정하세요.
              onClick={(e) => handleRoomDetailPage(e, room.roomId)}
            />
          ))}
        </>
      )}
    </RoomList>
  );
}
