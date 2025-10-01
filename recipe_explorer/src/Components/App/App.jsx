import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import About from "../About/About";
import Landing from "../Landing/Landing";
import { AuthProvider } from "../../contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
