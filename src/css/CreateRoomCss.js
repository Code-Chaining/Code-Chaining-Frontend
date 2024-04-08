import styled from "styled-components";

export const CreateRoomForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1.25vw;
  position: relative;
  width: 80vw;
  height: 90vh;
  margin: 4vh 0 0 22vw;
  z-index: 6;
  overflow: scroll;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  gap: 1.25vw;
  position: relative;
  margin-right: 4vw;
  // margin-top: 5vh;
  // padding-bottom: 5vh;
  z-index: 9;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #434343;
  border-top-right-radius: 0.5vw;
  border-bottom-left-radius: 0.5vw;
  border-bottom-right-radius: 0.5vw;
  background-color: #434343;
  padding: 1vw;
  padding-top: 2vh;
  margin-right: 4vw;
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
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.5);
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 20vh;
  padding: 1vw;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.4vw;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.5);
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 1vw 0;
  font-weight: bold;
  font-size: 1.4rem;
`;

export const MarkdownPreview = styled.div`
  width: ${(props) => (props.size === "small" ? "68vw" : "74vw")};
  height: auto;
  border: 1px solid #ccc;
  padding: 2vw;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 0.4vw;
`;

export const CharacterCount = styled.div`
  color: #ffffff;
  font-size: 1vw;
`;
