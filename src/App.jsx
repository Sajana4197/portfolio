export default function App() {
  return (
    <div>
      {/* --- Hero Section --- */}
      <section className="flex flex-col justify-center items-center h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          👋 Hi, I'm <span className="text-blue-400">Sajana Senanayake</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
          Exploring Technology • Machine Learning • Computer Vision • MERN
          Development
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          View My Work
        </a>
      </section>

      {/* --- About --- */}
      <section id="about" className="py-16 px-6 md:px-20 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300">
          I am a technology enthusiast exploring multiple domains including
          Machine Learning, Computer Vision, Security, and MERN applications. I
          love building impactful solutions that solve real-world problems.
        </p>
      </section>

      {/* --- Skills --- */}
      <section id="skills" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 bg-gray-800 rounded-lg">Python</div>
          <div className="p-4 bg-gray-800 rounded-lg">JavaScript</div>
          <div className="p-4 bg-gray-800 rounded-lg">React</div>
          <div className="p-4 bg-gray-800 rounded-lg">Node.js</div>
          <div className="p-4 bg-gray-800 rounded-lg">MongoDB</div>
          <div className="p-4 bg-gray-800 rounded-lg">TensorFlow</div>
          <div className="p-4 bg-gray-800 rounded-lg">OpenCV</div>
        </div>
      </section>

      {/* --- Projects --- */}
      <section id="projects" className="py-16 px-6 md:px-20 bg-gray-800">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Hotel Reservation System
            </h3>
            <p className="text-gray-300">
              MERN stack project for managing hotel bookings.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Face Recognition with HDC
            </h3>
            <p className="text-gray-300">
              Border control system using Hyperdimensional Computing.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Secure File Transfer Protocol
            </h3>
            <p className="text-gray-300">
              Java-based implementation with encryption, integrity, and logging.
            </p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Real-time People Counter
            </h3>
            <p className="text-gray-300">
              YOLO + OpenCV system for people tracking and capacity monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* --- Contact --- */}
      <section id="contact" className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-6 text-gray-300">
          Let’s connect! Reach me through email or LinkedIn.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:sjnsenanayake@gmail.com"
            className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-blue-500 transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/sajana-senanayake/"
            className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-blue-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sajana4197"
            className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-blue-500 transition"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
