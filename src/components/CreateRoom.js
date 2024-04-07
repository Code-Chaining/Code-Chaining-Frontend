import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateRoomForm,
  ButtonContainer,
  StyledTextArea,
  StyledLabel,
  MarkdownPreview,
  CharacterCount,
} from "../css/CreateRoomCss";
import Button from "./Button";
import renderMarkdown from "../utils/renderMarkdown";
import RoomTitle from "./RoomTitle";
import { axiosInstance } from "../utils/apiConfig";

export default function CreateRoom() {
  const [title, setTitle] = useState("");
  const [codeAndContents, setCodeAndContents] = useState("");

  let navigate = useNavigate();

  function handleMainPage() {
    navigate("/");
  }

  const handleSave = async (e) => {
    e.preventDefault();

    if (title.length > 50) {
      alert("제목은 50자 이내로 입력해주세요.");
      return;
    }
    if (codeAndContents.length > 3000) {
      alert("내용은 3000자 이내로 입력해주세요.");
      return;
    }

    const roomData = {
      title: title,
      codeAndContents: codeAndContents,
    };

    try {
      await axiosInstance.post(`/room/`, roomData);

      alert("방이 성공적으로 생성되었습니다!");
      handleMainPage();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("제목 또는 내용을 입력하셔야합니다.");
      } else {
        alert("방 생성에 실패했습니다.");
      }
    }
  };

  const markdownContent = renderMarkdown(codeAndContents);

  return (
    <>
      <CreateRoomForm>
        <div>
          <RoomTitle title={title} setTitle={setTitle} />
          <CharacterCount>({title.length}/50)</CharacterCount>
        </div>

        <div>
          <StyledLabel htmlFor="codeAndContents">
            코드 & 내용 (Markdown을 지원합니다.)
          </StyledLabel>
          <StyledTextArea
            id="codeAndContents"
            placeholder="코드 & 내용을 입력하세요. (Markdown을 지원합니다.)"
            value={codeAndContents}
            onChange={(e) => setCodeAndContents(e.target.value)}
            maxLength={3000}
          />
          <CharacterCount>({codeAndContents.length}/3000)</CharacterCount>
        </div>
        <div>
          <StyledLabel>미리보기</StyledLabel>
          <MarkdownPreview>{markdownContent}</MarkdownPreview>
        </div>
        <ButtonContainer>
          <Button $variant="cancel" type="button" onClick={handleMainPage}>
            취소
          </Button>
          <Button $variant="save" type="submit" onClick={handleSave}>
            저장
          </Button>
        </ButtonContainer>
      </CreateRoomForm>
    </>
  );
}
