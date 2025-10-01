import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <AuthProvider>
        <Header />
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
          {/* // change to /contact after */}
          <Route path="/about" element={<About />} />
        </Routes>
        {isLoginModalOpen && (
          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={closeLogin}
            onRegisterClick={switchToRegister}
          />
        )}
        {isRegisterModalOpen && (
          <RegisterModal
            isOpen={isRegisterModalOpen} 
            onClose={closeRegister}
            onLoginClick={switchToLogin}
            onRegister={(data) => {
              console.log("Register form submitted:", data);
              // here you’d call signup() or AuthContext.register()
              closeRegister();
            }}
          />
        )}
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
