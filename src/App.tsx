import { Routes, Route, Outlet } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />}></Route>
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
