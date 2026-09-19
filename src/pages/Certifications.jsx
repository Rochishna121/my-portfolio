import { motion } from "framer-motion";
import { FaCertificate, FaCheckCircle } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Completed"
    },
    {
      title: "Aviatrix Multi Cloud Network Associate",
      issuer: "Aviatrix",
      status: "Completed",
      url: "https://www.credly.com/badges/03a5250e-fe13-400c-872d-a7611ac8f21c"
    },
    {
      title: "Oracle Cloud Infrastructure",
      issuer: "Oracle",
      status: "Completed",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AB6F4EF9AE995665708840ED183DF4A9394CCD050A927769CE47448947902F3A"
    }
  ];

  return (
    <section id="certifications" className="pt-32 pb-20 px-6 min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
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
            className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold mb-4"
          >
            Credentials
          </motion.span>
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-gray-900 dark:text-white">My</span> <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <FaCertificate className="text-blue-600 dark:text-blue-400" size={22} />
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  <FaCheckCircle size={12} />
                  {cert.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {cert.title}
                  </a>
                ) : (
                  cert.title
                )}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
