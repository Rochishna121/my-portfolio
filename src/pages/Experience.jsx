import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Cloud Engineering Student",
      company: "KL University",
      period: "2024 - Present",
      description: "Specializing in cloud technologies, DevOps, and infrastructure automation. Developing expertise in AWS services, Kubernetes, and CI/CD practices."
    },
    {
      title: "Junior Engineer",
      company: "Tech Projects",
      period: "2023 - 2024",
      description: "Developed full-stack web applications using Spring Boot and modern frontend technologies. Built RESTful APIs, database schemas, and user interfaces for multiple projects."
    }
  ];

  return (
    <section id="experience" className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
            className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold mb-4"
          >
            My journey
          </motion.span>
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-gray-900 dark:text-white">Journey</span> <span className="gradient-text">&amp; Path</span>
          </h2>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative md:ml-32"
            >
              {/* Timeline Dot */}
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="absolute -left-14 top-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:flex items-center justify-center"
              >
                <FaBriefcase className="text-white" size={14} />
              </motion.div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="card-hover bg-white dark:bg-gray-800 p-8 rounded-xl border-l-4 border-blue-500"
              >
                <div className="flex items-start justify-between mb-2 flex-wrap gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold"
                  >
                    <FaCalendarAlt size={14} />
                    {exp.period}
                  </motion.span>
                </div>
                
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">{exp.company}</p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
