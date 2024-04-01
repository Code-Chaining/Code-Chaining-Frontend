import { StyledLabel, StyledInput } from "../css/CreateRoomCss";

export default function RoomTitle({ isEditing = true, title, setTitle }) {
  return (
    <div>
      <StyledLabel htmlFor="title">제목</StyledLabel>
      <StyledInput
        id="title"
        type="text"
        disabled={!isEditing}
        placeholder="제목을 입력하세요."
        value={title || ""}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
