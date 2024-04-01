import { StyledLabel } from "../css/CreateRoomCss";
import CommentInputContainer from "./CommentInputContainer";
import CommentsContainer from "./CommentsContainer";

export default function DiscussionContainer({
  profileImageUrl,
  onSubmit,
  comments,
}) {
  return (
    <div>
      <StyledLabel>토론의 장</StyledLabel>
      <CommentInputContainer
        profileImageUrl={profileImageUrl} // 프로필 이미지 URL
        onSubmit={onSubmit} // 댓글 제출 처리 함수 -> 댓글 저장하는 api로 변경
      />
      {/* 댓글 불러오기 */}
      <CommentsContainer comments={comments} />
    </div>
  );
}
