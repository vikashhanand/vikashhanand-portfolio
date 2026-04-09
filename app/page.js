"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

/**
 * Main Portfolio Page - Vikash Anand
 * Features: Framer Motion page load, staggered reveal, responsive design
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
          
          <div className="space-y-0">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      <Toaster />
    </div>
  );
}
