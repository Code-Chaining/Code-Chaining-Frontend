import { createContext, useContext, useState } from "react";
import { axiosInstance } from "../utils/apiConfig";

const RoomContext = createContext();

export function useRooms() {
  return useContext(RoomContext);
}

export function RoomProvider({ children }) {
  const [myRooms, setMyRooms] = useState([]);
  const [publicRooms, setPublicRooms] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const myFetchRooms = async (setIsLoading) => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  const publicFetchRooms = async (setIsLoading) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `/room/public/search?filter=${searchFilter}`
      );
      console.log(response);
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
    setIsLoading(false);
  };

  const removeRoomFromList = (roomId) => {
    setMyRooms(myRooms.filter((room) => room.roomId !== roomId));
  };

  const value = {
    myRooms,
    publicRooms,
    myFetchRooms,
    publicFetchRooms,
    searchFilter,
    setSearchFilter,
    removeRoomFromList,
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
}
