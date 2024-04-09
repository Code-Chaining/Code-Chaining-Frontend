import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledLabel,
  MarkdownPreview,
  ButtonContainer,
  StyledTextArea,
  CharacterCount,
  TextAreaContainer,
} from "../css/CreateRoomCss";
import {
  RoomDetailsContainer,
  Divider,
  RoomInfoAndButtonContainer,
  RoomInfoContainer,
  Nickname,
  ProfileImage,
} from "../css/RoomDetailsCss";

import Button from "./Button";
import RoomTitle from "./RoomTitle";
import DiscussionContainer from "./DiscussionContainer";
import renderMarkdown from "../utils/renderMarkdown";
import { axiosInstance } from "../utils/apiConfig";

import { useAuth } from "../contexts/AuthContext";
import { useRooms } from "../contexts/RoomContext";
import { useLoading } from "../contexts/LoadingContext";
import LoaderSpinner from "./LoaderSpinner";
import WriteAndPreviewInputButton from "./WriteAndPreviewInputButton";

export default function RoomDetails() {
  let { roomId } = useParams();

  const { isLoggedIn, userInfo } = useAuth();
  const { removeRoomFromList } = useRooms();
  const { isLoading, setIsLoading } = useLoading();
  const [isRoomEditing, setIsRoomEditing] = useState(false);
  const [isInput, setIsInput] = useState(true);

  const [originalRoomInfo, setOriginalRoomInfo] = useState([]);

  const [roomInfo, setRoomInfo] = useState({
    title: "",
    codeAndContents: "",
    date: "",
    memberId: "",
    nickname: "",
    picture: "",
  });

  let navigate = useNavigate();
  function handleMainPage() {
    navigate("/");
  }

  useEffect(() => {
    const fetchRoomInfo = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(`/room/${roomId}`);
        const { title, codeAndContents, date, memberId, nickname, picture } =
          response.data.data;
        setRoomInfo({
          title,
          codeAndContents,
          date,
          memberId,
          nickname,
          picture,
        });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchRoomInfo();
  }, [roomId]);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  const handleEdit = () => {
    setOriginalRoomInfo(roomInfo);
    setIsRoomEditing(true);
  };

  const updateRoomInfo = (field, value) => {
    setRoomInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdateSave = async () => {
    if (roomInfo.title.length > 50) {
      alert("제목은 50자 이내로 입력해주세요.");
      return;
    }
    if (roomInfo.codeAndContents.length > 3000) {
      alert("내용은 3000자 이내로 입력해주세요.");
      return;
    }

    try {
      await axiosInstance.put(`/room/${roomId}`, {
        title: roomInfo.title,
        codeAndContents: roomInfo.codeAndContents,
      });

      alert("방이 성공적으로 수정되었습니다!");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("제목 또는 내용을 입력하셔야합니다.");
      } else {
        alert("수정에 실패했습니다.");
      }
    }

    setIsRoomEditing(false);
  };

  const handleDelete = async () => {
    const isConfirmed = window.confirm("정말로 방을 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        await axiosInstance.delete(`/room/${roomId}`);

        alert("방을 삭제하는데 성공했습니다!");
        removeRoomFromList();
        handleMainPage();
      } catch (error) {
        alert("방을 삭제하는데 실패했습니다..");
      }
    } else {
      alert("방 삭제가 취소되었습니다.");
    }
  };

  const handleCancel = () => {
    setRoomInfo(originalRoomInfo);
    setIsRoomEditing(false);
  };

  const markdownContent = renderMarkdown(roomInfo.codeAndContents);

  return (
    <RoomDetailsContainer>
      <RoomInfoAndButtonContainer>
        <RoomInfoContainer>
          <ProfileImage src={roomInfo.picture} alt="프로필 이미지" />
          <Nickname>{roomInfo.nickname}</Nickname>
        </RoomInfoContainer>
        {isLoggedIn && userInfo.memberId === roomInfo.memberId ? (
          <>
            {!isRoomEditing ? (
              <ButtonContainer>
                <Button $variant="edit" type="button" onClick={handleEdit}>
                  수정
                </Button>
                <Button $variant="delete" type="button" onClick={handleDelete}>
                  삭제
                </Button>
              </ButtonContainer>
            ) : (
              <ButtonContainer>
                <Button $variant="cancel" type="button" onClick={handleCancel}>
                  취소
                </Button>
                <Button
                  $variant="save"
                  type="submit"
                  onClick={handleUpdateSave}
                >
                  저장
                </Button>
              </ButtonContainer>
            )}
          </>
        ) : (
          <></>
        )}
      </RoomInfoAndButtonContainer>

      <StyledLabel>{roomInfo.date}</StyledLabel>
      <div>
        <RoomTitle
          isEditing={isRoomEditing}
          title={roomInfo.title}
          setTitle={(value) => updateRoomInfo("title", value)}
        />
        {isRoomEditing ? (
          <CharacterCount>({roomInfo.title.length}/50)</CharacterCount>
        ) : (
          <></>
        )}
      </div>

      <div>
        {!isRoomEditing ? (
          <>
            <StyledLabel>코드 & 내용</StyledLabel>
            <MarkdownPreview>{markdownContent}</MarkdownPreview>

            <Divider />
            <DiscussionContainer
              roomId={roomId}
              isLoggedIn={isLoggedIn}
              userInfo={userInfo}
            />
          </>
        ) : (
          <>
            {isInput ? (
              <div>
                <StyledLabel htmlFor="codeAndContents">
                  코드 & 내용 (Markdown을 지원합니다.)
                </StyledLabel>
                <WriteAndPreviewInputButton
                  onInput={() => setIsInput(true)}
                  onPreview={() => setIsInput(false)}
                  isInput={isInput}
                />
                <TextAreaContainer>
                  <StyledTextArea
                    id="codeAndContents"
                    placeholder="코드 & 내용을 입력하세요. (Markdown을 지원합니다.)"
                    value={roomInfo.codeAndContents}
                    onChange={(e) =>
                      updateRoomInfo("codeAndContents", e.target.value)
                    }
                    maxLength={3000}
                  />
                  <CharacterCount>
                    ({roomInfo.codeAndContents.length}/3000)
                  </CharacterCount>
                </TextAreaContainer>
              </div>
            ) : (
              <div>
                <StyledLabel>미리보기</StyledLabel>
                <WriteAndPreviewInputButton
                  onInput={() => setIsInput(true)}
                  onPreview={() => setIsInput(false)}
                  isInput={isInput}
                />
                <TextAreaContainer>
                  <MarkdownPreview>{markdownContent}</MarkdownPreview>
                </TextAreaContainer>
              </div>
            )}
          </>
        )}
      </div>
    </RoomDetailsContainer>
  );
}
