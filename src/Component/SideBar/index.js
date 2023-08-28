import React from "react";
import { TbBrandCodesandbox } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import TodoList from "../TodoList";
import SideBarStyle from "./SideBar.style";

const SideBar = (props) => {
  return (
    <SideBarStyle>
      <div className="title-box">
        <TbBrandCodesandbox
          style={{ marginRight: "5%", width: "20%", height: "60%" }}
        />
        Trello workspace
      </div>
      <div className="title-box">
        <AiOutlinePlus
          style={{ marginRight: "5%", width: "20%", height: "60%" }}
        />
        Boards
      </div>
      <TodoList />
    </SideBarStyle>
  );
};

export default SideBar;
