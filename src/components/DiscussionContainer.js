import { StyledLabel } from "../css/CreateRoomCss";
import CommentInputContainer from "./CommentInputContainer";
import CommentsContainer from "./CommentsContainer";

export default function DiscussionContainer({
  onSubmit,
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
    <>
      <StyledLabel>토론의 장</StyledLabel>
      {isLoggedIn ? (
        <CommentInputContainer
          profileImageUrl={userInfo.picture}
          onSubmit={onSubmit}
        />
      ) : (
        <></>
      )}

      <CommentsContainer
        onUpdate={onUpdate}
        onDelete={onDelete}
        comments={comments}
        isCommentEditing={isCommentEditing}
        editingCommentId={editingCommentId}
        editedContents={editedContents}
        onEdit={onEdit}
        onCancel={onCancel}
        onUpdateContents={onUpdateContents}
        isLoggedIn={isLoggedIn}
        userInfo={userInfo}
      />
    </>
  );
}
