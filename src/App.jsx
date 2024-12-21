import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CTUniversity from "./pages/CTUniversity"; // New Route
import CTShahpur from "./pages/CTShahpur";
import CTWorld from "./pages/CTWorld"; // New Route
import CTPublic from "./pages/CTPublic"; // New Route
import CTGlobal from "./pages/CTGlobal"; // New Route
import CTMaqsudan from "./pages/CTMaqsudan"; // New Route
import TermsOfService from "./components/Other_Pages/TermsOfService"; // New Route
import AboutUs from "./components/Other_Pages/AboutUs"; // New Route
import Contact from "./components/Other_Pages/Contact"; // New Route
import Footer from "./components/Footer/Footer";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { ThemeProvider } from "./context/ThemeContext";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import Landing from "./pages/LandingPage";
// import PrivacyPolicy from "./pages/Other_Pages/PrivacyPolicy";


function App() {
  return (
    <ThemeProvider>

    <Router>
      <div>
        {/* <Navbar /> */}

        <Routes path="/">
          <Route   index   element={   <Landing/>} />
          <Route path="/home" element={  <Home />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/ctuniversity" element={<CTUniversity />} />{" "}
          {/* New Route */}
          <Route path="/ctshahpur" element={<CTShahpur />} /> {/* New Route */}
          <Route path="/ctworld" element={<CTWorld />} /> {/* New Route */}
          <Route path="/ctpublic" element={<CTPublic />} /> {/* New Route */}
          <Route path="/ctglobal" element={<CTGlobal />} /> {/* New Route */}
          <Route path="/ctmaqsudan" element={<CTMaqsudan />} />{" "}
          {/* New Route */}
          {/* <Route path="/privacypolicy" element={<PrivacyPolicy/>} />{" "} */}
          {/* New Route */}
          <Route path="/termsofservice" element={<TermsOfService />} />{" "}
          {/* New Route */}
          <Route path="/about" element={<AboutUs />} /> {/* New Route */}
          <Route path="/contact" element={<Contact />} /> {/* New Route */}
          <Route path="/admin" element={<AdminDashboard/>} /> {/* New Route */}
        </Routes>

      
      </div>
          <Footer />
    </Router>
    </ThemeProvider>
  );
}

export default App;
