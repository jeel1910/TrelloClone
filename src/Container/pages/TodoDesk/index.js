import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import TodoDeskStyle from "./TodoDesk.style";
import Card from "../../../Component/Card";

const TodoDesk = (props) => {
  return (
    <TodoDeskStyle>
      <Card title="To Do" task="task" />
      <Card title="Doing" />
      <Card title="Done" />
      <div className="add-list">
        <AiOutlinePlus style={{ marginRight: "5%" }} />
        Add another list
      </div>
    </TodoDeskStyle>
  );
};

export default TodoDesk;
