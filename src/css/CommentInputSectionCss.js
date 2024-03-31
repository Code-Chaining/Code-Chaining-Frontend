import styled from "styled-components";

export const CommentInputFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2.2vh;
`;

export const ProfileImage = styled.img`
  width: 4vw;
  border-radius: 50%;
  margin-right: 1vw;
`;

export const CommentForm = styled.form`
  flex-grow: 1;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 0.8vw;
  border: none;
  border-radius: 0.4vw;
  &:focus {
    outline: none;
  }
`;

export const Divider = styled.div`
  border-bottom: 0.1vw solid #ccc;
  margin: 0 4vw 0 5vw;
`;
