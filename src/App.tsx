import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PasswordResetConfirmation from "./components/PasswordResetConfirmation";
import PasswordResetRequest from "./components/PasswordResetRequest";
import ResetLinkSent from "./components/ResetLinkSent"; // Import the ResetLinkSent component
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/request-reset" />} />
        <Route path="/request-reset" element={<PasswordResetRequest />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/reset-link-sent" element={<ResetLinkSent />} />{" "}
        <Route
          path="/reset-password-confirmation/:result"
          element={<PasswordResetConfirmation />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
