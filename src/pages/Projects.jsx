import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "AWS Infrastructure Setup",
      description: "Automated cloud infrastructure using Terraform and AWS CloudFormation",
      technologies: ["AWS", "Terraform", "CloudFormation"],
      github: "https://github.com/Rochishna121",
      live: "#",
      icon: "☁️"
    },
    {
      title: "Kubernetes Deployment",
      description: "Containerized microservices deployment with Kubernetes orchestration",
      technologies: ["Kubernetes", "Docker", "Helm"],
      github: "https://github.com/Rochishna121",
      live: "#",
      icon: "⚙️"
    },
    {
      title: "CI/CD Pipeline",
      description: "Automated deployment pipeline with Jenkins and GitLab CI",
      technologies: ["Jenkins", "GitLab CI", "Docker"],
      github: "https://github.com/Rochishna121",
      live: "#",
      icon: "🚀"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            className="inline-block px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-semibold mb-4"
          >
            My work
          </motion.span>
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-gray-900 dark:text-white">Featured</span> <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-hover group relative"
            >
              {/* Project Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden">
                
                {/* Icon Background */}
                <div className="absolute -right-8 -top-8 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {project.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">{project.description}</p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-semibold"
                    >
                      <FaGithub size={18} />
                      Code
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition font-semibold"
                    >
                      <FaExternalLinkAlt size={18} />
                      Live
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
