import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  StyledLabel,
  MarkdownPreview,
  ButtonContainer,
  StyledTextArea,
} from "../css/CreateRoomCss";
import { RoomDetailsContainer, Divider } from "../css/RoomDetailsCss";

import Button from "./Button";
import RoomTitle from "./RoomTitle";
import renderMarkdown from "../utils/renderMarkdown";

import logoImage from "../assets/Logo.png";

import { comments } from "../data";
import axios from "axios";
import DiscussionContainer from "./DiscussionContainer";

export default function RoomDetails() {
  let { roomId } = useParams();
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const [isEditing, setIsEditing] = useState(false);
  const [roomInfo, setRoomInfo] = useState({
    title: "",
    codeAndContents: "",
    date: "",
  });

  useEffect(() => {
    const fetchRoomInfo = async () => {
      try {
        const response = await axios.get(
          `${apiBaseUrl}/room/info?roomId=${roomId}`
        );
        const { title, codeAndContents, date } = response.data.data;
        setRoomInfo({
          title,
          codeAndContents,
          date,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoomInfo();
  }, [apiBaseUrl, roomId]);

  const handleEdit = () => {
    // 수정 true, false -> 서버에서 room의 작성자와 memberId 같은지 구별해서 버튼 온오프
    setIsEditing(true);
  };

  const updateRoomInfo = (field, value) => {
    setRoomInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdateSave = async () => {
    try {
      await axios.put(`${apiBaseUrl}/room/${roomId}`, {
        title: roomInfo.title,
        codeAndContents: roomInfo.codeAndContents,
      });

      alert("방이 성공적으로 수정되었습니다!");
    } catch (error) {
      alert("수정에 실패했습니다.");
    }

    setIsEditing(false);
  };

  const handleDelete = () => {
    // 서버에서 delete api 호출 -> main화면으로 이동
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSubmitComment = (comment) => {
    // 댓글 저장하는 API 호출 로직 구현
    console.log(comment);
  };

  const markdownContent = renderMarkdown(roomInfo.codeAndContents);

  return (
    <>
      {!isEditing ? (
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
          <Button $variant="save" type="submit" onClick={handleUpdateSave}>
            저장
          </Button>
        </ButtonContainer>
      )}
      <RoomDetailsContainer>
        <RoomTitle
          isEditing={isEditing}
          title={roomInfo.title}
          setTitle={(value) => updateRoomInfo("title", value)}
        />

        <div>
          {!isEditing ? (
            <>
              <StyledLabel>코드 & 내용</StyledLabel>
              <MarkdownPreview>{markdownContent}</MarkdownPreview>
            </>
          ) : (
            <>
              <StyledLabel>
                코드 & 내용을 입력하세요. (Markdown을 지원합니다.)
              </StyledLabel>
              <StyledTextArea
                id="codeAndContents"
                placeholder="코드 & 내용을 입력하세요. (Markdown을 지원합니다.)"
                value={roomInfo.codeAndContents}
                onChange={(e) =>
                  updateRoomInfo("codeAndContents", e.target.value)
                }
              />
              <StyledLabel>미리보기</StyledLabel>
              <MarkdownPreview>{markdownContent}</MarkdownPreview>
            </>
          )}
        </div>
        <Divider />

        {/* 토론의 장 */}
        <DiscussionContainer
          profileImageUrl={logoImage}
          onSubmit={handleSubmitComment}
          comments={comments}
        />
      </RoomDetailsContainer>
    </>
  );
}
