import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaStar } from "react-icons/fa";
import { SiPython, SiJavascript } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      icon: FaCode,
      name: "Java",
      description: "Object-oriented programming, OOP concepts",
      color: "text-red-600",
      level: 5
    },
    {
      icon: SiPython,
      name: "Python",
      description: "Data processing, scripting, automation",
      color: "text-blue-500",
      level: 5
    },
    {
      icon: FaDatabase,
      name: "SQL",
      description: "Database design, queries, optimization",
      color: "text-orange-600",
      level: 4
    },
    {
      icon: FaCode,
      name: "C++",
      description: "Systems programming, competitive coding",
      color: "text-blue-700",
      level: 4
    },
    {
      icon: SiJavascript,
      name: "JavaScript",
      description: "Web development, frontend, Node.js",
      color: "text-yellow-500",
      level: 4
    },
    {
      icon: FaCode,
      name: "Docker",
      description: "Containerization, orchestration",
      color: "text-blue-400",
      level: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-4"
          >
            My expertise
          </motion.span>
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-gray-900 dark:text-white">Technical</span> <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-hover bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4"
              >
                <skill.icon size={40} className={`${skill.color}`} />
              </motion.div>
              <p className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{skill.name}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{skill.description}</p>
              
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    className={i < skill.level ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
