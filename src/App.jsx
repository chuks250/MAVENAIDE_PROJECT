import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/get-started" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
