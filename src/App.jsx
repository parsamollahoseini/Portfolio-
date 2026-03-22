import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Parsa Mollahoseini</h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-600 transition-colors ${
                    activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-5xl font-bold">
              PM
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Parsa Mollahoseini
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer | Computer Science Student | Backend & Microservices Specialist
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/parsamollahoseini"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub
            </a>
            <a
              href="mailto:parsamollahoseini@gmail.com"
              className="btn-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12 text-gray-900">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Bio</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Computer Programming and Analysis graduate heading to York University for Computer Science in Fall 2026.
                I've built backend systems, microservices, mobile apps, and full-stack projects. I focus on seeing projects
                through to completion and getting the details right.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Career Philosophy</h3>
              <p className="text-gray-700 leading-relaxed text-lg italic">
                "We are the facilitators of our own creative evolution." - Bill Hicks
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                I believe in continuous learning and growth through hands-on experience. My approach to software development
                is rooted in understanding core principles, building scalable solutions, and never settling for "good enough."
                Every project is an opportunity to push boundaries, learn new technologies, and create something meaningful.
                My goal is to contribute to innovative projects that solve real problems while constantly evolving my skill
                set to stay at the forefront of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-gray-900">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">York University</h3>
                  <p className="text-lg text-blue-600 font-medium">Bachelor of Science - Computer Science</p>
                </div>
                <span className="text-gray-600 font-medium">Fall 2026</span>
              </div>
              <p className="text-gray-600">Toronto, ON</p>
            </div>
            <div className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">George Brown College</h3>
                  <p className="text-lg text-blue-600 font-medium">Advanced Diploma in Computer Programming and Analysis (T177)</p>
                </div>
                <span className="text-gray-600 font-medium">Graduated 2026</span>
              </div>
              <p className="text-gray-600 mb-2">Toronto, ON</p>
              <p className="text-lg font-semibold text-gray-900">GPA: 3.5/4.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12 text-gray-900">Technical Skills</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Kotlin', 'C#', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'Spring Cloud Gateway', 'Node.js', 'Express', 'FastAPI', 'Laravel', 'REST APIs', 'JWT', 'Keycloak'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend & Mobile</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vue.js', 'TypeScript', 'Android', 'Jetpack Compose', 'Room', 'MVVM'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Infrastructure & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kafka', 'Resilience4j', 'PostgreSQL', 'MongoDB', 'Git', 'Jenkins', 'Travis CI'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12 text-gray-900">Academic Projects</h2>

          {/* Featured Capstone Project */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="card bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-bold mr-4">
                  CAPSTONE PROJECT
                </span>
                <a
                  href="https://github.com/parsamollahoseini/Studdy-buddy-Project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  View on GitHub →
                </a>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Study Buddy</h3>
              <p className="text-gray-600 mb-4 font-medium">
                Spring Boot, Python, Docker, PostgreSQL, JWT, React, FastAPI
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                AI-powered study assistant platform that transforms student notes into interactive learning tools. Built with
                microservices architecture using Spring Boot for backend services, FastAPI for Python ML components, and React
                for the frontend. Implemented JWT authentication, containerized all services with Docker, and designed RESTful
                APIs for seamless integration.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>PDF/TXT upload and text extraction</li>
                    <li>Auto-generate flashcards & MCQs</li>
                    <li>Progress dashboard with analytics</li>
                    <li>User authentication with JWT</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Backend: Spring Boot, FastAPI (Python)</li>
                    <li>Frontend: React, TailwindCSS</li>
                    <li>Database: PostgreSQL</li>
                    <li>Deployment: Docker Compose</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Student Wellness Hub</h3>
              <p className="text-gray-600 mb-3 font-medium">Vue.js, PHP, Laravel, MySQL</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Full-stack web application for student mental health and wellness tracking. Built with Vue.js frontend
                and Laravel backend, featuring user authentication, wellness tracking, and resource management.
              </p>
              <a
                href="https://gitlab.com/parsamollahoseini/student-wellness-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View on GitLab →
              </a>
            </div>

            <div className="card">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Microservices System</h3>
              <p className="text-gray-600 mb-3 font-medium">Java, Spring Boot, Spring Cloud Gateway, Kafka, Docker</p>
              <p className="text-gray-700 leading-relaxed">
                Distributed backend system using Spring Cloud Gateway for centralized routing. Implemented Kafka messaging
                for asynchronous communication, Resilience4j circuit breakers for fault tolerance, and designed scalable
                service-to-service communication.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Employee Management System</h3>
              <p className="text-gray-600 mb-3 font-medium">React, Node.js, Express, MongoDB, TypeScript</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Full-stack CRUD application with React frontend and Node.js/Express backend. Features authentication,
                protected routes, MongoDB integration, and RESTful API design. Deployed to Vercel.
              </p>
              <a
                href="https://github.com/parsamollahoseini/101410911_comp3123_assignment2_reactjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View on GitHub →
              </a>
            </div>

            <div className="card">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Android Restaurant Guide</h3>
              <p className="text-gray-600 mb-3 font-medium">Kotlin, Jetpack Compose, Room, MVVM</p>
              <p className="text-gray-700 leading-relaxed">
                Modern Android application with offline-first architecture. Built using Kotlin and Jetpack Compose for UI,
                Room database for local storage, and MVVM pattern for clean architecture and maintainable code structure.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Design Patterns Implementation</h3>
              <p className="text-gray-600 mb-3 font-medium">C#, .NET</p>
              <p className="text-gray-700 leading-relaxed">
                Academic project implementing Observer and Iterator design patterns from scratch. Demonstrated clean
                architecture principles, proper encapsulation, interface design, and separation of concerns.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Additional Projects</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Gomoku Game (Java):</strong> Two-player strategy game with game state management</li>
                <li><strong>JavaFX Employee Manager:</strong> Desktop application with CRUD operations</li>
                <li><strong>CI/CD Projects:</strong> Jenkins & Travis CI pipeline implementations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12 text-gray-900">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="card text-center">
              <p className="text-xl text-gray-700 mb-8">
                I'm currently looking for opportunities in software development, particularly in backend systems,
                microservices, and full-stack development. Let's connect!
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="mailto:parsamollahoseini@gmail.com"
                  className="flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  parsamollahoseini@gmail.com
                </a>
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/parsamollahoseini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  GitHub Profile
                </a>
                <a
                  href="https://gitlab.com/parsamollahoseini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitLab Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center">
          <p className="text-gray-400">
            © 2026 Parsa Mollahoseini. Built with React & Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Toronto, ON | Computer Science Student
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
