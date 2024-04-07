import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StyledLabel,
  MarkdownPreview,
  ButtonContainer,
  StyledTextArea,
} from "../css/CreateRoomCss";
import {
  RoomDetailsContainer,
  Divider,
  RoomInfoAndButtonContainer,
  RoomInfoContainer,
  Nickname,
  ProfileImage,
} from "../css/RoomDetailsCss";

import Button from "./Button";
import RoomTitle from "./RoomTitle";
import DiscussionContainer from "./DiscussionContainer";
import renderMarkdown from "../utils/renderMarkdown";
import { axiosInstance } from "../utils/apiConfig";

import { useAuth } from "../contexts/AuthContext";
import { useRooms } from "../contexts/RoomContext";

export default function RoomDetails() {
  let { roomId } = useParams();

  const { isLoggedIn, userInfo } = useAuth();
  const { removeRoomFromList } = useRooms();
  const [isRoomEditing, setIsRoomEditing] = useState(false);

  const [comments, setComments] = useState([]);
  const [isCommentEditing, setIsCommentEditing] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContents, setEditedContents] = useState("");

  const [roomInfo, setRoomInfo] = useState({
    title: "",
    codeAndContents: "",
    date: "",
    memberId: "",
    nickname: "",
    picture: "",
  });

  let navigate = useNavigate();
  function handleMainPage() {
    navigate("/");
  }

  useEffect(() => {
    const fetchRoomInfo = async () => {
      try {
        const response = await axiosInstance.get(`/room/${roomId}`);
        const { title, codeAndContents, date, memberId, nickname, picture } =
          response.data.data;
        setRoomInfo({
          title,
          codeAndContents,
          date,
          memberId,
          nickname,
          picture,
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
    setIsRoomEditing(true);
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

    setIsRoomEditing(false);
  };

  const handleDelete = async () => {
    const isConfirmed = window.confirm("정말로 방을 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        await axiosInstance.delete(`/room/${roomId}`);

        alert("방을 삭제하는데 성공했습니다!");
        removeRoomFromList();
        handleMainPage();
      } catch (error) {
        alert("방을 삭제하는데 실패했습니다..");
      }
    } else {
      alert("방 삭제가 취소되었습니다.");
    }
  };

  const handleCancel = () => {
    setIsRoomEditing(false);
  };

  const handleSubmitComment = async (comment) => {
    const commentData = {
      roomId: roomId,
      contents: comment,
    };

    try {
      const response = await axiosInstance.post(`/comment/`, commentData);
      const newComment = response.data.data;

      setComments((prevComments) => [...prevComments, newComment]);
      alert("댓글이 작성되었습니다.");
    } catch (error) {
      alert("댓글 작성에 실패했습니다.");
    }
  };

  const handleCommentUpdateSave = async (commentId, editedContents) => {
    try {
      await axiosInstance.put(`/comment/${commentId}`, {
        contents: editedContents,
      });

      const updatedComments = comments.map((comment) => {
        if (comment.commentId === commentId) {
          return { ...comment, contents: editedContents };
        }
        return comment;
      });

      setComments(updatedComments);
      alert("댓글 수정에 성공했습니다!");
    } catch (error) {
      alert("댓글 수정에 실패했습니다!");
    }

    setIsCommentEditing(false);
  };

  const handleCommentDelete = async (commentId) => {
    const isConfirmed = window.confirm("정말로 댓글을 삭제하시겠습니까?");

    if (isConfirmed) {
      try {
        await axiosInstance.delete(`/comment/${commentId}`);

        const filteredComments = comments.filter(
          (comment) => comment.commentId !== commentId
        );
        setComments(filteredComments);
        alert("댓글을 삭제하는데 성공했습니다!");
      } catch (error) {
        alert("댓글을 삭제하는데 실패했습니다..");
      }
    } else {
      alert("댓글 삭제가 취소되었습니다.");
    }
  };

  const handleCommentEdit = (comment) => {
    setIsCommentEditing(true);
    setEditingCommentId(comment.commentId);
    setEditedContents(comment.contents);
  };

  const handleCommentCancel = () => {
    setIsCommentEditing(false);
  };

  const handleSetEditedContents = (e) => {
    setEditedContents(e.target.value);
  };

  const markdownContent = renderMarkdown(roomInfo.codeAndContents);

  return (
    <RoomDetailsContainer>
      <RoomInfoAndButtonContainer>
        <RoomInfoContainer>
          <ProfileImage src={roomInfo.picture} alt="프로필 이미지" />
          <Nickname>{roomInfo.nickname}</Nickname>
        </RoomInfoContainer>
        {isLoggedIn && userInfo.memberId === roomInfo.memberId ? (
          <>
            {!isRoomEditing ? (
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
                <Button
                  $variant="save"
                  type="submit"
                  onClick={handleUpdateSave}
                >
                  저장
                </Button>
              </ButtonContainer>
            )}
          </>
        ) : (
          <></>
        )}
      </RoomInfoAndButtonContainer>

      <StyledLabel>{roomInfo.date}</StyledLabel>
      <RoomTitle
        isEditing={isRoomEditing}
        title={roomInfo.title}
        setTitle={(value) => updateRoomInfo("title", value)}
      />

      <div>
        {!isRoomEditing ? (
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
        onSubmit={handleSubmitComment}
        onUpdate={handleCommentUpdateSave}
        onDelete={handleCommentDelete}
        comments={comments}
        isCommentEditing={isCommentEditing}
        editingCommentId={editingCommentId}
        editedContents={editedContents}
        onEdit={handleCommentEdit}
        onCancel={handleCommentCancel}
        onUpdateContents={handleSetEditedContents}
        isLoggedIn={isLoggedIn}
        userInfo={userInfo}
      />
    </RoomDetailsContainer>
  );
}
