import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePg from "./Pages/HomePg/HomePg.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Navbar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Chatbot from "./Components/Chatbot/Chatbot";
import CareerPage from "./Pages/CareerPage/CareerPage";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import OurTeam from "./Pages/OurTeam/OurTeam";  

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePg />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
      <Footer />
      <Chatbot />
    </Router>
  );
}

export default App;
