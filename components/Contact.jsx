"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Globe, FileText } from 'lucide-react';

/**
 * Contact Section - Functional WhatsApp + MongoDB Integration
 * Features: Form validation, Database storage, WhatsApp redirect
 */
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'vikashhanand@gmail.com', href: 'mailto:vikashhanand@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7903221054', href: 'tel:+917903221054' },
    { icon: MapPin, label: 'Location', value: 'India', href: '#' },
    { icon: FileText, label: 'Resume', value: 'Download Resume', href: 'https://drive.google.com/file/d/1tMW5TC3pQU9bnglSXwGJwC1vg_q2FQ7K/view?usp=share_link' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save data to MongoDB via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to save message');

      toast({
        title: "Success!",
        description: "Your message has been received. I will connect with you within 24–48 hours....",
      });

      // 2. Format WhatsApp Message
      const waMessage = `Hello Vikash,
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;

      const encodedMessage = encodeURIComponent(waMessage);
      const waLink = `https://wa.me/917903221054?text=${encodedMessage}`;

      // 3. Redirect to WhatsApp
      setTimeout(() => {
        window.open(waLink, '_blank');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);

    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s build something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ x: 5 }}>
                <a 
                  href={info.href}
                  target={info.href.startsWith('http') ? "_blank" : undefined}
                  rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center p-6 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{info.label}</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="pt-6">
              <Card className="bg-primary/5 border-primary/10 rounded-[2rem] overflow-hidden">
                <CardHeader className="text-center">
                  <p className="text-sm font-medium mb-4">Interested in collaboration?</p>
                  <div className="flex gap-4 justify-center">
                    {[
                      { icon: Linkedin, href: 'https://linkedin.com/in/vikashhanand' },
                      { icon: Github, href: 'https://github.com/vikashhanand' },
                      { icon: Twitter, href: 'https://x.com/vikashhanand' }
                    ].map((social, index) => (
                      <motion.a 
                        key={index}
                        href={social.href} 
                        target="_blank"
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="p-3 rounded-full bg-background border border-border/50 hover:text-primary transition-colors"
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <Card className="bg-background/50 backdrop-blur-xl border-border/50 rounded-[2rem] shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                <CardDescription>All fields are required. I usually reply within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest pl-1">Full Name</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        required 
                        className="bg-background/50 border-border/50 rounded-xl h-12 focus:ring-primary/20 focus:border-primary/50" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest pl-1">Email</label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com" 
                        required 
                        className="bg-background/50 border-border/50 rounded-xl h-12 focus:ring-primary/20 focus:border-primary/50" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest pl-1">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?" 
                      required 
                      className="bg-background/50 border-border/50 rounded-xl h-12 focus:ring-primary/20 focus:border-primary/50" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest pl-1">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..." 
                      required 
                      className="min-h-[150px] bg-background/50 border-border/50 rounded-xl focus:ring-primary/20 focus:border-primary/50 px-4 py-4" 
                    />
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 transition-all duration-500" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
