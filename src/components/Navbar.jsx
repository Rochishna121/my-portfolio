import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900/95 bg-opacity-95 backdrop-blur-md shadow-lg z-50 border-b border-blue-200 dark:border-purple-900/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl gradient-text"
        >
          <a href="#home">Rochishna</a>
        </motion.h1>

        <div className="hidden md:flex space-x-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="font-code text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-purple-900/30 transition relative group overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-lg bg-blue-100 dark:bg-purple-900/30 border border-blue-300 dark:border-purple-700 hover:border-blue-500 transition"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="text-xl">{isDark ? "☀️" : "🌙"}</span>
        </motion.button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-2 p-2 rounded-lg bg-blue-100 dark:bg-purple-900/30 border border-blue-300 dark:border-purple-700"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-purple-900/30 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
