import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledLabel,
  MarkdownPreview,
  ButtonContainer,
  StyledTextArea,
} from "../css/CreateRoomCss";
import { RoomDetailsContainer, Divider } from "../css/RoomDetailsCss";

import Button from "./Button";
import RoomTitle from "./RoomTitle";
import DiscussionContainer from "./DiscussionContainer";
import renderMarkdown from "../utils/renderMarkdown";
import { axiosInstance } from "../utils/apiConfig";

import { useAuth } from "../contexts/AuthContext";

export default function RoomDetails() {
  let { roomId } = useParams();

  const { isLoggedIn, userInfo } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [comments, setComments] = useState([]);
  const [roomInfo, setRoomInfo] = useState({
    title: "",
    codeAndContents: "",
    date: "",
    memberId: "",
  });

  let navigate = useNavigate();
  function handleMainPage() {
    navigate("/");
  }

  useEffect(() => {
    const fetchRoomInfo = async () => {
      try {
        const response = await axiosInstance.get(`/room/${roomId}`);
        const { title, codeAndContents, date, memberId } = response.data.data;
        setRoomInfo({
          title,
          codeAndContents,
          date,
          memberId,
        });
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCommentList = async () => {
      try {
        const response = await axiosInstance.get(`/comment/${roomId}`);
        const commentsData = response.data.data.commentList.map((comment) => ({
          commentId: comment.commentId,
          memberId: comment.memberId,
          nickname: comment.nickname,
          picture: comment.picture,
          contents: comment.contents,
        }));
        setComments(commentsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoomInfo();
    fetchCommentList();
  }, [roomId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const updateRoomInfo = (field, value) => {
    setRoomInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdateSave = async () => {
    try {
      await axiosInstance.put(`/room/${roomId}`, {
        title: roomInfo.title,
        codeAndContents: roomInfo.codeAndContents,
      });

      alert("방이 성공적으로 수정되었습니다!");
    } catch (error) {
      alert("수정에 실패했습니다.");
    }

    setIsEditing(false);
  };

  const handleDelete = async () => {
    const isConfirmed = window.confirm("정말로 방을 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        await axiosInstance.delete(`/room/${roomId}`);

        alert("방을 삭제하는데 성공했습니다!");
        handleMainPage();
        window.location.reload();
      } catch (error) {
        alert("방을 삭제하는데 실패했습니다..");
      }
    } else {
      alert("방 삭제가 취소되었습니다.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSubmitComment = async (comment) => {
    const commentData = {
      roomId: roomId,
      contents: comment,
    };

    try {
      await axiosInstance.post(`/comment/`, commentData);

      alert("댓글이 작성되었습니다.");
      window.location.reload();
    } catch (error) {
      alert("댓글 작성에 실패했습니다.");
    }
  };

  const markdownContent = renderMarkdown(roomInfo.codeAndContents);

  return (
    <RoomDetailsContainer>
      {isLoggedIn && userInfo.memberId === roomInfo.memberId ? (
        <>
          {!isEditing ? (
            <ButtonContainer>
              <Button $variant="edit" type="button" onClick={handleEdit}>
                수정
              </Button>
              <Button $variant="delete" type="button" onClick={handleDelete}>
                삭제
              </Button>
            </ButtonContainer>
          ) : (
            <ButtonContainer>
              <Button $variant="cancel" type="button" onClick={handleCancel}>
                취소
              </Button>
              <Button $variant="save" type="submit" onClick={handleUpdateSave}>
                저장
              </Button>
            </ButtonContainer>
          )}
        </>
      ) : (
        <></>
      )}

      <StyledLabel>{roomInfo.date}</StyledLabel>
      <RoomTitle
        isEditing={isEditing}
        title={roomInfo.title}
        setTitle={(value) => updateRoomInfo("title", value)}
      />

      <div>
        {!isEditing ? (
          <>
            <StyledLabel>코드 & 내용</StyledLabel>
            <MarkdownPreview>{markdownContent}</MarkdownPreview>
          </>
        ) : (
          <>
            <StyledLabel>
              코드 & 내용을 입력하세요. (Markdown을 지원합니다.)
            </StyledLabel>
            <StyledTextArea
              id="codeAndContents"
              placeholder="코드 & 내용을 입력하세요. (Markdown을 지원합니다.)"
              value={roomInfo.codeAndContents}
              onChange={(e) =>
                updateRoomInfo("codeAndContents", e.target.value)
              }
            />
            <StyledLabel>미리보기</StyledLabel>
            <MarkdownPreview>{markdownContent}</MarkdownPreview>
          </>
        )}
      </div>
      <Divider />

      {/* 토론의 장 */}
      <DiscussionContainer
        profileImageUrl={userInfo.picture}
        onSubmit={handleSubmitComment}
        comments={comments}
        isLoggedIn={isLoggedIn}
        userInfo={userInfo}
      />
    </RoomDetailsContainer>
  );
}
