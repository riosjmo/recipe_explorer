import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import Landing from "../Landing/Landing";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import Main from "../Main/Main";
import About from "../About/About";
import { AuthProvider } from "../../contexts/AuthContext";

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openLogin = () => setLoginModalOpen(true);
  const closeLogin = () => setLoginModalOpen(false);

  const openRegister = () => setRegisterModalOpen(true);
  const closeRegister = () => setRegisterModalOpen(false);

  const switchToRegister = () => {
    closeLogin();
    openRegister();
  };

  const switchToLogin = () => {
    closeRegister();
    openLogin();
  };

  return (
    <Router basename="/recipe_explorer">
      <AuthProvider>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                onLoginClick={openLogin}
                onRegisterClick={openRegister}
              />
            }
          />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {isLoginModalOpen && (
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={closeLogin}
            onRegisterClick={switchToRegister}
            onLogin={() => setIsLoggedIn(true)}
          />
        )}

        {isRegisterModalOpen && (
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={closeRegister}
            onLoginClick={switchToLogin}
            onRegister={() => setIsLoggedIn(true)}
          />
        )}

        <Footer isLoggedIn={isLoggedIn} />
      </AuthProvider>
    </Router>
  );
}

export default App;
