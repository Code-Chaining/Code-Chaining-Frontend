import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "../../css/HeaderCss";

export default function UnauthenticatedHeader() {
  let navigate = useNavigate();

  function handleLoginPage() {
    navigate("/login");
  }

  return (
    <>
      <LoginButton onClick={handleLoginPage}>로그인</LoginButton>
    </>
  );
}
