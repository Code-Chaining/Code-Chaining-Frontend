import MyRoomList from "./MyRoomList";
import PublicRoomList from "./PublicRoomList";

export default function CombinedRoomList() {
  return (
    <>
      <PublicRoomList />
      <MyRoomList />
    </>
  );
}
