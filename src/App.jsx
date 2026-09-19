import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white text-gray-900 scroll-smooth transition overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse pointer-events-none"></div>
      <div className="fixed top-1/2 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse pointer-events-none" style={{ animationDelay: "2s" }}></div>
      
      <Navbar />
      
      <Home />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
      
      <Footer />
    </div>
  );
}