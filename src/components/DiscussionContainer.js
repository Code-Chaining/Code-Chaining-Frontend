import { StyledLabel } from "../css/CreateRoomCss";
import CommentInputContainer from "./CommentInputContainer";
import CommentsContainer from "./CommentsContainer";

export default function DiscussionContainer({
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
          profileImageUrl={userInfo.picture}
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
