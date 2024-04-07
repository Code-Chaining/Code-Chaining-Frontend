import styled from "styled-components";

export const CommentsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.4vw 4vw 0 0;
`;

export const CommentItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.4vh;
  padding: 2px;
`;

export const ProfileImage = styled.img`
  width: 4vw;
  border-radius: 50%;
  margin-right: 1vw;
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterAndDate = styled.div`
  display: flex;
  align-items: center;
`;

export const Writer = styled.div`
  font-weight: bold;
`;

export const Date = styled.div`
  padding-left: 0.5vw;
  font-size: 0.8rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.4vw;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 0.2vh 0vw;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: #ffffff;

  color: ${(props) => (props.$variant === "delete" ? "#E90000" : "#000000")};
  font-weight: ${(props) => (props.$variant === "save" ? "bold" : "")};
  &:hover {
    opacity: 0.8;
  }
`;

export const CommentInput = styled.textarea`
  width: 50vw;
  height: 20vh;
  padding: 0.2vw 0.2vh;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 0.1vw rgba(74, 144, 226, 0.5);
  }
`;

export const CommentContents = styled.div`
  white-space: pre-wrap;
`;

export const NoCommentsMessage = styled.div`
  color: #979797;
  text-align: center;
  font-family: "Pretendard-Regular", Helvetica;
  margin: 1vh 0;
  opacity: 0.8;
  font-size: 1.05rem;
  font-weight: bold;
`;
