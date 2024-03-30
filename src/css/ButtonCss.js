import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props.size === "large" ? "35vw" : "auto")};
  height: ${(props) => (props.size === "large" ? "7vh" : "auto")};
  margin: ${(props) => (props.size === "large" ? "1vh 1vw" : "")};
  padding: ${(props) => (props.size === "large" ? "" : "1vh")};
  font-size: ${(props) => (props.size === "large" ? "0.75vw" : "1rem")};
  @media (min-width: 768px) {
    font-size: ${(props) => (props.size === "large" ? "1vw" : "1rem")};
  }

  border-radius: 0.375rem;
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #dedede;

  cursor: pointer;
  &:hover {
    background-color: #434343;
    color: #ffffff;
  }
`;

export const Title = styled.span`
  display: block;
  position: relative;
  height: 3.5vh;
  margin: 0.66vh 0 0 0.6vw;
  color: #000000;
  font-family: Pretendard, var(--default-font-family);
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 3vh;
  text-align: left;
  white-space: nowrap;
  z-index: 11;
`;

export const NameAndCommentContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 7.33vw;
  height: 1.47vh;
  margin: 0 0 1vh 0.6vw;
  z-index: 13;
`;

export const Name = styled.span`
  flex-shrink: 0;
  position: relative;
  height: 1.47vh;
  color: #000000;
  font-family: Pretendard, var(--default-font-family);
  font-size: 1vw;
  font-weight: 400;
  line-height: 1.47vh;
  text-align: left;
  white-space: nowrap;
  z-index: 12;
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Comment = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 1vw;
  height: 1.47vh;
  font-family: Pretendard, var(--default-font-family);
  font-size: 1.2vw;
  font-weight: 400;
  line-height: 1.47vh;
  background-size: cover;
  z-index: 13;
`;

export const Image = styled.img`
  width: 1.2vw;
  height: 1.8vh;
  margin-left: 0.4vw;
`;
