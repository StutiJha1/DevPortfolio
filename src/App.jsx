// src/App.jsx
import { useRef } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="relative bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-10 py-4 flex justify-end">
          <ul className="flex gap-16 font-semibold text-maroon text-xl">
            <li>
              <a href="#about" className="hover:text-red-700 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-red-700 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-red-700 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-700 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero / About Section */}
      <Hero ref={aboutRef} />

      {/* Portfolio Sections */}
      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}

export default App;
