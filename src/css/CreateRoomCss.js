import styled from "styled-components";

export const CreateRoomForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1.25vw;
  position: relative;
  width: 80vw;
  margin: 4vh 0 0 22vw;
  z-index: 6;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  gap: 1.25vw;
  position: relative;
  width: 95%;
  margin-top: 5vh;
  z-index: 9;
`;

export const StyledInput = styled.input`
  width: 95%;
  padding: 0.5vw;
  margin: 0.5vw 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.4vw;
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 0.1vw rgba(74, 144, 226, 0.5);
  }
`;

export const StyledTextArea = styled.textarea`
  width: 95%;
  height: 20vh;
  padding: 1vw;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.4vw;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 0.2vw rgba(74, 144, 226, 0.5);
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 0.5vw 0;
  font-weight: bold;
`;

export const MarkdownPreview = styled.div`
  width: 95%;
  border: 1px solid #ccc;
  padding: 2vw;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.4vw;
  margin: 0.5vw 0;
`;
