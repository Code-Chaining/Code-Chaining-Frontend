import { useEffect, useState } from "react";
import { CommentForm, ProfileImage } from "../css/CommentInputSectionCss";
import {
  Button,
  ButtonContainer,
  CommentContent,
  CommentItem,
  CommentsFormContainer,
  WriterAndDate,
  Writer,
  Date,
  CommentInput,
  NoCommentsMessage,
} from "../css/CommentsContainerCss";
import WriteAndPreviewInputButton from "./WriteAndPreviewInputButton";
import { MarkdownPreview } from "../css/CreateRoomCss";
import renderMarkdown from "../utils/renderMarkdown";

export default function CommentsContainer({
  onUpdate,
  onDelete,
  comments,
  isCommentEditing,
  editingCommentId,
  editedContents,
  onEdit,
  onCancel,
  onUpdateContents,
  isLoggedIn,
  userInfo,
}) {
  const [isInput, setIsInput] = useState(true);
  const [textareaHeight, setTextareaHeight] = useState("auto");

  useEffect(() => {
    if (isInput) {
      const textarea = document.querySelector('textarea[name="comment"]');
      if (textarea) {
        const event = { target: textarea };
        autoResizeTextarea(event);
      }
    }
  }, []);
  // 이 배열안에 isInput이 있냐 없냐에 따라 자동 조절이 먹고 안먹고 함. 이유 검색해보기

  const autoResizeTextarea = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    const newHeight = `${textarea.scrollHeight}px`;
    textarea.style.height = newHeight;
    setTextareaHeight(newHeight);
  };

  return (
    <CommentsFormContainer>
      {comments.length > 0 ? (
        <>
          {comments.map((comment) => (
            <CommentItem key={comment.commentId}>
              <ProfileImage src={comment.picture} alt="Profile" />
              <CommentContent>
                <WriterAndDate>
                  <Writer>{comment.nickname}</Writer>
                  <Date>{comment.date}</Date>
                </WriterAndDate>

                {isCommentEditing && editingCommentId === comment.commentId ? (
                  <>
                    <WriteAndPreviewInputButton
                      onInput={() => setIsInput(true)}
                      onPreview={() => setIsInput(false)}
                      isInput={isInput}
                    ></WriteAndPreviewInputButton>
                    <CommentForm>
                      {isInput ? (
                        <>
                          <CommentInput
                            type="text"
                            name="comment"
                            placeholder="댓글을 입력하세요. (Markdown을 지원합니다.)"
                            value={editedContents}
                            style={{ height: textareaHeight }}
                            onChange={(e) => {
                              onUpdateContents(e);
                              autoResizeTextarea(e);
                            }}
                          />
                        </>
                      ) : (
                        <MarkdownPreview size="small">
                          {renderMarkdown(editedContents)}
                        </MarkdownPreview>
                      )}
                    </CommentForm>
                  </>
                ) : (
                  <MarkdownPreview size="small">
                    {renderMarkdown(comment.contents)}
                  </MarkdownPreview>
                )}

                {isLoggedIn && userInfo.memberId === comment.memberId ? (
                  <>
                    {!isCommentEditing ||
                    editingCommentId !== comment.commentId ? (
                      <ButtonContainer $variant="not">
                        <Button
                          $variant="edit"
                          type="button"
                          onClick={() => onEdit(comment)}
                        >
                          수정
                        </Button>
                        <Button
                          $variant="delete"
                          type="button"
                          onClick={() => onDelete(comment.commentId)}
                        >
                          삭제
                        </Button>
                      </ButtonContainer>
                    ) : (
                      <ButtonContainer>
                        <Button
                          $variant="cancel"
                          type="button"
                          onClick={onCancel}
                        >
                          취소
                        </Button>
                        <Button
                          $variant="save"
                          type="submit"
                          onClick={() => onUpdate(editingCommentId)}
                        >
                          저장
                        </Button>
                      </ButtonContainer>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </CommentContent>
            </CommentItem>
          ))}
        </>
      ) : (
        <NoCommentsMessage>
          댓글이 없습니다!
          <br />
          댓글을 작성하여 함께 토론해보세요!
        </NoCommentsMessage>
      )}
    </CommentsFormContainer>
  );
}
