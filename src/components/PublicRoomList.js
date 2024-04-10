import {
  PublicRoom,
  PublicRoomSpan,
  PublicRoomDiv,
  PublicRoomTitleContainer,
  SearchContainer,
  SearchImage,
  SearchInput,
} from "../css/PublicRoomListCss";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useRooms } from "../contexts/RoomContext";
import { useLoading } from "../contexts/LoadingContext";
import { NoRoomMessage } from "../css/MyRoomListCss";
import searchImage from "../assets/Search.png";

export default function PublicRoomList() {
  let navigate = useNavigate();

  const { publicRooms, publicFetchRooms, searchFilter, setSearchFilter } =
    useRooms();
  const { setIsLoading } = useLoading();

  function handleRoomDetailPage(e, roomId) {
    e.stopPropagation();
    navigate(`/room/${roomId}`);
  }

  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSearchFilter("");
    await publicFetchRooms(setIsLoading);
  };

  return (
    <PublicRoom>
      <PublicRoomSpan>공개 방</PublicRoomSpan>

      <SearchContainer>
        <SearchImage src={searchImage} alt="검색" />
        <form onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="방 검색...(Enter)"
            value={searchFilter}
            onChange={handleSearchChange}
          />
        </form>
      </SearchContainer>

      <PublicRoomDiv>
        {publicRooms.length > 0 ? (
          <>
            {publicRooms.map((room) => (
              <Button
                key={room.roomId}
                title={room.title}
                writer={room.writer}
                commentCount={room.commentCount}
                size="large"
                onClick={(e) => handleRoomDetailPage(e, room.roomId)}
              />
            ))}
          </>
        ) : (
          <NoRoomMessage>
            공개된 토론 방이 없습니다!
            <br />
            방을 생성하여 함께 토론해보세요!
          </NoRoomMessage>
        )}
      </PublicRoomDiv>
    </PublicRoom>
  );
}
