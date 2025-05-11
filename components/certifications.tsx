"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Junior Cyber Security",
    issuer: "Digital Talent Kominfo",
    year: "2024",
    link: "#",
  },
  {
    title: "Junior Web Developer",
    issuer: "Digital Talent Kominfo",
    year: "2023",
    link: "#",
  },
  {
    title: "KKNI Level 2 Teknik Komputer dan Jaringan",
    issuer: "Badan Nasional Sertifikasi Profesi",
    year: "2022",
    link: "#",
  },
  {
    title: "MikroTik Certified Network Associate",
    issuer: "MikroTik",
    year: "2022",
    link: "#",
  },
  {
    title: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar",
    issuer: "Badan Eksekutif Mahasiswa Politeknik Negeri Jember",
    year: "2023",
    link: "#",
  },
]

const achievements = [
  {
    title: "SemiFinalist Samsung Innovation Campus - Batch 5",
    organizer: "Samsung Indonesia & Skilvul",
    year: "2024",
    description:
      "Project: Smart Air Presence System, an IoT system for AC temperature control based on room occupancy and capacity",
  },
  {
    title: "Juara 3 Aplikasi Terbaik, TIF Exhibition",
    organizer: "Jurusan Teknologi Informasi Politeknik Negeri Jember",
    year: "2023",
    description:
      "Project: Sistem Informasi Competition Center, a platform for competition information and team formation",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base">{cert.title}</CardTitle>
                        <Badge variant="outline">{cert.year}</Badge>
                      </div>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto pt-0">
                      <Button asChild variant="ghost" size="sm" className="gap-1 text-xs">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          View Certificate
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                      <p className="text-primary text-sm mb-2">{achievement.organizer}</p>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
