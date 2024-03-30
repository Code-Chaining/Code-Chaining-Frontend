import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function CreateRoomButton() {
  let navigate = useNavigate();
  let location = useLocation();

  function handleCreateRoom() {
    navigate("/create-room");
  }

  const isActive = location.pathname === "/create-room";

  return (
    <Button onClick={handleCreateRoom} isActive={isActive}>
      방 생성
    </Button>
  );
}
