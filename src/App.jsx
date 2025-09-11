import { useState } from "react";
import { motion } from "framer-motion";

// Simple Button
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg border shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {children}
    </button>
  );
}

// Simple Card + CardContent
function Card({ children }) {
  return (
    <div className="rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-800">
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">Sajana Senanayake</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
        <Button onClick={() => setDark(!dark)}>{dark ? "☀️" : "🌙"}</Button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Full-Stack Developer | AI & Security Enthusiast
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg">
          Building intelligent and secure systems for the future — from
          Hyperdimensional Computing to MERN stack apps.
        </p>
      </section>

      {/* About Me */}
      <section id="about" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p>
          I am an undergraduate passionate about Artificial Intelligence,
          Cybersecurity, and Full-Stack Development. I enjoy designing
          intelligent systems, working on secure protocols, and developing
          impactful web applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Python",
            "Java",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "TensorFlow",
            "OpenCV",
            "Git",
            "Docker",
            "Eclipse",
          ].map((skill) => (
            <div key={skill} className="p-4 bg-gray-800 rounded-lg shadow-md">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Secure File Transfer Protocol",
              desc: "Custom cryptographic protocol in Java with replay protection & blockchain-style logging.",
              tech: "Java, Cryptography",
              link: "#",
            },
            {
              title: "HDC-based Face Recognition",
              desc: "Hyperdimensional Computing + handcrafted features for criminal identification.",
              tech: "Python, OpenCV, NumPy",
              link: "#",
            },
            {
              title: "Hotel Reservation System",
              desc: "MERN stack project for secure and efficient booking management.",
              tech: "MongoDB, Express, React, Node.js",
              link: "#",
            },
            {
              title: "Portfolio Website",
              desc: "Personal portfolio built with React & Tailwind to showcase skills and projects.",
              tech: "React, TailwindCSS",
              link: "#",
            },
          ].map((p) => (
            <Card key={p.title}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="mb-2">{p.desc}</p>
                <p className="text-sm italic mb-2">Tech: {p.tech}</p>
                <a href={p.link} className="text-blue-400 hover:underline">
                  View Project
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <ul className="space-y-4">
          <li>Internships / Research Projects (AI & Cybersecurity focus)</li>
          <li>Freelance Web Development</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:sajana@example.com"
            className="text-blue-400 hover:underline"
          >
            sajana@example.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Sajana4197"
            className="text-blue-400 hover:underline"
          >
            github.com/Sajana4197
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="#" className="text-blue-400 hover:underline">
            linkedin.com/in/sajana
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center border-t mt-10">
        <p>
          © {new Date().getFullYear()} Sajana Senanayake | Built with React &
          Tailwind
        </p>
      </footer>
    </div>
  );
}
