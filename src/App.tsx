import { Routes, Route, Outlet } from "react-router-dom";
import ConversationChanelPage from "./components/conversation/ConversationChanelPage";
import ConversationPanel from "./components/conversation/ConversationPanel";
import ConversationPage from "./pages/ConversationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="conversation" element={<ConversationPage />}>
        <Route index element={<ConversationPanel />} />
        <Route path=":id" element={<ConversationChanelPage />} />
      </Route>
    </Routes>
  );
}

export default App;
