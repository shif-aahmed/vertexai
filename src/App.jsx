import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePg from "./pages/HomePg.jsx";
import BlogDetail from "./Components/BlogDetail/BlogDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePg />} />
        {/* <Route path="/blog/:id" element={<BlogDetail />} /> */}
        {/* <Route path="#blogs" element={<h2>Page Not Found</h2>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
