"use client"

import { motion, type Variants } from "framer-motion"
import { Mail, Linkedin, Github, Instagram, MessageSquare, Phone } from "lucide-react"

export function ContactSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ganpatsuthar69", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ganpatsuthar/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/mrg.zxd", label: "Instagram" },
    { icon: Mail, href: "mailto:ganpatsutharhere@gmail.com", label: "Email" },
  ]

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "backOut" }
    }
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <MessageSquare size={16} />
            <span>Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Let's Build Something <span className="text-primary">Impactful</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? I'm always open to discussing new opportunities.
          </p>
          <br></br>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Phone size={16} />
            <span>Udaipur, Rajasthan · +91 8000848923 · ganpatsutharhere@gmail.com</span>
          </div>
        </motion.div>

        <div className="flex justify-center">
          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-3xl"
          >
            <motion.div
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      backgroundColor: "var(--primary)",
                      borderColor: "var(--primary)",
                      color: "#ffffff",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 rounded-2xl bg-card border border-border transition-all duration-300 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-xl hover:shadow-primary/30 aspect-square sm:aspect-auto sm:py-8"
                  >
                    <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <Icon size={32} />
                    </div>
                    <span className="font-semibold text-lg text-foreground group-hover:text-white transition-colors">{social.label}</span>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
