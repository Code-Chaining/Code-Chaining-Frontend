import { useAuth } from "../../contexts/AuthContext";
import logoutImage from "../../assets/LogoutImage.png";
import {
  MyProfileContainer,
  MyProfileImage,
  MyProfileText,
  LogoutButton,
} from "../../css/HeaderCss";

export default function AuthenticatedHeader() {
  const { logout, userInfo } = useAuth();

  return (
    <MyProfileContainer>
      <div>
        <MyProfileImage src={userInfo.picture}></MyProfileImage>
        <MyProfileText>{userInfo.nickname}</MyProfileText>
      </div>
      <LogoutButton onClick={logout}>
        <img src={logoutImage} alt={"로그아웃"}></img>
      </LogoutButton>
    </MyProfileContainer>
  );
}
