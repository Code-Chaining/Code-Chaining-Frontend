import { useParams } from "react-router-dom";

export default function RoomDetails() {
  let { roomId } = useParams();

  return (
    <>
      <div>{roomId}입니다.</div>
    </>
  );
}
