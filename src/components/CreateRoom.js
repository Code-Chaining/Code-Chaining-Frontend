import React, { useState } from "react";

export default function CreateRoom() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title, code);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용&코드"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">저장</button>
    </form>
  );
}
