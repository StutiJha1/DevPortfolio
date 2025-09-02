// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
        <ul className="flex gap-20">
          <li>
            <a
              href="#about"
              className="text-4xl font-bold text-maroon hover:text-red-700 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-4xl font-bold text-maroon hover:text-red-700 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-4xl font-bold text-maroon hover:text-red-700 transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-4xl font-bold text-maroon hover:text-red-700 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
