import { createContext, useContext, useState } from "react";
import { axiosInstance } from "../utils/apiConfig";

const RoomContext = createContext();

export function useRooms() {
  return useContext(RoomContext);
}

export function RoomProvider({ children }) {
  const [myRooms, setMyRooms] = useState([]);
  const [publicRooms, setPublicRooms] = useState([]);

  const myFetchRooms = async () => {
    try {
      const response = await axiosInstance.get(`/room/my`);
      const roomsData = response.data.data.myRoomList.map((room) => ({
        roomId: room.roomId,
        title: room.title,
        commentCount: room.commentCount,
      }));

      setMyRooms(roomsData);
    } catch (error) {
      console.error(error);
    }
  };

  const publicFetchRooms = async () => {
    try {
      const response = await axiosInstance.get(`/room/public`);
      const roomsData = response.data.data.publicRoomList.map((room) => ({
        roomId: room.roomId,
        title: room.title,
        writer: room.writer,
        commentCount: room.commentCount,
      }));

      setPublicRooms(roomsData);
    } catch (error) {
      console.error(error);
    }
  };

  const removeRoomFromList = (roomId) => {
    setMyRooms(myRooms.filter((room) => room.roomId !== roomId));
  };

  const value = {
    myRooms,
    publicRooms,
    myFetchRooms,
    publicFetchRooms,
    removeRoomFromList,
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
}
