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
  padding: 2px 2px 2px 0;
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
  justify-content: flex-end;
  gap: 0.4vw;
  margin-top: 10px;
  margin-right: ${(props) => (props.$variant === "not" ? "" : "5vw")};
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
  width: 65.6vw;
  height: 10vh;
  padding: 1vw;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border-radius: 0.4vw;
  font-size: 1.1vw;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.5);
  }
`;

export const CommentContents = styled.div`
  white-space: pre-wrap;
  max-width: 69vw;
  width: 69vw;
  overflow-wrap: break-word;

  // border: 1px solid #000000;
  // border-radius: 4px;
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
