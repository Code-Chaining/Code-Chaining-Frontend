import {
  StyledButton,
  Title,
  NameAndCommentContainer,
  Name,
  CommentContainer,
  Image,
  Comment,
} from "../css/ButtonCss";
import CommentImage from "../assets/CommentImage.png";

export default function Button({ title, name, commentCount, ...props }) {
  return (
    <>
      {title !== undefined ? (
        <StyledButton {...props}>
          {title && <Title>{title}</Title>}
          {commentCount && (
            <NameAndCommentContainer>
              <Name>{name}</Name>
              <CommentContainer>
                <Image src={CommentImage} alt="이미지 설명" />
                <Comment>{commentCount}</Comment>
              </CommentContainer>
            </NameAndCommentContainer>
          )}
        </StyledButton>
      ) : (
        <StyledButton {...props}></StyledButton>
      )}
    </>
  );
}
