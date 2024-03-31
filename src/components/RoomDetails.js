import { useState } from "react";
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
import CommentInputContainer from "./CommentInputContainer";

import logoImage from "../assets/Logo.png";
import CommentsContainer from "./CommentsContainer";

import { comments } from "../data";

export default function RoomDetails() {
  let { roomId } = useParams();

  const [title, setTitle] = useState("");
  const [codeAndContents, setCodeAndContents] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    // 수정 true, false -> 서버에서 room의 작성자와 memberId 같은지 구별해서 버튼 온오프
    setIsEditing(true);
  };

  const handleUpdateSave = () => {
    // 서버에서 update api 호출
    setIsEditing(false);
  };

  const handleDelete = () => {
    // 서버에서 delete api 호출 -> main화면으로 이동
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const markdownContent = renderMarkdown(codeAndContents);

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
        <RoomTitle isEditing={isEditing} title={title} setTitle={setTitle} />

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
                value={codeAndContents}
                onChange={(e) => setCodeAndContents(e.target.value)}
              />
              <StyledLabel>미리보기</StyledLabel>
              <MarkdownPreview>{markdownContent}</MarkdownPreview>
            </>
          )}
        </div>

        {/* 토론의 장 */}
        <div>
          <Divider />
          <StyledLabel>토론의 장</StyledLabel>
          <CommentInputContainer
            profileImageUrl={logoImage} // 프로필 이미지 URL
            onSubmit={(comment) => console.log(comment)} // 댓글 제출 처리 함수 -> 댓글 저장하는 api로 변경
          />
          {/* 댓글 불러오기 */}
          <CommentsContainer comments={comments} />
        </div>
      </RoomDetailsContainer>
    </>
  );
}
