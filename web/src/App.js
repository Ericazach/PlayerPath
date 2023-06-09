import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NavbarGames from "./components/navbar/Navbar";
import ProfilePage from "./pages/ProfilePage";
import LogInPage from "./pages/LogInPage";
import AuthStore from "./context/AuthStore";
import GameDetailPage from "./pages/GameDetailPage";
import PrivateRoute from "./guards/PrivateRoute";
import EditProfilePage from "./pages/EditProfilePage";
import OwnGameDetailPage from "./pages/OwnGameDetailPage";
import OwnGameCreatePage from "./pages/OwnGameCreatePage";
import OwnGameEditPage from "./pages/OwnGameEditPage";

function App() {
  return (
    <>
      <AuthStore>
        <NavbarGames />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route
            path="/users/:userId"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/games/:gameId" element={<GameDetailPage />} />
          <Route path="/users/:userId/edit" element={<EditProfilePage />} />
          <Route
            path="/ownGames/:gameId/create"
            element={<OwnGameCreatePage />}
          />
          <Route
            path="/ownGames/:ownGameId/edit"
            element={<OwnGameEditPage />}
          />
          <Route path="/ownGames/:ownGameId" element={<OwnGameDetailPage />} />
        </Routes>
      </AuthStore>
    </>
  );
}

export default App;
