import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function CreateRoomButton() {
  let navigate = useNavigate();

  function handleCreateRoom() {
    navigate("/create-room");
  }

  return <Button onClick={handleCreateRoom}>방 생성</Button>;
}
