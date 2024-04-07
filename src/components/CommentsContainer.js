import { ProfileImage } from "../css/CommentInputSectionCss";
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
  CommentContents,
  NoCommentsMessage,
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
                    {!isCommentEditing ||
                    editingCommentId !== comment.commentId ? (
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
                          onClick={() =>
                            onUpdate(editingCommentId, editedContents)
                          }
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
