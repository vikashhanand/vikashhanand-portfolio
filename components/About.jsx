"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Code, Trophy, Heart, User } from 'lucide-react';

/**
 * About Section - Enhanced with modern layout and animations
 * Features: Profile image area with gradients, staggered highlights, scroll reveal
 */
const About = () => {
  // CONFIGURATION: Change your profile image path here
  const PROFILE_IMAGE_URL = "/profile.jpg"; // Path in the /public folder

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Pursuing B.Tech in Computer Science at Chandigarh University (2022-2026)",
    },
    {
      icon: Code,
      title: "Projects",
      description: "Built Aura AI and NextGenPrep – production-ready web applications with modern tech stack",
    },
    {
      icon: Trophy,
      title: "Certifications",
      description: "Blockchain certification from Metacrafters, IoT certification from SWAYAM",
    },
    {
      icon: Heart,
      title: "Interests",
      description: "AI-powered applications, scalable backend systems, clean UI design, and cricket",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and fueled by code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Photo Area - Left on Desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative group">
              {/* Outer decorative gradient ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/40 via-transparent to-primary/40 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-2 border-primary/20 bg-background shadow-2xl flex items-center justify-center p-2"
              >
                {/* Background gradient inside the photo area */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent flex items-center justify-center">
                  <User className="h-24 w-24 text-primary/40 absolute" />
                  <img 
                    src={PROFILE_IMAGE_URL} 
                    alt="Vikash Anand" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                    loading="lazy"
                    onError={(e) => { e.target.style.opacity = '0'; }}
                  />
                  
                  {/* Inner overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                </div>
              </motion.div>
              
              {/* Floating badges/stats (Visual candy) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-10 z-20 bg-background/80 backdrop-blur-md border border-border p-3 rounded-xl shadow-lg hidden md:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider">Available for work</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Area - Right on Desktop */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <p className="text-xl leading-relaxed text-foreground/90 font-medium">
                I’m <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent font-bold">Vikash Anand</span>, a results-driven <span className="text-primary">Full Stack Developer</span> focused on building <span className="text-foreground font-bold">fast, scalable, and visually polished</span> web applications that deliver real impact. I specialize in modern technologies like <span className="text-primary">Next.js, React, Node.js, MongoDB</span>, and <span className="text-primary">Tailwind CSS</span>, creating seamless digital experiences that combine performance with clean design.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground border-l-2 border-primary/20 pl-6 italic">
                I believe great software is not just about writing code — it’s about solving problems efficiently and building products that users actually enjoy using. My development approach focuses on <span className="text-foreground font-semibold">performance optimization, scalable architecture, and intuitive user experience</span>.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I continuously push myself to learn, adapt, and implement modern best practices in web development. I enjoy tackling challenging problems and turning ideas into reliable, production-ready solutions. If you&apos;re looking for a developer who is passionate about building high-quality applications and delivering meaningful results, I’m ready to contribute and grow with your team.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4 pt-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, borderColor: "hsl(var(--primary) / 0.3)" }}
                  className="bg-background/50 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-border/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-xl">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-tight mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-muted-foreground italic border-l-4 border-primary/30 pl-4 py-1">
                &ldquo;Building tomorrow&apos;s web, one line of code at a time.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
