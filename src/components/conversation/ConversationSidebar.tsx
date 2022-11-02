import React from "react";
import { ConversationSidebarStyle } from "../../utils/styles";
import { TbEdit } from "react-icons/tb";

const ConversationSidebar = () => {
  return (
    <ConversationSidebarStyle>
      <header>
        <h1>Conversation</h1>
        <TbEdit size={35} />
      </header>
    </ConversationSidebarStyle>
  );
};

export default ConversationSidebar;
