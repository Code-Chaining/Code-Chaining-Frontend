import styled from "styled-components";

export const RoomDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1.25vw;
  position: relative;
  width: 78vw;
  height: 90vh;
  margin: 0 0 0 22vw;
  overflow: scroll;
  z-index: 6;
`;

export const Divider = styled.div`
  border-top: 1px solid #ccc;
  margin: 2vh 4vw 2vh 0;
`;

export const RoomInfoAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3vh;
`;

export const RoomInfoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0.6vw;
  width: 7vw;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Nickname = styled.div`
  margin-left: 0.8vw;
  font-size: 1.3vw;
  font-weight: bold;
  width: 100%;
  color: #333;
`;

export const ProfileImage = styled.img`
  width: 40%;
  border-radius: 50%;
  object-fit: cover;
`;

export const ScrapImage = styled.img`
  width: 2vw;
  margin-right: 4vw;
  cursor: pointer;
`;
