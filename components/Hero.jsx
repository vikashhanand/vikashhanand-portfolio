"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

/**
 * Hero Section - Enhanced with Framer Motion
 * Features: Staggered text reveal, floating background effects, animated social links
 */
const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/vikashhanand', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vikashhanand', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/vikashhanand', label: 'Twitter' },
    { icon: Mail, href: 'mailto:vikashhanand@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+917903221054', label: 'Phone' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with subtle gradient motion */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-10 dark:opacity-20 transition-all duration-1000"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 hero-gradient opacity-90 dark:opacity-100"
        />
        
        {/* Animated accent blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] pointer-events-none"
        />
      </div>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center container-width"
      >
        <div className="max-w-4xl mx-auto px-4">
          {/* Main Heading with split-line effect */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Hi, I&apos;m{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary via-foreground/80 to-primary bg-clip-text text-transparent inline-block"
              animate={{ backgroundPosition: ["0%", "200%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Vikash Anand
            </motion.span>
          </motion.h1>

          {/* Tagline Reveal */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light flex items-center justify-center gap-3">
              <span className="w-12 h-[1px] bg-primary/30"></span>
              Full Stack Developer
              <span className="w-12 h-[1px] bg-primary/30"></span>
            </p>
          </motion.div>

          {/* Description line reveal */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating beautiful, functional web experiences and solving complex problems through code.
            Skilled in building modern web applications with AI-powered features.
          </motion.p>

          {/* CTA Buttons with hover scaling */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium shadow-elegant w-full sm:w-auto"
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium w-full sm:w-auto"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with staggered rise */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1, color: "hsl(var(--primary))" }}
                className="p-3 rounded-full bg-accent/30 hover:bg-accent/50 text-muted-foreground transition-colors shadow-sm"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            variants={itemVariants}
            onClick={() => scrollToSection('about')}
            className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Scroll to about section"
          >
            <motion.span 
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="text-xs font-medium mb-3 uppercase tracking-widest"
            >
              Explore
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
