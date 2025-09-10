import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePg from "./pages/HomePg/HomePg.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      <Chatbot />
    </Router>
  );
}

export default App;
