import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_xs5sob8",
      "template_so22814",
      form.current,
      "F8JAdIJ54i08BXFvH"
    ).then(
      () => {
        setSubmitted(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setSubmitted(false), 5000);
      },
      (error) => {
        setLoading(false);
        console.log(error.text);
        alert("Failed to send message ❌");
      }
    );
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "pillarisettyvenkatarochishna@gmail.com",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/rochishna",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Poranki, Vijayawada",
      color: "text-pink-600 dark:text-pink-400"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-semibold mb-4"
          >
            Get in touch
          </motion.span>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Let's</span> <span className="gradient-text">Talk</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Have a project or question? I'd love to hear from you!</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover bg-white dark:bg-gray-800 p-6 rounded-xl text-center"
            >
              <info.icon size={40} className={`${info.color} mx-auto mb-3`} />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm break-words">{info.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.form 
          ref={form} 
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-gray-700/50 space-y-6 shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-purple-900/20 transition-shadow duration-300"
        >
          <div className="space-y-2 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Send Me a Message</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Fill out the form below and I'll get back to you as soon as possible.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div whileHover={{ y: -4 }} className="relative">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur group-focus-within:blur-sm p-0.5"></div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                  className="relative w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="relative">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur group-focus-within:blur-sm p-0.5"></div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  required
                  className="relative w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </motion.div>
          </div>

          <motion.div whileHover={{ y: -4 }} className="relative">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">Message</label>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur group-focus-within:blur-sm p-0.5"></div>
              <textarea
                name="message"
                placeholder="Tell me about your project or question..."
                required
                rows="5"
                className="relative w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-400 transition-all duration-200 shadow-sm hover:shadow-md resize-none"
              ></textarea>
            </div>
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading || submitted}
            whileHover={{ scale: submitted ? 1 : 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full relative overflow-hidden font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
              submitted 
                ? 'bg-green-500 text-white' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50'
            } disabled:opacity-75`}
          >
            <span className="relative z-10">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </span>
              ) : submitted ? (
                <span className="flex items-center gap-2">✓ Message Sent!</span>
              ) : (
                <span className="flex items-center gap-2">Send Message 🚀</span>
              )}
            </span>
            {!submitted && (
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}