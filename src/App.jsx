import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Features from "./components/Features";
import About from "./components/About";
import Story from "./components/Story";
import WhyGocpt from "./components/WhyGocpt";
import CallToAction from "./components/CallToAction";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="w-screen custom-scrollbar text-white font-[jura] relative">
      <ThemeToggle />
      <Navbar />
      <HomePage />
      <Features />
      <About />
      <Story />
      <WhyGocpt />
      <CallToAction />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
