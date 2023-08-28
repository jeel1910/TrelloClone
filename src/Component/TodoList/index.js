import React from "react";
import { TbAlignBoxLeftMiddle } from "react-icons/tb";

import TodoListStyle from "./TodoList.style";

const TodoList = (props) => {
  return (
    <TodoListStyle>
      <TbAlignBoxLeftMiddle
        style={{ marginRight: "5%", width: "20%", height: "60%" }}
      />
      TodoList
    </TodoListStyle>
  );
};

export default TodoList;
