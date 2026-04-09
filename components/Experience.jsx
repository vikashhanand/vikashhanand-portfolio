"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

/**
 * Experience & Education Section - Enhanced with Framer Motion
 * Features: Staggered entry, interactive timeline cards, scroll-aware reveal
 */
const Experience = () => {
  const experiences = [
    {
      company: "Intel",
      role: "Software Development Intern",
      period: "May 2025 - June 2025",
      location: "India",
      description: "Gaining hands-on experience in software development, working on cutting-edge technologies and contributing to real-world projects in a global tech environment.",
      highlights: ["Software Development", "Team Collaboration", "Industry Best Practices", "Technical Innovation"],
      status: "Completed",
      type: "internship"
    }
  ];

  const education = [
    {
      institution: "Chandigarh University",
      degree: "Bachelor of Technology - CSE (Final Year)",
      period: "2022 - 2026",
      location: "Punjab, India",
      description: "Pursuing comprehensive computer science education with focus on full stack development and emerging technologies. Currently in final year.",
      highlights: ["Full Stack Development", "Algorithms", "Software Engineering", "DBMS"],
      status: "Current"
    }
  ];

  const certifications = [
    {
      title: "Blockchain Fundamentals",
      issuer: "Metacrafters",
      date: "2024",
      description: "Comprehensive blockchain technology certification covering smart contracts and Web3 development.",
      skills: ["Blockchain", "Solidity", "Web3"],
      credentialUrl: "#"
    },
    {
      title: "Internet of Things (IoT)",
      issuer: "SWAYAM",
      date: "2024",
      description: "IoT certification covering device connectivity and sensor networks.",
      skills: ["IoT", "Embedded Systems", "Arduino"],
      credentialUrl: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience, education, and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience & Education */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                Professional Experience
              </h3>
              
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ x: 5 }}>
                  <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                          <CardDescription className="text-primary font-semibold">{exp.company}</CardDescription>
                        </div>
                        <Badge variant={exp.status === 'Completed' ? 'secondary' : 'default'} className="rounded-lg">
                          {exp.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {exp.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm leading-relaxed text-muted-foreground">
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h, i) => (
                          <Badge key={i} variant="outline" className="text-[10px] bg-accent/30">{h}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ x: 5 }}>
                  <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                          <CardDescription className="font-semibold">{edu.institution}</CardDescription>
                        </div>
                        <Badge variant="outline" className="rounded-lg border-primary/20 text-primary">{edu.status}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-3">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {edu.period}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {edu.location}</span>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="h-6 w-6 text-primary" />
              </div>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div key={index} whileHover={{ y: -5 }}>
                  <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-300">
                    <CardHeader className="py-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{cert.title}</CardTitle>
                          <CardDescription className="text-primary font-medium">{cert.issuer}</CardDescription>
                        </div>
                        <span className="text-xs font-bold text-muted-foreground">{cert.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground py-2">
                      <p className="mb-3">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((s, i) => (
                          <Badge key={i} variant="secondary" className="text-[9px] uppercase tracking-tighter bg-accent/50">{s}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
