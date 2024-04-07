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
  return (
    <CommentsFormContainer>
      {comments.map((comment) => (
        <CommentItem key={comment.commentId}>
          <ProfileImage src={comment.picture} alt="Profile" />
          <CommentContent>
            <Writer>{comment.nickname}</Writer>
            {isCommentEditing && editingCommentId === comment.commentId ? (
              <div>
                <CommentInput
                  type="text"
                  placeholder="댓글을 입력하세요."
                  value={editedContents}
                  onChange={(e) => onUpdateContents(e)}
                />
              </div>
            ) : (
              <CommentContents>{comment.contents}</CommentContents>
            )}

            {isLoggedIn && userInfo.memberId === comment.memberId ? (
              <>
                {!isCommentEditing || editingCommentId !== comment.commentId ? (
                  <ButtonContainer>
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
                      onClick={() => onCancel()}
                    >
                      취소
                    </Button>
                    <Button
                      $variant="save"
                      type="submit"
                      onClick={() => onUpdate(editingCommentId, editedContents)}
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
