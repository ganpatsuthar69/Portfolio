"use client"
import { motion, type Variants } from "framer-motion"
import { ExternalLink, Github, Code2, Layers } from "lucide-react"

const projects = [
  {
    title: "LearnFlow",
    tagline: "Learning & Productivity Platform",
    description:
      "A backend-focused learning and productivity platform designed to manage user authentication, learning progress, quizzes, and personalized roadmaps. Built to strengthen real-world API design, authentication, and frontend-backend integration skills.",
    features: [
      "OTP-based Authentication",
      "JWT Authorization",
      "User Profiling & Management",
      "Quiz & Progress Tracking (In Progress)",
      "Roadmaps & Learning Modules (In Progress)",
    ],
    stack: ["FastAPI", "React", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    github: "https://github.com", // replace with actual repo link
    demo: null,
    featured: true,
    status: "In Development",
  },
]


export function ProjectsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "backOut" as const }
    }
  }

  const containerVariants: Variants = {
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 overflow-hidden bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Layers size={16} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-neutral-900 dark:text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-foreground/70 max-w-2xl mx-auto">
            Showcasing real-world applications built with modern tech stacks.
          </p>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              {project.featured ? <FeaturedProjectCard project={project} /> : <ProjectCard project={project} />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="relative p-6 sm:p-10 rounded-3xl bg-white dark:bg-card border border-neutral-200 dark:border-border shadow-xl dark:shadow-2xl overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-sm">
              Featured Project
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${project.status === "In Development" ? "border-yellow-500/50 text-yellow-500 bg-yellow-500/10" : "border-green-500/50 text-green-500 bg-green-500/10"}`}>
              {project.status}
            </span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-2 text-neutral-900 dark:text-foreground text-balance">{project.title}</h3>
            <p className="text-xl text-primary font-medium">{project.tagline}</p>
          </div>

          <p className="text-lg text-neutral-600 dark:text-foreground/80 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span key={idx} className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-muted text-neutral-700 dark:text-foreground/80 font-medium text-sm border border-neutral-200 dark:border-border/50">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
            >
              <Github size={20} />
              <span>Source Code</span>
            </motion.a>
            {project.demo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.demo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 dark:border-primary text-primary hover:bg-neutral-50 dark:hover:bg-primary/5 font-semibold transition-colors shadow-sm"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Feature List Side */}
        <div className="bg-neutral-50 dark:bg-muted/30 p-8 rounded-2xl border border-neutral-200 dark:border-border/50 h-full">
          <h4 className="flex items-center gap-2 font-bold text-lg mb-6 text-neutral-900 dark:text-foreground">
            <Code2 className="text-primary" size={24} />
            Key Features
          </h4>
          <ul className="space-y-4">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-neutral-700 dark:text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, borderColor: "var(--primary)" }}
      className="p-8 rounded-2xl bg-white dark:bg-card border border-neutral-200 dark:border-border/60 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-2">
            <Layers size={24} />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-muted text-neutral-600 dark:text-muted-foreground">{project.status}</span>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-1 text-neutral-900 dark:text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-neutral-500 dark:text-muted-foreground font-medium">{project.tagline}</p>
        </div>
      </div>

      <p className="text-neutral-600 dark:text-foreground/70 mb-6 flex-grow leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech, idx) => (
          <span key={idx} className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-muted/50 text-xs font-medium text-neutral-600 dark:text-foreground/60 border border-neutral-200 dark:border-border/50">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-auto border-t border-neutral-100 dark:border-border/50 pt-6">
        <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
          <span>Code</span>
        </a>
        {project.demo && (
          <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink size={18} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}
