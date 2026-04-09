const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Node.js", "Python", "FastAPI", "Express", "REST APIs", "GraphQL"] },
  { category: "AI / Data", items: ["LangChain", "OpenAI API", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"] },
  { category: "DevOps / Tools", items: ["Docker", "AWS", "GitHub Actions", "PostgreSQL", "MongoDB", "Redis"] },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I&apos;m a full-stack software engineer with a passion for building scalable,
                AI-powered web applications. With experience across the entire development
                stack, I specialise in turning complex problems into elegant, user-friendly solutions.
              </p>
              <p>
                My journey in tech has led me through various domains — from crafting
                responsive frontends with React and Next.js to architecting backend systems
                with Node.js and Python, and integrating cutting-edge AI capabilities using
                LangChain and OpenAI.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring the latest developments
                in AI, contributing to open-source projects, or writing about software
                engineering best practices.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: "3+", label: "Years Exp." },
                { value: "20+", label: "Projects" },
                { value: "10+", label: "Technologies" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20"
                >
                  <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills &amp; Technologies
            </h3>
            <div className="space-y-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
