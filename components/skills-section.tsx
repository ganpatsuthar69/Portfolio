"use client"

import { motion, type Variants } from "framer-motion"
import {
  Code2,
  Layers,
  Database,
  Wrench,
  type LucideIcon
} from "lucide-react"

/* ===============================
   SKILLS DATA
================================ */

type SkillCategory = {
  title: string
  icon: LucideIcon
  skills: string[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "Java", "SQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React", "FastAPI", "Tailwind CSS", "NumPy", "Pandas"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["PostgreSQL", "Redis"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "RESTful APIs",
      "Postman",
      "VS Code",
      "MS Excel",
    ],
    color: "from-orange-500 to-red-500",
  },
]

/* ===============================
   ANIMATION VARIANTS
================================ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      // When card becomes visible, stagger its children (the skills)
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
}

const skillBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

/* ===============================
   MAIN SECTION
================================ */

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 lg:px-8 bg-muted/30 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A structured overview of my technical expertise across languages,
            frameworks, databases, and development tools.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ===============================
   SKILL CARD COMPONENT
================================ */

function SkillCard({ category }: { category: SkillCategory }) {
  const Icon = category.icon

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="
        bg-card
        border border-border
        rounded-2xl
        p-6
        shadow-sm
        hover:shadow-xl hover:shadow-primary/10
        transition-shadow duration-300
        group
        h-full
        flex flex-col
        items-center
        text-center
        relative
        z-10
      "
    >
      {/* Moving gradient border on hover (Optional enhanced effect) */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className={`
          mb-6
          p-4
          rounded-xl
          bg-gradient-to-br ${category.color}
          shadow-lg
          transition-transform duration-300
        `}
      >
        <Icon size={32} className="text-white drop-shadow-md" />
      </motion.div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-5 tracking-tight">
        {category.title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2">
        {category.skills.map((skill, idx) => (
          <motion.span
            key={idx}
            variants={skillBadgeVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            className="
              px-3 py-1.5
              text-sm
              font-medium
              rounded-lg
              bg-muted/80
              text-foreground/80
              border border-border/50
              hover:bg-primary/10
              hover:text-primary
              hover:border-primary/20
              transition-colors
              cursor-default
            "
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
