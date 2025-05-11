"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Cpu, Database, Server, Shirt } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Smart Air Presence System",
    description: "IoT system for AC temperature control based on room occupancy and capacity",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["IoT", "Python", "ESP32", "Face Recognition", "Flask", "Streamlit"],
    longDescription:
      "An IoT system for AC temperature regulation based on room occupancy and capacity. Uses ESP32 as the microcontroller supported by DHT11 sensor to monitor room temperature and infrared sensor to control the AC system. Attendance is done using face recognition with the face_recognition library. Data is then processed with a Python-based API, Flask, and displayed on a Python-based website, Streamlit.",
    links: {
      demo: "#",
      github: "#",
    },
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Sistem Informasi Magang 'Internify'",
    description: "Internship information system platform",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web Development", "Laravel", "MySQL", "Bootstrap"],
    longDescription:
      "A comprehensive internship information system that connects students with companies offering internship opportunities. The platform allows students to browse, apply, and track internship applications, while companies can post opportunities and manage applicants. Built with Laravel, MySQL, and Bootstrap.",
    links: {
      demo: "#",
      github: "#",
    },
    icon: <Database className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Sistem Informasi Competition Center",
    description: "Platform for competition information and team formation",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web Development", "Laravel", "Java", "Mobile"],
    longDescription:
      "A web and mobile-based platform that serves as a competition information center and gathers IT students who want to participate in national-scale competitions. The platform was developed with Laravel for the web version and Java for the mobile application. This project won 3rd place for Best Application at TIF Exhibition.",
    links: {
      demo: "#",
      github: "#",
    },
    icon: <Server className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Sistem Informasi Laundry Laverie",
    description: "Laundry management system",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web Development", "PHP", "MySQL", "Bootstrap"],
    longDescription:
      "A comprehensive laundry management system that helps laundry businesses manage their operations, including customer management, order tracking, inventory management, and financial reporting. Built with PHP, MySQL, and Bootstrap.",
    links: {
      demo: "#",
      github: "#",
    },
    icon: <Shirt className="h-5 w-5" />,
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                    <div className="text-primary">{project.icon}</div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" className="w-full" onClick={() => setSelectedProject(project)}>
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      {selectedProject && (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                            <DialogDescription className="flex items-center gap-2 pt-2">
                              <Badge variant="outline">{selectedProject.year}</Badge>
                            </DialogDescription>
                          </DialogHeader>
                          <div className="relative h-64 my-4 rounded-lg overflow-hidden">
                            <Image
                              src={selectedProject.image || "/placeholder.svg"}
                              alt={selectedProject.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="space-y-4">
                            <p>{selectedProject.longDescription}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {selectedProject.tags.map((tag, i) => (
                                <Badge key={i} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-4">
                              <Button asChild variant="outline" className="gap-2">
                                <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4" />
                                  GitHub
                                </a>
                              </Button>
                              <Button asChild className="gap-2">
                                <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4" />
                                  Live Demo
                                </a>
                              </Button>
                            </div>
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
