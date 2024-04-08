import { useEffect, useState } from "react";
import { StyledLabel } from "../css/CreateRoomCss";
import CommentImage from "../assets/CommentImage.png";
import CommentInputContainer from "./CommentInputContainer";
import CommentsContainer from "./CommentsContainer";
import { axiosInstance } from "../utils/apiConfig";
import {
  CommentCount,
  Image,
  ImageAndCommentCount,
  StyledLabelAndCommentCount,
} from "../css/DiscussionContainerCss";
import { useRooms } from "../contexts/RoomContext";
import { useLoading } from "../contexts/LoadingContext";

export default function DiscussionContainer({ roomId, isLoggedIn, userInfo }) {
  const [comments, setComments] = useState([]);
  const [isCommentEditing, setIsCommentEditing] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContents, setEditedContents] = useState("");
  const { myFetchRooms } = useRooms();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchCommentList = async () => {
      try {
        const response = await axiosInstance.get(`/comment/${roomId}`);
        const commentsData = response.data.data.commentList.map((comment) => ({
          commentId: comment.commentId,
          memberId: comment.memberId,
          nickname: comment.nickname,
          picture: comment.picture,
          contents: comment.contents,
          date: comment.date,
        }));

        setComments(commentsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCommentList();
  }, [roomId]);

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
      if (error.response && error.response.status === 400) {
        alert("내용을 입력하셔야합니다.");
      } else {
        alert("댓글 작성에 실패했습니다.");
      }
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
      if (error.response && error.response.status === 400) {
        alert("내용을 입력하셔야합니다.");
      } else {
        alert("댓글 수정에 실패했습니다!");
      }
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

        await myFetchRooms(setIsLoading);
        setIsLoading(false);

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

  return (
    <>
      <StyledLabelAndCommentCount>
        <StyledLabel>토론의 장</StyledLabel>
        <ImageAndCommentCount>
          <Image src={CommentImage} alt="이미지 설명" />
          <CommentCount>{comments.length}</CommentCount>
        </ImageAndCommentCount>
      </StyledLabelAndCommentCount>
      {isLoggedIn ? (
        <CommentInputContainer
          profileImageUrl={userInfo.picture}
          onSubmit={handleSubmitComment}
        />
      ) : (
        <></>
      )}

      <CommentsContainer
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
    </>
  );
}
