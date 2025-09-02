import { useRef } from "react";
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
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-10 py-4 flex justify-end">
          <ul className="flex gap-[7rem] font-semibold text-maroon">
            <li>
              <a
                href="#about"
                className="px-4 hover:text-red-700 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="px-4 hover:text-red-700 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="px-4 hover:text-red-700 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-4 hover:text-red-700 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Portfolio sections */}
      <section
        id="about"
        ref={aboutRef}
        className="min-h-screen flex flex-col justify-center items-center bg-white text-maroon"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Stuti Jha</h1>
        <p className="text-2xl">A Computer Science Student & Developer</p>
      </section>

      <Projects ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}

export default App;
