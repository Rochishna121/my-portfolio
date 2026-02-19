export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl">Rochishna</h1>

          <div className="flex space-x-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#education" className="hover:text-blue-500">Education</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
        <h1 className="text-5xl font-bold">Pillarisetty Venkata Rochishna</h1>
        <p className="text-xl mt-3 text-gray-600">Cloud Engineer</p>

        <a
          href="/resume.pdf"
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Download Resume
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-10 bg-white">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I am a Cloud Engineering student at KL University passionate about
          cloud computing, DevOps, and scalable systems. I enjoy building
          modern applications and learning new technologies.
        </p>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20 px-10">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <div className="bg-white shadow-md p-5 rounded-xl">
          B.Tech — KL University
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-10 bg-white">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded">Cloud Computing</div>
          <div className="bg-gray-100 p-4 rounded">AWS / Azure</div>
          <div className="bg-gray-100 p-4 rounded">Docker</div>
          <div className="bg-gray-100 p-4 rounded">Kubernetes</div>
          <div className="bg-gray-100 p-4 rounded">DevOps</div>
          <div className="bg-gray-100 p-4 rounded">Linux</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-10">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="bg-white shadow p-5 rounded-xl mb-4">
          <h3 className="font-bold">Cloud Deployment Project</h3>
          <p>Deployed scalable app using AWS + Docker + CI/CD pipeline.</p>
        </div>

        <div className="bg-white shadow p-5 rounded-xl">
          <h3 className="font-bold">DevOps Automation</h3>
          <p>Built CI/CD pipeline using GitHub Actions and Docker.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-10 bg-white">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: yourmail@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      <footer className="text-center py-5 text-gray-500">
        © 2026 Pillarisetty Venkata Rochishna
      </footer>

    </div>
  );
}
