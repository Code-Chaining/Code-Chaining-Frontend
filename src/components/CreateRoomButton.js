import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function CreateRoomButton() {
  let navigate = useNavigate();
  let location = useLocation();
  const { isLoggedIn } = useAuth();

  function handleCreateRoom() {
    if (!isLoggedIn) {
      alert("로그인 후 방 생성이 가능합니다!");
      return;
    }

    navigate("/create-room");
  }

  const isActive = location.pathname === "/create-room";

  return (
    <Button onClick={handleCreateRoom} $isActive={isActive}>
      방 생성
    </Button>
  );
}
