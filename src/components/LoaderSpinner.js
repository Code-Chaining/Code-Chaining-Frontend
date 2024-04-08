import { SyncLoader } from "react-spinners";
import styled from "styled-components";

export default function LoaderSpinner() {
  return (
    <CenteredDiv>
      <h3>잠시만 기다려주세요!</h3>
      <SyncLoader />
    </CenteredDiv>
  );
}

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
