import {
  CommentForm,
  CommentInputFormContainer,
  CommentInput,
  ProfileImage,
  Divider,
} from "../css/CommentInputSectionCss";

const CommentInputContainer = ({ profileImageUrl, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    onSubmit(comment);
    event.target.reset(); // 폼 초기화
  };

  return (
    <div>
      <CommentInputFormContainer>
        <ProfileImage src={profileImageUrl} alt="Profile" />
        <CommentForm onSubmit={handleSubmit}>
          <CommentInput
            type="text"
            name="comment"
            placeholder="댓글을 입력하세요."
          />
        </CommentForm>
      </CommentInputFormContainer>
      <Divider />
    </div>
  );
};

export default CommentInputContainer;
