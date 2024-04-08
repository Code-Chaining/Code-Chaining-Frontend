import { useEffect, useState } from "react";
import {
  CommentInputFormContainer,
  CommentForm,
  InputButtonCommentForm,
  CommentInput,
  ProfileImage,
  SubmitButtonContainer,
  SubmitButton,
} from "../css/CommentInputSectionCss";
import WriteAndPreviewInputButton from "./WriteAndPreviewInputButton";
import renderMarkdown from "../utils/renderMarkdown";
import { MarkdownPreview } from "../css/CreateRoomCss";

const CommentInputContainer = ({ profileImageUrl, onSubmit }) => {
  const [comment, setComments] = useState("");
  const [isInput, setIsInput] = useState(true);
  const [textareaHeight, setTextareaHeight] = useState("auto");

  useEffect(() => {
    if (isInput) {
      const event = {
        target: document.querySelector('textarea[name="comment"]'),
      };
      autoResizeTextarea(event);
    }
  }, [isInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(comment);
    setComments("");
  };

  const autoResizeTextarea = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    const newHeight = `${textarea.scrollHeight}px`;
    textarea.style.height = newHeight;
    setTextareaHeight(newHeight);
  };

  const markdownComment = renderMarkdown(comment);

  return (
    <CommentInputFormContainer>
      <ProfileImage src={profileImageUrl} alt="Profile" />
      <InputButtonCommentForm>
        <WriteAndPreviewInputButton
          onInput={() => setIsInput(true)}
          onPreview={() => setIsInput(false)}
          isInput={isInput}
        />
        <CommentForm onSubmit={handleSubmit}>
          {isInput ? (
            <CommentInput
              type="text"
              name="comment"
              placeholder="댓글을 입력하세요. (Markdown을 지원합니다.)"
              value={comment}
              style={{ height: textareaHeight }}
              onChange={(e) => {
                setComments(e.target.value);
                autoResizeTextarea(e);
              }}
            />
          ) : (
            <MarkdownPreview size="small">{markdownComment}</MarkdownPreview>
          )}
          <SubmitButtonContainer>
            <SubmitButton type="submit">등록</SubmitButton>
          </SubmitButtonContainer>
        </CommentForm>
      </InputButtonCommentForm>
    </CommentInputFormContainer>
  );
};

export default CommentInputContainer;
