export const SkillsSection = () => (
  <section className="-mt-28 pt-40 pb-28 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white relative z-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center">My Skillset</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {[
          "React",
          "Node.js",
          "TypeScript",
          "Tailwind",
          "Docker",
          "PostgreSQL",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20 text-center hover:bg-white/20 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);
