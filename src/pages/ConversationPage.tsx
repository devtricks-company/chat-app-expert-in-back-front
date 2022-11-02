import React from "react";
import { Outlet } from "react-router-dom";
import ConversationSidebar from "../components/conversation/ConversationSidebar";
import { Page } from "../utils/styles";

const ConversationPage = () => {
  return (
    <Page>
      <ConversationSidebar />
      <Outlet />
    </Page>
  );
};

export default ConversationPage;
