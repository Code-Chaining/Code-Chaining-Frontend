import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateRoomForm,
  ButtonContainer,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  MarkdownPreview,
} from "../css/CreateRoomCss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Button from "./Button";

export default function CreateRoom() {
  const [title, setTitle] = useState("");
  const [codeAndContents, setCodeAndContents] = useState("");

  let navigate = useNavigate();

  function handleMainPage() {
    navigate("/");
  }

  const handleSave = (e) => {
    e.preventDefault();

    console.log(title, codeAndContents);

    handleMainPage();
  };

  const renderMarkdown = (markdownText) => {
    return (
      <ReactMarkdown
        remarkPlugins={gfm}
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter style={dark} language={match[1]} PreTag="div">
                {String(children)
                  .replace(/\n$/, "")
                  .replace(/\n&nbsp;\n/g, "")
                  .replace(/\n&nbsp\n/g, "")}
              </SyntaxHighlighter>
            ) : (
              <SyntaxHighlighter
                style={nord}
                background="green"
                language="textile"
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            );
          },
          blockquote({ children, ...props }) {
            return (
              <blockquote
                style={{
                  background: "#EBEBEB",
                  padding: "1px 15px",
                  borderRadius: "10px",
                }}
                {...props}
              >
                {children}
              </blockquote>
            );
          },
          em({ children, ...props }) {
            return (
              <span style={{ fontStyle: "italic" }} {...props}>
                {children}
              </span>
            );
          },
        }}
      >
        {markdownText
          .replace(/\n/gi, "\n\n")
          .replace(/\*\*/gi, "@$_%!^")
          .replace(/@\$_%!\^/gi, "**")
          .replace(/<\/?u>/gi, "*")}
      </ReactMarkdown>
    );
  };

  return (
    <>
      <CreateRoomForm>
        <div>
          <StyledLabel htmlFor="title">제목</StyledLabel>
          <StyledInput
            id="title"
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <StyledLabel htmlFor="codeAndContents">
            코드 & 내용 (Markdown을 지원합니다.)
          </StyledLabel>
          <StyledTextArea
            id="codeAndContents"
            placeholder="내용 & 코드를 입력하세요. (Markdown을 지원합니다.)"
            value={codeAndContents}
            onChange={(e) => setCodeAndContents(e.target.value)}
          />
        </div>
        <div>
          <StyledLabel>미리보기</StyledLabel>
          <MarkdownPreview>{renderMarkdown(codeAndContents)}</MarkdownPreview>
        </div>
        <ButtonContainer>
          <Button $variant="cancel" type="button" onClick={handleMainPage}>
            취소
          </Button>
          <Button $variant="save" type="submit" onClick={handleSave}>
            저장
          </Button>
        </ButtonContainer>
      </CreateRoomForm>
    </>
  );
}
