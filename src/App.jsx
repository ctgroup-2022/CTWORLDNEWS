import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import CTUniversity from "./pages/CTUniversity";
import CTShahpur from "./pages/CTShahpur";
import CTWorld from "./pages/CTWorld";
import CTPublic from "./pages/CTPublic";
import CTGlobal from "./pages/CTGlobal";
import CTMaqsudan from "./pages/CTMaqsudan";
import TermsOfService from "./components/Other_Pages/TermsOfService";
import AboutUs from "./components/Other_Pages/AboutUs";
import Contact from "./components/Other_Pages/Contact";
import Footer from "./components/Footer/Footer";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { ThemeProvider } from "./context/ThemeContext"; // Theme context provider
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import Landing from "./pages/LandingPage";
import Navbar from "./components/Navbar/Navbar"; // Import Navbar

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Global search state

  return (
    <ThemeProvider>
      <Router>
        <div>
          {/* Navbar will be visible on every page */}
          <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} /> {/* Pass props */}

          <Routes>
            <Route index element={<Landing searchQuery={searchQuery} />} />
            <Route path="/home" element={<Home searchQuery={searchQuery} />} />
            <Route path="/login" element={<LoginPage searchQuery={searchQuery} />} />
            <Route path="/signup" element={<Signup searchQuery={searchQuery} />} />
            <Route path="/ctuniversity" element={<CTUniversity searchQuery={searchQuery} />} />
            <Route path="/ctshahpur" element={<CTShahpur searchQuery={searchQuery} />} /> {/* Pass searchQuery */}
            <Route path="/ctworld" element={<CTWorld searchQuery={searchQuery} />} />
            <Route path="/ctpublic" element={<CTPublic searchQuery={searchQuery} />} />
            <Route path="/ctglobal" element={<CTGlobal searchQuery={searchQuery} />} />
            <Route path="/ctmaqsudan" element={<CTMaqsudan searchQuery={searchQuery} />} />
            <Route path="/termsofservice" element={<TermsOfService searchQuery={searchQuery} />} />
            <Route path="/about" element={<AboutUs searchQuery={searchQuery} />} />
            <Route path="/contact" element={<Contact searchQuery={searchQuery} />} />
            <Route path="/admin" element={<AdminDashboard searchQuery={searchQuery} />} />
          </Routes>
        </div>

        {/* Footer will be visible on every page */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
