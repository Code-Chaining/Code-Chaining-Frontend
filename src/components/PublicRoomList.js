import {
  PublicRoom,
  PublicRoomSpan,
  PublicRoomDiv,
  ScrapButtonAndSearchContainer,
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
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function PublicRoomList() {
  let navigate = useNavigate();

  const [isPublic, setIsPublic] = useState(true);

  const {
    publicRooms,
    publicFetchRooms,
    myScrapRooms,
    searchFilter,
    setSearchFilter,
  } = useRooms();
  const { setIsLoading } = useLoading();
  const { isLoggedIn } = useAuth();

  function handleRoomDetailPage(e, roomId) {
    e.stopPropagation();
    navigate(`/room/${roomId}`);
  }

  const handleSearchChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await publicFetchRooms(setIsLoading);
  };

  return (
    <PublicRoom>
      {isPublic ? (
        <PublicRoomSpan>공개 방</PublicRoomSpan>
      ) : (
        <PublicRoomSpan>내 저장된 토론 방</PublicRoomSpan>
      )}

      <ScrapButtonAndSearchContainer>
        {isLoggedIn ? (
          <>
            {isPublic ? (
              <>
                <Button type="button" onClick={() => setIsPublic(false)}>
                  내 저장된 토론 방
                </Button>

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
              </>
            ) : (
              <Button type="button" onClick={() => setIsPublic(true)}>
                공개 방
              </Button>
            )}
          </>
        ) : (
          <></>
        )}
      </ScrapButtonAndSearchContainer>

      <PublicRoomDiv>
        {isPublic ? (
          <>
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
          </>
        ) : (
          <>
            {myScrapRooms.length > 0 ? (
              <>
                {myScrapRooms.map((room) => (
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
                저장한 토론 방이 없습니다!
                <br />
                방을 저장하여 함께 토론해보세요!
              </NoRoomMessage>
            )}
          </>
        )}
      </PublicRoomDiv>
    </PublicRoom>
  );
}
