import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import useDarkMode from "./hooks/useDarkMode";

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  }, [location.pathname]);
  return null;
}

export default function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <>
      <ScrollManager />
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
