import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import Reviews from "./components/Reviews.jsx";
import QuickBooksSection from "./components/QuickBooksSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
