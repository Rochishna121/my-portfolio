import { motion } from "framer-motion";
import { FaGraduationCap, FaRocket, FaHeart } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Cloud Engineering Student",
      description: "KL University"
    },
    {
      icon: FaRocket,
      title: "DevOps Focused",
      description: "AWS, K8s, Docker, CI/CD"
    },
    {
      icon: FaHeart,
      title: "Open Source",
      description: "Contributing to community"
    }
  ];

  return (
    <section id="about" className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-4"
            >
              Get to know me
            </motion.span>
            <h2 className="text-5xl font-bold mb-8 font-code">
              <span className="text-gray-900 dark:text-white">About</span> <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a Cloud Engineering student at KL University passionate about
              AWS, Kubernetes, Docker, and DevOps automation. With a strong foundation in cloud technologies and infrastructure automation,
              I'm dedicated to building robust, scalable systems that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I love learning new technologies and sharing knowledge with the community.
              When I'm not coding, you'll find me exploring new DevOps tools or contributing
              to open-source projects.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover bg-white dark:bg-gray-800 p-6 rounded-xl"
              >
                <item.icon size={40} className="text-blue-600 dark:text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
