"use client";

import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Twitter, Mail, ArrowUp } from 'lucide-react';

/**
 * Footer Component - Enhanced with Framer Motion
 * Features: Social media links, copyright notice, back-to-top button
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/vikashhanand', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vikashhanand', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/vikashhanand', label: 'Twitter' },
    { icon: Mail, href: 'mailto:vikashhanand@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border overflow-hidden">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-2 space-y-6">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors"
              >
                VA<span className="text-primary">.</span>
              </motion.button>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Passionate full stack developer crafting innovative digital solutions 
                with clean code and user-centric design principles.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1, color: "hsl(var(--primary))" }}
                    className="p-3 rounded-xl bg-accent/30 hover:bg-accent/50 text-muted-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Navigation</h3>
              <nav className="flex flex-col space-y-4">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="w-fit text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Connection</h3>
              <div className="space-y-4">
                <a
                  href="mailto:vikashhanand@gmail.com"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  vikashhanand@gmail.com
                </a>
                <p className="text-sm text-muted-foreground">Punjab, India</p>
                
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ y: -5 }}
                  className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary"
                >
                  Back to Top <ArrowUp className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-xs font-medium">
              © {currentYear} Vikash Anand • Built with precision &amp; <Heart className="h-3 w-3 text-red-500 inline" />
            </p>
            
            <p className="text-muted-foreground text-xs font-medium">
           
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
