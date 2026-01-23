import { useEffect, useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import Reviews from "./components/Reviews.jsx";
import QuickBooksSection from "./components/QuickBooksSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDarkMode(true);
  }, []);

  // Apply class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <Services />
        <QuoteForm />
        <Reviews />
        <QuickBooksSection />
      </main>
      <Footer />
    </div>
  );
}
