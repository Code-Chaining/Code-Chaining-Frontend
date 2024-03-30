import React from "react";
import { SidebarContainer, FlexContainer } from "../css/RoomSidebarCss";

import MyRoomList from "./MyRoomList";
import CreateRoomButton from "./CreateRoomButton";

export default function RoomSidebar() {
  return (
    <>
      <SidebarContainer>
        <FlexContainer>
          <CreateRoomButton />
          <MyRoomList />
        </FlexContainer>
      </SidebarContainer>
    </>
  );
}
