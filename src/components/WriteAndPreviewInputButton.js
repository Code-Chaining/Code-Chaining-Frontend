import styled from "styled-components";

export default function WriteAndPreviewInputButton({
  onInput,
  onPreview,
  isInput,
}) {
  return (
    <div>
      <StyledInputButton onClick={onInput} $isActive={isInput}>
        Write
      </StyledInputButton>
      <StyledInputButton onClick={onPreview} $isActive={!isInput}>
        Preview
      </StyledInputButton>
    </div>
  );
}

const StyledInputButton = styled.button`
  width: 10%;
  height: 3vh;
  background-color: ${(props) => (props.$isActive ? "#434343" : "#ffffff")};
  color: ${(props) => (props.$isActive ? "#ffffff" : "#434343")};

  border: 1px solid #434343;
  border-top-left-radius: 0.3vw;
  border-top-right-radius: 0.3vw;

  &:hover {
    color: ${(props) => (props.$isActive ? "" : "#000000")};
  }
`;
