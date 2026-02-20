import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCloud, FaDocker } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between p-4">
          <h1 className="font-bold text-lg">Rochishna</h1>
          <div className="space-x-6">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-100 to-purple-100">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Pillarisetty Venkata Rochishna
        </motion.h1>

        <p className="text-xl mt-4">Cloud Engineer</p>

        {/* DOWNLOAD RESUME (FORCE DOWNLOAD) */}
        <a
          href="/resume.pdf"
          download
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Download Resume
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          Cloud Engineering student at KL University passionate about AWS, DevOps,
          Kubernetes, and scalable cloud systems.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow">
              <FaCloud size={40} className="mx-auto mb-2" />
              Cloud
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <FaDocker size={40} className="mx-auto mb-2" />
              Docker
            </div>
            <div className="bg-white p-6 rounded-lg shadow">AWS / Azure</div>
            <div className="bg-white p-6 rounded-lg shadow">Kubernetes</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="font-bold text-lg">Cloud Deployment</h3>
            <p>Deployed scalable app using AWS, Docker, CI/CD.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <h3 className="font-bold text-lg">DevOps Automation</h3>
            <p>Built CI/CD pipeline using GitHub Actions and Docker.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com/Rochishna121" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <p className="mt-4">rochishna@gmail.com</p>
      </section>

    </div>
  );
}