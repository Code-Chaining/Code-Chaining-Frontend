import {
  PublicRoom,
  PublicRoomSpan,
  PublicRoomDiv,
} from "../css/PublicRoomListCss";

import Button from "./Button";

export default function PublicRoomList() {
  return (
    <PublicRoom>
      <PublicRoomSpan>공개 방</PublicRoomSpan>
      <PublicRoomDiv>
        {/* 서버에서 받아오는 데이터 리턴 */}
        <Button
          size="large"
          title="코드를 보며 이야기를 나눠요!"
          name="최기웅"
          commentCount="9"
        >
          타이틀
        </Button>
        <Button
          size="large"
          title="코드를 보며 이야기를 나눠요!"
          name="최기웅"
          commentCount="9"
        >
          타이틀
        </Button>
        <Button
          size="large"
          title="코드를 보며 이야기를 나눠요!"
          name="최기웅"
          commentCount="9"
        >
          타이틀
        </Button>
        <Button
          size="large"
          title="코드를 보며 이야기를 나눠요!"
          name="최기웅"
          commentCount="9"
        >
          타이틀
        </Button>
      </PublicRoomDiv>
    </PublicRoom>
  );
}
