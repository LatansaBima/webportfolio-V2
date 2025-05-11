"use client"

import { motion } from "framer-motion"
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@/components/ui/timeline"
import { Card } from "@/components/ui/card"
import { Server, Database, Wrench } from "lucide-react"

const experiences = [
  {
    title: "Junior DevOps Engineer",
    company: "SMKN 4 Jember",
    period: "Mar 2025 - Present",
    description: ["Managing virtual servers with Proxmox VE platform", "Configuring web services using Docker"],
    icon: <Server className="h-4 w-4" />,
  },
  {
    title: "Data Analyst",
    company: "PT Global Data Inspirasi",
    period: "Sep 2024 - Dec 2024",
    description: [
      "Created chatbot datasets by collecting, cleaning, and validating data about super priority tourism destinations (DPSP)",
      "Deployed AI models to website systems",
      "Worked in a collaborative development team between DataIns and BRIN",
    ],
    icon: <Database className="h-4 w-4" />,
  },
  {
    title: "IT Support",
    company: "Taman Nasional Bali Barat",
    period: "Jan 2021 - Apr 2021",
    description: [
      "Performed installation, configuration, and troubleshooting of computer and application issues",
      "Created vector-based designs using CorelDRAW",
      "Conducted photography, videography, and editing for virtual tour preparation during COVID-19",
      "Prepared equipment and room arrangements for meetings (LCD projectors, smart TVs, internet connections, etc.)",
    ],
    icon: <Wrench className="h-4 w-4" />,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Timeline>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TimelineItem>
                  {index < experiences.length - 1 && <TimelineConnector />}
                  <TimelineHeader>
                    <TimelineIcon className="bg-primary/20 text-primary">{exp.icon}</TimelineIcon>
                    <Card className="p-4 w-full">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <TimelineBody>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </TimelineBody>
                    </Card>
                  </TimelineHeader>
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}
