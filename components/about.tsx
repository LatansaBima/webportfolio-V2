"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Shield, Cpu, Smartphone, Camera, Users, Languages } from "lucide-react"

const skills = [
  { name: "Web Development", icon: <Code className="h-6 w-6" /> },
  { name: "DevOps", icon: <Server className="h-6 w-6" /> },
  { name: "Cyber Security", icon: <Shield className="h-6 w-6" /> },
  { name: "AIoT", icon: <Cpu className="h-6 w-6" /> },
  { name: "Mobile Development", icon: <Smartphone className="h-6 w-6" /> },
  { name: "Photography & Videography", icon: <Camera className="h-6 w-6" /> },
  { name: "Team Collaboration", icon: <Users className="h-6 w-6" /> },
  { name: "Communication", icon: <Languages className="h-6 w-6" /> },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a sixth-semester Informatics Engineering student with a strong interest in web development, AIoT, and
              cybersecurity. I'm passionate about learning and adapting to new challenges. I work well both in teams and
              individually, prioritizing reliability, effective communication, and a problem-solving mindset in every
              project I undertake.
            </p>
            <p className="text-muted-foreground mb-6">
              Based in Banyuwangi, East Java, I'm currently pursuing my D4 degree at Politeknik Negeri Jember with a
              focus on web development technologies and maintaining a GPA of 3.8/4.0.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Laravel</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Docker</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Proxmox VE</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MikroTik</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="text-primary">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
