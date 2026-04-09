"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ExternalLink, Github, Eye, Bot, BookOpen } from 'lucide-react';

/**
 * Projects Section - Enhanced with Framer Motion cards
 * Features: Staggered entry, hover scaling, soft shadows, detailed modals
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Aura AI",
      category: "AI Platform",
      description: "AI powered chatbot web application built using Next.js, MongoDB Atlas, Tailwind CSS, and GENERATIVE AI.",
      longDescription: "Aura AI is a production-ready AI chatbot platform built with Next.js App Router. It features a complete authentication system, real-time AI chat powered by Groq's ultra-fast API, and a premium dark-mode UI. Users can experience blazing-fast response times with conversation history.",
      technologies: ["Next.js", "MongoDB", "GENERATIVE AI", "Tailwind"],
      githubUrl: "https://github.com/vikashhanand/auraai",
      liveUrl: "https://auraai-zeta.vercel.app",
      featured: true,
      icon: Bot,
      color: "from-blue-500/10 to-purple-500/10"
    },
    {
      id: 2,
      title: "NextGenPrep",
      category: "EdTech",
      description: "Online preparation platform designed to help students practice technical interview questions.",
      longDescription: "NextGenPrep is a comprehensive online preparation platform built for students looking to crack technical interviews. It features curated practice questions, topic-wise categorization, and a focus on problem-solving practice.",
      technologies: ["Next.js", "React", "MongoDB", "Auth.js"],
      githubUrl: "https://github.com/vikashhanand/nextgenprep",
      liveUrl: "https://nextgenprep.vercel.app",
      featured: false,
      icon: BookOpen,
      color: "from-orange-500/10 to-red-500/10"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical applications of technical skills and problem-solving
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group h-full"
            >
              <Card className="h-full relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                {/* Decorative background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/5 rounded-2xl group-hover:bg-primary/10 transition-colors duration-500">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 animate-pulse">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/60">{project.category}</span>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed pt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-[10px] uppercase tracking-tighter bg-accent/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-background/50 hover:bg-primary hover:text-white transition-all duration-300">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="flex-1 shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
                          <Eye className="h-4 w-4 mr-2" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-background/95 backdrop-blur-xl border-border/50 rounded-[2rem]">
                        <DialogHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <project.icon className="h-8 w-8 text-primary" />
                            <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
                          </div>
                          <DialogDescription className="text-lg leading-relaxed pt-4">
                            {project.longDescription}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-8 pt-6">
                          <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                              Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="secondary" className="px-3 py-1 font-medium bg-primary/5 text-primary border-primary/10">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex gap-4 pt-4">
                            <Button className="flex-1 rounded-xl h-12 text-base font-semibold" asChild>
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-5 w-5 mr-2" />
                                Launch Site
                              </a>
                            </Button>
                            <Button variant="outline" className="flex-1 rounded-xl h-12 text-base font-semibold border-primary/20" asChild>
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5 mr-2" />
                                View Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
