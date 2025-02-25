import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; // Theme context provider
import Home from "./pages/Home";
import CTUniversity from "./pages/CTUniversity";
import CTShahpur from "./pages/CTShahpur";
import CTWorld from "./pages/CTWorld";
import CTPublic from "./pages/CTPublic";
import CTGlobal from "./pages/CTGlobal";
import CTMaqsudan from "./pages/CTMaqsudan";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import Landing from "./pages/LandingPage";
import ThemeToggle from "./components/ThemeToggle";
// import PrivacyPolicy from "./pages/Other_Pages/PrivacyPolicy";

import Navbar from "./components/Navbar/Navbar"; // Import Navbar
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Panels from "./pages/Panels"; // Import Panels component
import FloatingCharacterPopup from "./components/FlyingCharacterPopup"; // Import FloatingCharacterPopup
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // Global search state

  return (
    <ThemeProvider>
      <Router>
        <AppContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Router>
    </ThemeProvider>
  );
}

function AppContent({ searchQuery, setSearchQuery }) {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isAdminDashboard = location.pathname === "/admin";
 
  return (
    <>
      {/* Panel animation */}
      {!isLandingPage &&  <Panels key={location.pathname} />}
      {/* Floating Character Popup */}
      <FloatingCharacterPopup /> {/* This will be rendered on every route */}

      {/* Conditionally render Navbar */}
      {(!isLandingPage && !isAdminDashboard) && <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />}

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Landing searchQuery={searchQuery} />} />
        <Route path="/home" element={<Home searchQuery={searchQuery} />} />
        <Route path="/login" element={<LoginPage searchQuery={searchQuery} />} />
        <Route path="/signup" element={<Signup searchQuery={searchQuery} />} />
        <Route path="/ctuniversity" element={<CTUniversity searchQuery={searchQuery} />} />
        <Route path="/ctshahpur" element={<CTShahpur searchQuery={searchQuery} />} />
        <Route path="/ctworld" element={<CTWorld searchQuery={searchQuery} />} />
        <Route path="/ctpublic" element={<CTPublic searchQuery={searchQuery} />} />
        <Route path="/ctglobal" element={<CTGlobal searchQuery={searchQuery} />} />
        <Route path="/ctmaqsudan" element={<CTMaqsudan searchQuery={searchQuery} />} />
        <Route path="/termsofservice" element={<TermsOfService searchQuery={searchQuery} />} />
        <Route path="/about" element={<AboutUs searchQuery={searchQuery} />} />
        {/* <Route path="/privacypolicy" element={<PrivacyPolicy searchQuery={searchQuery} />} /> */}
        <Route path="/contact" element={<Contact searchQuery={searchQuery} />} />
        <Route path="/admin" element={<AdminDashboard searchQuery={searchQuery} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Conditionally render Footer */}
      {(!isLandingPage && !isAdminDashboard) && <Footer />}
    </>
  );
}

export default App;



