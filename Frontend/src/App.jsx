import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Lenis from "@studio-freight/lenis"; // Import Lenis
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
import AdminDashboard from "./pages/Admin/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
// import Landing from "./pages/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Panels from "./pages/Panels";
import FloatingCharacterPopup from "./components/FlyingCharacterPopup";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ThemeProvider>
      <Router>
        <SmoothScroll> {/* Wrap the entire app with Lenis smooth scroll */}
          <AppContent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </SmoothScroll>
      </Router>
    </ThemeProvider>
  );
}

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust scrolling speed
      smooth: true,
      smoothTouch: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return <>{children}</>;
}

function AppContent({ searchQuery, setSearchQuery }) {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isAdminDashboard = location.pathname === "/admin";

  return (
    <>
      {!isLandingPage && <Panels key={location.pathname} />}
      {!isAdminDashboard && <FloatingCharacterPopup />}
      {( !isAdminDashboard) && <Navbar searchQuery={searchQuery} onSearch={setSearchQuery} />}

      <Routes>
        {/* <Route path="/" element={<Home searchQuery={searchQuery} />} /> */}
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
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
        <Route path="/contact" element={<Contact searchQuery={searchQuery} />} />
        <Route path="/admin" element={<AdminDashboard searchQuery={searchQuery} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {(!isLandingPage && !isAdminDashboard) && <Footer />}
    </>
  );
}

export default App;

