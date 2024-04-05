import { StyledLabel } from "../css/CreateRoomCss";
import CommentInputContainer from "./CommentInputContainer";
import CommentsContainer from "./CommentsContainer";

export default function DiscussionContainer({
  profileImageUrl,
  onSubmit,
  comments,
  isLoggedIn,
  userInfo,
}) {
  return (
    <>
      <StyledLabel>토론의 장</StyledLabel>
      {isLoggedIn ? (
        <CommentInputContainer
          profileImageUrl={profileImageUrl}
          onSubmit={onSubmit}
        />
      ) : (
        <></>
      )}

      <CommentsContainer
        comments={comments}
        isLoggedIn={isLoggedIn}
        userInfo={userInfo}
      />
    </>
  );
}
