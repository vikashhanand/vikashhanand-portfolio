"use client";

import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, GitBranch, Smartphone } from 'lucide-react';

/**
 * Skills Section - Enhanced with Framer Motion
 * Features: Staggered reveal, interactive chips, scroll-aware entry
 */
const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
      color: "text-blue-500",
      bg: "bg-blue-500/5"
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", "Express.js"],
      color: "text-green-500",
      bg: "bg-green-500/5"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB"],
      color: "text-purple-500",
      bg: "bg-purple-500/5"
    },
    {
      icon: GitBranch,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code"],
      color: "text-orange-500",
      bg: "bg-orange-500/5"
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "C", "C++", "Java"],
      color: "text-cyan-500",
      bg: "bg-cyan-500/5"
    },
    {
      icon: Smartphone,
      title: "Soft Skills",
      skills: ["Team Collaboration", "Problem Solving", "Critical Thinking"],
      color: "text-pink-500",
      bg: "bg-pink-500/5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills &amp; Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern development challenges
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 group`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl ${category.bg} group-hover:scale-110 transition-transform duration-500`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center px-3 py-1.5 bg-accent/40 text-accent-foreground text-[10px] font-bold uppercase tracking-tighter rounded-lg border border-border/30 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/5 via-background to-primary/5 border border-primary/10 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Technical Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              &ldquo;I believe in writing clean, maintainable code that solves real-world problems.
              My approach combines strong fundamentals in computer science with modern web development practices,
              ensuring both technical excellence and user-centered design.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
