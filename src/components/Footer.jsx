import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Rochishna121", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 text-gray-900 dark:text-gray-300 py-12 border-t border-gray-200 dark:border-purple-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Rochishna</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Cloud engineer & Full stack developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h4>
            <a href="#home" className="block text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
            <a href="#projects" className="block text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="block text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-end"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-purple-600 text-gray-900 dark:text-gray-300 hover:text-white flex items-center justify-center transition"
                  title={link.label}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-purple-600/30 to-transparent mb-6"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <p className="text-gray-600 dark:text-gray-500">
            © {currentYear} Rochishna. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 p-2 rounded-lg bg-blue-100 dark:bg-purple-600/20 hover:bg-blue-200 dark:hover:bg-purple-600/40 border border-blue-300 dark:border-purple-600/30 text-gray-900 dark:text-gray-400 transition"
            title="Back to top"
          >
            <FaArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
