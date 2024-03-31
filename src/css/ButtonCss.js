import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => {
    if (props.size === "large") return "35vw";
    if (
      props.$variant === "cancel" ||
      props.$variant === "save" ||
      props.$variant === "edit" ||
      props.$variant === "delete"
    )
      return "10vw";
    return "auto";
  }};
  height: ${(props) => (props.size === "large" ? "7vh" : "auto")};
  margin: ${(props) => (props.size === "large" ? "1vh 1vw" : "")};
  padding: ${(props) => (props.size === "large" ? "" : "1vh")};
  font-size: ${(props) => (props.size === "large" ? "0.75vw" : "1rem")};
  @media (min-width: 768px) {
    font-size: ${(props) => (props.size === "large" ? "1vw" : "1rem")};
  }

  border-radius: 0.375rem;
  background-color: ${(props) => (props.$isActive ? "#434343" : "#ffffff")};
  color: ${(props) => (props.$isActive ? "#ffffff" : "#000000")};
  border: ${(props) => {
    if (props.$variant === "cancel") return "none";
    if (props.$variant === "delete") return "2px solid #E90000";
    return "2px solid #dedede";
  }};

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
  margin: 0.66vh 0 0 0.3vw;
  color: #000000;
  font-family: Pretendard, var(--default-font-family);
  font-size: ${(props) => (props.size === "large" ? "1.3vw" : "1vw")};
  font-weight: 700;
  line-height: 3vh;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 11;
`;

export const NameAndCommentContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 7.33vw;
  height: 1.47vh;
  margin: ${(props) =>
    props.size === "large" ? "0 0 1vh 0.3vw" : "0 0 1vh 0"};
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
  color: #000000;
  font-family: Pretendard, var(--default-font-family);
  font-size: 0.9vw;
  font-weight: 400;
  line-height: 1.47vh;
  background-size: cover;
  z-index: 13;
  opacity: 0.5;
`;

export const Image = styled.img`
  width: 0.9vw;
  margin-left: 0.2vw;
  opacity: 0.5;
`;
