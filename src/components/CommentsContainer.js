import { useState } from "react";
import { ProfileImage } from "../css/CommentInputSectionCss";
import {
  Button,
  ButtonContainer,
  CommentContent,
  CommentItem,
  CommentsFormContainer,
  Writer,
  CommentInput,
  CommentContents,
} from "../css/CommentsContainerCss";
import { axiosInstance } from "../utils/apiConfig";

export default function CommentsContainer({ comments, isLoggedIn, userInfo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContents, setEditedContents] = useState("");

  const handleEdit = (comment) => {
    setIsEditing(true);
    setEditingCommentId(comment.commentId);
    setEditedContents(comment.contents);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleUpdateSave = async () => {
    try {
      await axiosInstance.put(`/comment/${editingCommentId}`, {
        contents: editedContents,
      });

      alert("댓글 수정에 성공했습니다!");
    } catch (error) {
      alert("댓글 수정에 실패했습니다!");
    }
    setIsEditing(false);
    window.location.reload();
  };

  const handleDelete = async (commentId) => {
    const isConfirmed = window.confirm("정말로 댓글을 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        await axiosInstance.delete(`/comment/${commentId}`);

        alert("댓글을 삭제하는데 성공했습니다!");
        window.location.reload();
      } catch (error) {
        alert("댓글을 삭제하는데 실패했습니다..");
      }
    } else {
      alert("댓글 삭제가 취소되었습니다.");
    }
  };

  return (
    <CommentsFormContainer>
      {comments.map((comment) => (
        <CommentItem key={comment.commentId}>
          <ProfileImage src={comment.picture} alt="Profile" />
          <CommentContent>
            <Writer>{comment.nickname}</Writer>
            {isEditing && editingCommentId === comment.commentId ? (
              <div>
                <CommentInput
                  type="text"
                  placeholder="댓글을 입력하세요."
                  value={editedContents}
                  onChange={(e) => setEditedContents(e.target.value)}
                />
              </div>
            ) : (
              <CommentContents>{comment.contents}</CommentContents>
            )}

            {isLoggedIn && userInfo.memberId === comment.memberId ? (
              <>
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
                    <Button
                      $variant="cancel"
                      type="button"
                      onClick={handleCancel}
                    >
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
          </CommentContent>
        </CommentItem>
      ))}
    </CommentsFormContainer>
  );
}
