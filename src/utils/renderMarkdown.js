import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

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

export default renderMarkdown;
