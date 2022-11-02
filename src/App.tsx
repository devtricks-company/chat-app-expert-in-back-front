import { Routes, Route, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="conversation"
        element={
          <div>
            <div>Conversations</div>
            <Outlet />
          </div>
        }
      >
        <Route path=":id" element={<div>Conversation ID page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
