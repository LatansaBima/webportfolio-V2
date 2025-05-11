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
import { GraduationCap } from "lucide-react"

const education = [
  {
    institution: "Politeknik Negeri Jember",
    degree: "D4 Teknik Informatika",
    period: "2022 - Present",
    description: "Specializing in web development with a GPA of 3.8/4.0",
  },
  {
    institution: "SMK Negeri 1 Glagah",
    degree: "Teknik Komputer dan Jaringan",
    period: "2019 - 2022",
    description:
      "Studied basic networking, network infrastructure, computer hardware, and servers with a score of 90.75/100",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Timeline>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TimelineItem>
                  {index < education.length - 1 && <TimelineConnector />}
                  <TimelineHeader>
                    <TimelineIcon className="bg-primary/20 text-primary">
                      <GraduationCap className="h-4 w-4" />
                    </TimelineIcon>
                    <Card className="p-4 w-full">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold">{edu.institution}</h3>
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-primary font-medium mb-3">{edu.degree}</p>
                      <TimelineBody>
                        <p className="text-muted-foreground">{edu.description}</p>
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
