import styled from "styled-components";

export const CommentInputFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ProfileImage = styled.img`
  width: 4vw;
  border-radius: 50%;
  margin-right: 1vw;
`;

export const InputButtonCommentForm = styled.div`
  width: 80vw;
`;

export const CommentForm = styled.form`
  flex-grow: 1;
  width: 68vw;
  display: flex;
  flex-direction: column;
  border: 1px solid #434343;
  border-top-right-radius: 0.5vw;
  border-bottom-left-radius: 0.5vw;
  border-bottom-right-radius: 0.5vw;
  background-color: #434343;
  padding: 0.5vw;
  padding-top: 1.5vh;
  margin-right: 4vw;
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

export const Divider = styled.div`
  border-bottom: 0.1vw solid #ccc;
  margin: 0 4vw 0 0;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 6vw;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  border-radius: 0.4vw;
  border: 1px solid #434343;
  padding: 0.2vw;
  margin: 0.6vh 0.1vw 0 0;
  background-color: #ffffff;
  &:hover {
    background-color: #838383;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #434343;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }
`;
