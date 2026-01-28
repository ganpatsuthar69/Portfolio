"use client"
import { motion, type Variants } from "framer-motion"
import { CheckCircle2, Code } from "lucide-react"

const highlights = [
  "Python Backend (FastAPI)",
  "REST APIs & JWT Authentication",
  "React + FastAPI Integration",
  "PostgreSQL & Redis (Basic Usage)",
  "Data Structures & Problem Solving",
  "NumPy & Pandas (Data Handling)",
]


export function AboutSection() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "backOut" }
    }
  }

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Code size={16} />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Behind the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Code</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-8"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed text-center"
            >
             I’m Ganpat, a Backend-focused MCA Student who builds reliable APIs and scalable systems.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-foreground/70 text-lg leading-relaxed text-center"
            >
              <p>
                I primarily work with <strong>Python and FastAPI</strong> to build RESTful Backend Services,
                focusing on clean API Design, Authentication, and Maintainable Code.
              </p>
              <p>
                I’ve integrated FastAPI backends with <strong>React (Vite + TypeScript)</strong> frontends
                and implemented features like JWT Authentication, OTP Verification, and User Profiling
                in real projects such as <strong>LearnFlow</strong>.
              </p>
              <p>
                Alongside development, I actively practice <strong>Data Structures & Algorithms </strong>
                 and work with <strong>PostgreSQL and Redis</strong> for basic data storage and caching needs.
                I also leverage <strong>NumPy and Pandas</strong> for efficient data manipulation and analysis
                to support data-driven application features.
              </p>

            </motion.div>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4 pt-8">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50 hover:bg-muted transition-colors justify-center"
                >
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span className="text-foreground/80 font-medium">{highlight}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
