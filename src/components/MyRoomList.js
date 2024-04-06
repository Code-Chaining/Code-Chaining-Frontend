import { useEffect, useState } from "react";
import {
  RoomList,
  RoomTitle,
  LoginPrompt,
  NoRoomMessage,
} from "../css/MyRoomListCss.js";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

import { axiosInstance } from "../utils/apiConfig";
import { useAuth } from "../contexts/AuthContext.js";

export default function MyRoomList() {
  let navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const fetchRooms = async () => {
      try {
        const response = await axiosInstance.get(`/room/my`);
        const roomsData = response.data.data.myRoomList.map((room) => ({
          roomId: room.roomId,
          title: room.title,
          commentCount: room.commentCount,
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
        <LoginPrompt>[로그인이 필요한 서비스]</LoginPrompt>
      ) : (
        <>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <Button
                key={room.roomId}
                title={room.title}
                commentCount={room.commentCount}
                onClick={(e) => handleRoomDetailPage(e, room.roomId)}
              />
            ))
          ) : (
            <NoRoomMessage>
              내 토론 방이 없습니다!
              <br />
              방을 생성하여 함께 토론해보세요!
            </NoRoomMessage>
          )}
        </>
      )}
    </RoomList>
  );
}
