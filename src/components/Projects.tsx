import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "AI-Powered Code Review Assistant",
    description:
      "A developer tool that uses GPT-4 to automatically review pull requests, suggest improvements, and detect potential bugs. Integrates seamlessly with GitHub via webhooks.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "LangChain", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/vikashhanand",
  },
  {
    title: "Real-Time Collaboration Platform",
    description:
      "A Notion-like collaborative document editor with real-time sync, rich-text editing, commenting, and role-based access control built for remote teams.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "AWS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/vikashhanand",
  },
  {
    title: "Full-Stack E-Commerce Engine",
    description:
      "Scalable e-commerce platform with product catalogue, shopping cart, Stripe payments, order management, and an admin dashboard with analytics.",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS", "Vercel"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/vikashhanand",
  },
  {
    title: "NLP Sentiment Analysis API",
    description:
      "REST API that performs multi-class sentiment analysis on text using fine-tuned transformer models. Includes batch processing, caching, and usage analytics.",
    techStack: ["Python", "FastAPI", "HuggingFace", "Redis", "Docker", "GCP"],
    repoUrl: "https://github.com/vikashhanand",
  },
  {
    title: "DevOps Pipeline Dashboard",
    description:
      "A monitoring dashboard for CI/CD pipelines that aggregates data from GitHub Actions, AWS CodePipeline, and Kubernetes deployments in one unified view.",
    techStack: ["React", "TypeScript", "GraphQL", "Kubernetes", "GitHub Actions", "Grafana"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/vikashhanand",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "Mobile-first finance tracker with expense categorisation, budget planning, charts, and AI-generated insights to help users reach their savings goals.",
    techStack: ["React Native", "Expo", "Supabase", "OpenAI API", "Tailwind CSS"],
    repoUrl: "https://github.com/vikashhanand",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-gray-800 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills across full-stack development,
            AI integration, and cloud architecture.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/vikashhanand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.3 9.4 7.87 10.93.58.1.79-.25.79-.56v-2.03c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.96 10.96 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.2.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
