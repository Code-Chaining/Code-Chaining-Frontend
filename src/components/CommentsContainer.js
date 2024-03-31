import styled from "styled-components";
import logoImage from "../assets/Logo.png";

const CommentsFormContainer = styled.div`
  display: block;
  margin: 1.4vw 4vw 0 0;
`;

const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1vw 0;
`;

const ProfileImage = styled.img`
  width: 4vw;
  border-radius: 50%;
  margin-right: 1vw;
`;

const CommentContent = styled.div`
  flex: 1;
  font-size: 1.3vw;
`;

export default function CommentsContainer({ comments }) {
  return (
    <CommentsFormContainer>
      {comments.map((comment) => (
        <CommentItem key={comment.commentId}>
          <ProfileImage src={logoImage} alt="Profile" />
          <CommentContent>
            <div>{comment.author}</div>
            <div>{comment.text}</div>
          </CommentContent>
        </CommentItem>
      ))}
    </CommentsFormContainer>
  );
}
