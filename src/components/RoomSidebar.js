import React from "react";
import {
  SidebarContainer,
  FlexContainer,
  Button,
  RoomList,
  RoomTitle,
} from "../css/RoomSidebarCss";

export default function RoomSidebar() {
  return (
    <>
      {/* 사이드 바 -> 분리 */}
      <SidebarContainer>
        <FlexContainer>
          <Button>+ CREATE ROOM</Button>
          <RoomList>
            <RoomTitle>MY ROOM</RoomTitle>
            {/* 버튼 컴포넌트 만들기 */}
            <button>1. TITLE</button>
            <button>2. TITLE</button>
            <button>3. TITLE</button>
          </RoomList>
        </FlexContainer>
      </SidebarContainer>
    </>
  );
}
