import { useEffect } from "react";
import { useLoading } from "../contexts/LoadingContext";
import { useRooms } from "../contexts/RoomContext";
import LoaderSpinner from "./LoaderSpinner";
import PublicRoomList from "./PublicRoomList";
import RoomSidebar from "./RoomSidebar";

export default function CombineRoomList() {
  const { isLoading, setIsLoading } = useLoading();
  const { myFetchRooms, publicFetchRooms } = useRooms();

  useEffect(() => {
    myFetchRooms(setIsLoading);
    publicFetchRooms(setIsLoading);
  }, []);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <>
      <RoomSidebar />
      <PublicRoomList />
    </>
  );
}
