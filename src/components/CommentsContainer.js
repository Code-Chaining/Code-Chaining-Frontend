import { useState } from "react";
import logoImage from "../assets/Logo.png";
import { ProfileImage } from "../css/CommentInputSectionCss";
import {
  Button,
  ButtonContainer,
  CommentContent,
  CommentItem,
  CommentsFormContainer,
  Writer,
  CommentInput,
} from "../css/CommentsContainerCss";

export default function CommentsContainer({ comments }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedText, setEditedText] = useState(""); // 편집된 댓글의 내용을 저장할 상태

  // 댓글 수정 핸들러
  const handleEdit = (comment) => {
    setIsEditing(true);
    setEditingCommentId(comment.commentId);
    setEditedText(comment.text);
    // 여기에 댓글 수정 로직 구현
  };

  // 댓글 삭제 핸들러
  const handleDelete = (commentId) => {
    // 여기에 댓글 삭제 로직 구현
  };

  // 댓글 저장 핸들러
  const handleUpdateSave = () => {
    setIsEditing(false);
    // 여기에 댓글 저장 로직 구현
  };

  // 댓글 수정 취소 핸들러
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <CommentsFormContainer>
      {comments.map((comment) => (
        <CommentItem key={comment.commentId}>
          <ProfileImage src={logoImage} alt="Profile" />
          <CommentContent>
            <Writer>{comment.writer}</Writer>
            {isEditing && editingCommentId === comment.commentId ? (
              <div>
                <CommentInput
                  type="text"
                  placeholder="댓글을 입력하세요."
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
              </div>
            ) : (
              <div>{comment.text}</div>
            )}

            {!isEditing || editingCommentId !== comment.commentId ? (
              <ButtonContainer>
                <Button
                  $variant="edit"
                  type="button"
                  onClick={() => handleEdit(comment)}
                >
                  수정
                </Button>
                <Button
                  $variant="delete"
                  type="button"
                  onClick={() => handleDelete(comment.commentId)}
                >
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
          </CommentContent>
        </CommentItem>
      ))}
    </CommentsFormContainer>
  );
}
