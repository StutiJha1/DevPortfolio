const skills = ["Python", "Java", "C", "React", "HTML", "CSS", "JavaScript"];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-white text-maroon" id="skills">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-4 py-2 bg-maroon text-white rounded-full shadow-md">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
