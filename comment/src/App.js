import React, { useState, useRef, useCallback, useReducer } from "react";
import CommentTemplate from "./components/CommentTemplate";
import CommentInsert from "./components/CommentInsert";
import CommentList from "./components/CommentList";

function App() {
  return (
    <CommentTemplate>
      <CommentInsert />
      <CommentList />
    </CommentTemplate>
  );
}

export default App;
