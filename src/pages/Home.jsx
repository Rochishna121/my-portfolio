import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden">
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
          <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/50 dark:border-blue-400/30 rounded-full text-sm font-semibold backdrop-blur-sm text-blue-900 dark:text-blue-100">
            Welcome to my portfolio ✨
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg text-gray-900 dark:text-white"
        >
          Cloud engineer &<br />
          <span className="gradient-text">Full stack developer</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-700 dark:text-gray-100 font-light leading-relaxed drop-shadow-md"
        >
          Specializing in AWS, Kubernetes, Docker, and CI/CD pipelines.
          Building scalable, secure, and efficient cloud systems.
        </motion.p>

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
            className="button-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg shadow-lg flex items-center gap-2 font-semibold"
          >
            View My Work <FaArrowRight size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-lg hover:bg-gray-900/10 dark:hover:bg-white/10 backdrop-blur-sm transition font-semibold"
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
      >
        <span className="text-gray-700 dark:text-gray-300 text-sm">Scroll to explore</span>
        <FaChevronDown size={24} className="text-white" />
      </motion.div>
    </section>
  );
}
