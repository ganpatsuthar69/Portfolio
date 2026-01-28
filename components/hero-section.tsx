"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  /* Container animation - Faster stagger */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ganpatsuthar69",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ganpatsuthar",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ganpatsutharhere@gmail.com",
      label: "Email",
    },
  ]

  /* Item animation - Snappier with spring */
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5,
      },
    },
  }

  /* Name letter animation - More dynamic */
  const letterVariants: Variants = {
    hidden: { y: 50, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const name = "Ganpat Suthar"

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-gradient-to-br from-white via-neutral-50 to-white dark:from-background dark:via-background dark:to-background">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ================= TEXT CONTENT ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* INTRO */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start mb-4"
            >
              <span className="text-xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-foreground px-1 leading-tight tracking-tight">
                Hi, I&apos;m
              </span>
            </motion.div>

            {/* NAME */}
            <motion.h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 flex flex-wrap justify-center lg:justify-start">
              {name.split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.15,
                    rotate: [-5, 5, -5, 0],
                    transition: { duration: 0.3 },
                  }}
                  className={`${
                    char === " " ? "w-4" : ""
                  } bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-default inline-block`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* SUB HEADLINE */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-foreground mb-8 leading-tight tracking-tight"
            >
              Building{" "}
              <span className="text-neutral-600 dark:text-foreground/80">
                Scalable Systems
              </span>
              <br className="hidden lg:block" /> &{" "}
              <span className="text-neutral-600 dark:text-foreground/80">
                User Experiences
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-neutral-600 dark:text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Full Stack Developer focused on Clean Architecture and Building
              Scalable Real-world Software.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-shadow group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl border border-neutral-200 dark:border-primary text-primary hover:bg-neutral-50 dark:hover:bg-primary/5 font-semibold transition-colors shadow-sm hover:shadow-md"
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-6"
            >
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{
                    y: -8,
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: {
                      y: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                      rotate: { duration: 0.4 },
                    },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm hover:shadow-md"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= IMAGE CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 0.2,
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-40"
              />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-4 bg-primary/20 rounded-full blur-3xl"
              />

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 2, -2, 0],
                  transition: {
                    scale: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    },
                    rotate: { duration: 0.5 },
                  },
                }}
                className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-background shadow-2xl z-10 bg-background"
              >
                <Image
                  src="/placeholder-user.jpg"
                  alt="Ganpat Suthar"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
