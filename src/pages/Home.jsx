import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

export default function Home() {
  const quickHighlights = ["AWS", "Kubernetes", "CI/CD", "Full Stack"];
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollHint(window.scrollY < 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden soft-grid-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          alt="mountains"
          className="w-full h-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Animated orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-5xl mx-auto text-gray-900 dark:text-white relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="section-kicker bg-blue-500/20 border border-blue-400/50 dark:border-blue-400/30 text-blue-900 dark:text-blue-100">
            Welcome to my portfolio ✨
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg text-gray-900 dark:text-white"
        >
          Cloud engineer &<br />
          <span className="gradient-text">Full stack developer</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-700 dark:text-gray-100 font-light leading-relaxed drop-shadow-md"
        >
          Full-stack and cloud engineer building scalable, secure, high-performance applications from frontend to infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {quickHighlights.map((item) => (
            <span key={item} className="px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 shadow-sm">
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 flex-wrap drop-shadow-lg"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="button-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 flex items-center gap-2 font-semibold"
          >
            View My Work <FaArrowRight size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-xl hover:bg-gray-900/10 dark:hover:bg-white/10 backdrop-blur-sm transition font-semibold shadow-sm"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={false}
        style={{ pointerEvents: "none" }}
        whileInView={{}}
      >
        <motion.div
          initial={false}
          animate={{ opacity: showScrollHint ? 1 : 0, y: showScrollHint ? 0 : 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-700 dark:text-gray-300 text-sm">Scroll to explore</span>
          <FaChevronDown size={24} className="text-gray-800 dark:text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
