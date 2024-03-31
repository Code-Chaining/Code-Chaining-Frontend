import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateRoomForm,
  ButtonContainer,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  MarkdownPreview,
} from "../css/CreateRoomCss";
import Button from "./Button";
import renderMarkdown from "../utils/renderMarkdown";
import RoomTitle from "./RoomTitle";

export default function CreateRoom() {
  const [title, setTitle] = useState("");
  const [codeAndContents, setCodeAndContents] = useState("");

  let navigate = useNavigate();

  function handleMainPage() {
    navigate("/");
  }

  const handleSave = (e) => {
    e.preventDefault();

    console.log(title, codeAndContents);

    handleMainPage();
  };

  const markdownContent = renderMarkdown(codeAndContents);

  return (
    <>
      <CreateRoomForm>
        <RoomTitle title={title} setTitle={setTitle} />

        <div>
          <StyledLabel htmlFor="codeAndContents">
            코드 & 내용 (Markdown을 지원합니다.)
          </StyledLabel>
          <StyledTextArea
            id="codeAndContents"
            placeholder="코드 & 내용을 입력하세요. (Markdown을 지원합니다.)"
            value={codeAndContents}
            onChange={(e) => setCodeAndContents(e.target.value)}
          />
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
