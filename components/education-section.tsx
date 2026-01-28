"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const mcaCoursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Object-Oriented Programming",
  "Software Engineering",
  "Web Technologies",
]

export function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-primary">Education</span> & Certifications
          </h2>
          <p className="text-lg text-foreground/70">
            Strong academic foundation with continuous technical growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/20">
                <GraduationCap className="text-primary" size={26} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>

            {/* MCA */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-foreground">
                Master of Computer Applications (MCA)
              </h4>
              <p className="text-sm text-primary font-medium">
                Currently Pursuing · 2024 – 2026
              </p>
              <p className="text-sm text-foreground/70">
                Mohanlal Sukhadia University, Udaipur
              </p>
              <p className="text-sm text-foreground/60 mt-1">
                SGPA (Semester 2): <span className="font-semibold text-foreground">8.0</span>
              </p>

              <p className="text-sm text-foreground/80 mt-3">
                Focused on core computer science subjects with a strong inclination
                towards backend development, API design, databases, and scalable
                application architecture.
              </p>

              {/* MCA Coursework */}
              <div className="mt-4">
                <h5 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">
                  Key Coursework
                </h5>
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {mcaCoursework.map((course, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-foreground/80">{course}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* BSc */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground">
                Bachelor of Science (PCM)
              </h4>
              <p className="text-sm text-foreground/70">
                Mohanlal Sukhadia University, Udaipur
              </p>
              <p className="text-sm text-foreground/60">
                2021 – 2024
              </p>
              <p className="text-sm text-foreground/80 mt-2">
                Developed strong foundations in mathematics, physics, and analytical
                thinking, supporting advanced problem-solving in computer science.
              </p>
            </div>

            {/* 12th */}
            <div>
              <h4 className="font-semibold text-foreground">
                Senior Secondary (12th) – Science (PCM)
              </h4>
              <p className="text-sm text-foreground/70">
                Jyoti Senior Secondary School, Udaipur
              </p>
              <p className="text-sm text-foreground/60">
                RBSE Board, Rajasthan · <span className="font-semibold text-foreground">91.2%</span>
              </p>
              <p className="text-sm text-foreground/80 mt-2">
                Achieved excellent academic performance with a strong grasp of
                Physics, Chemistry, and Mathematics.
              </p>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/20">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Certifications & Participations
              </h3>
            </div>

            <ul className="space-y-5">
              <li className="flex gap-3">
                <span className="text-xl">🏆</span>
                <div>
                  <p className="font-medium text-foreground">
                    Smart India Hackathon (SIH)
                  </p>
                  <p className="text-sm text-foreground/70">
                    College Level Internal Round Qualified
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1KbRjF2zrvGU7xNrJ-A_DZpmMWy08EqUi/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="text-xl">🤖</span>
                <div>
                  <p className="font-medium text-foreground">
                    NVIDIA Deep Learning Course
                  </p>
                  <p className="text-sm text-foreground/70">
                    9 Hours · Fundamentals of Deep Learning
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1g_-409uOj0SQmLwl7GycHwlJk7YymhYy/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="text-xl">⚛️</span>
                <div>
                  <p className="font-medium text-foreground">
                    ReactJS Certification
                  </p>
                  <p className="text-sm text-foreground/70">
                    Hands-on frontend development with React
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1nSogQ8dPQcIZeZJXHQo354N9GnqonP2a/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
