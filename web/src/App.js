import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NavbarGames from "./components/navbar/Navbar";
import ProfilePage from "./pages/ProfilePage";
import LogInPage from "./pages/LogInPage";
import AuthStore from "./context/AuthStore";

function App() {
  return (
    <>
      <AuthStore>
        <NavbarGames />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AuthStore>
    </>
  );
}

export default App;
