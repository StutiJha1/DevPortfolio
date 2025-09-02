const projects = [
  { name: "Project 1", description: "Description of project 1", link: "#" },
  { name: "Project 2", description: "Description of project 2", link: "#" },
  { name: "Project 3", description: "Description of project 3", link: "#" },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-maroon text-white" id="projects">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white text-maroon p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold mb-2">{proj.name}</h3>
            <p className="mb-4">{proj.description}</p>
            <a href={proj.link} className="text-maroon hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
