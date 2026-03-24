/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CarGlassmorphism from './components/CarGlassmorphism';
import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Terminal, Code, Cpu } from 'lucide-react';
import porscheImage from '../images/cars/Singer-Porsche-Pictures-27-removebg-preview.png';
import bmwImage from '../images/cars/bmw-m3-removebg-preview.png';

const projects = [
  {
    title: "🧠 SECURECODEHUB",
    subtitle: "AI-Powered Coding & Cybersecurity Platform",
    description: "An AI-driven platform that integrates programming and cybersecurity education into a single learning environment. It provides personalized learning paths and hands-on virtual labs that simulate real-world cyber threats.",
    features: ["AI-powered adaptive learning system", "Interactive coding sandbox with security analysis", "Virtual labs (SQL Injection, XSS, Authentication flaws)", "Real-time feedback on vulnerabilities", "Scalable microservices-based architecture"],
    techStack: ["React.js", "Node.js", "Python (Flask)", "TensorFlow", "MongoDB", "Docker", "Vercel", "Railway"]
  },
  {
    title: "🛡️ QUANTUMSHIELD",
    subtitle: "Intelligent Cybersecurity Defense System",
    description: "A cybersecurity system designed to detect, analyze, and respond to potential threats using intelligent monitoring techniques. It focuses on strengthening system defenses through proactive mechanisms.",
    features: ["Real-time threat detection and monitoring", "Pattern-based anomaly detection", "Automated alert system for suspicious activities", "Secure system logging and analysis"],
    techStack: ["Python", "Machine Learning", "Node.js", "MongoDB", "REST APIs"]
  },
  {
    title: "🛡️ ASIS",
    subtitle: "Anti-Scam Intelligence System",
    description: "ASIS is an advanced cybersecurity platform designed to detect, analyze, and prevent online scams using AI-driven analysis, domain intelligence, and transaction tracing. It integrates multiple security modules to provide real-time threat detection and transparent verification of suspicious activities.",
    features: ["AI-powered scam detection using NLP and pattern analysis", "Domain security analysis (WHOIS, IP geolocation, risk scoring)", "Financial transaction tracing (M-Pesa and cryptocurrency)", "Social media and admin detection (Telegram analysis)", "Blockchain-based verification for secure and transparent reporting", "Real-time risk scoring and threat intelligence"],
    techStack: ["Python", "Flask", "Node.js", "React", "TypeScript", "MySQL", "Docker", "Machine Learning", "ICP (Blockchain)", "REST APIs", "Selenium"]
  },
  {
    title: "🛒 HOOPCART",
    subtitle: "E-Commerce Web Application",
    description: "A modern e-commerce platform that allows users to browse products, manage carts, and complete purchases online. It delivers a smooth and responsive shopping experience.",
    features: ["Product listing and search functionality", "Shopping cart and checkout system", "User authentication and account management", "Responsive UI for mobile and desktop"],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"]
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen bg-cyber-grey text-white font-sans selection:bg-white/30 selection:text-white relative overflow-hidden">
      
      {/* Liquid Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      {/* Car Background Animations */}
      <motion.div
        style={{
          rotate: useTransform(scrollYProgress, [0, 0.5], [0, 180]),
          opacity: useTransform(scrollYProgress, (v) => (v < 0.45 ? 0.3 * (1 - v / 0.45) : 0)),
        }}
        className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <img src={porscheImage} alt="Porsche" className="w-auto h-full object-contain max-w-[80vw]" />
      </motion.div>
      <motion.div
        style={{
          rotate: useTransform(scrollYProgress, [0.5, 1], [180, 0]),
          opacity: useTransform(scrollYProgress, (v) => (v > 0.55 ? 0.3 * ((v - 0.55) / 0.45) : 0)),
        }}
        className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center"
      >
        <img src={bmwImage} alt="BMW" className="w-auto h-full object-contain max-w-[80vw]" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-panel rounded-full px-8 h-16 flex items-center justify-between">
        <div className="font-sans text-xl font-semibold tracking-tight text-liquid-glass">
          LEVI<span className="opacity-50">.SYS</span>
        </div>
        <div className="hidden md:flex space-x-8 font-sans text-sm font-medium text-liquid-glass-subtle">
          <a href="#skills" className="hover-text-liquid-glass-white transition-colors text-liquid-glass-hover">Skills</a>
          <a href="#projects" className="hover-text-liquid-glass-white transition-colors text-liquid-glass-hover">Projects</a>
          <a href="#about" className="hover-text-liquid-glass-white transition-colors text-liquid-glass-hover">About</a>
          <a href="#contact" className="hover-text-liquid-glass-white transition-colors text-liquid-glass-hover">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-panel text-xs font-medium text-liquid-glass mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse shadow-[0_0_10px_#00BFFF]"></span>
                System Initialized
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-liquid-glass">
                Securing the <br/>
                <span className="text-liquid-glass-blue">
                  Digital Frontier.
                </span>
              </h1>
              <p className="text-liquid-glass-subtle text-lg max-w-md leading-relaxed font-light">
                I am Levi. A focused cybersecurity student mastering the fundamentals, and a hardened cyber-samurai defending the network from the shadows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="px-8 py-4 glass-panel text-liquid-glass font-semibold rounded-full btn-liquid text-liquid-glass-hover inline-block text-center">
                Initiate Contact
              </a>
              <a href="#projects" className="px-8 py-4 glass-panel text-liquid-glass font-semibold rounded-full btn-liquid text-liquid-glass-hover inline-block text-center">
                View Logs
              </a>
            </motion.div>
          </div>

          <div className="h-full flex items-center justify-center order-1 lg:order-2">
            <CarGlassmorphism />
          </div>
        </div>
      </main>



      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-liquid-glass cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500">Combat Arsenal</h2>
            <p className="text-liquid-glass-subtle max-w-2xl font-light">Equipped with enterprise-grade security tools and methodologies to identify, mitigate, and neutralize digital threats.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Network Defense", desc: "Firewall configuration, IDS/IPS, zero-trust architecture." },
              { icon: Terminal, title: "Penetration Testing", desc: "Vulnerability assessment, exploit development, red teaming." },
              { icon: Code, title: "Secure Coding", desc: "Static analysis, OWASP Top 10 mitigation, cryptography." },
              { icon: Cpu, title: "Incident Response", desc: "Threat hunting, malware analysis, digital forensics." }
            ].map((skill, i) => (
              <div key={i} className="p-8 glass-panel rounded-[2rem] hover:bg-white/10 transition-all duration-300 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight text-liquid-glass">{skill.title}</h3>
                <p className="text-liquid-glass-subtle text-sm leading-relaxed font-light">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-liquid-glass cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500">Active Operations</h2>
            <p className="text-liquid-glass-subtle max-w-2xl font-light">Classified mission files and deployed architectural constructs representing current computational capabilities.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 pb-4 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <div key={i} className="group relative flex flex-col md:flex-row w-full bg-transparent backdrop-blur-[12px] border border-white/20 rounded-[1.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_4px_rgba(255,255,255,0.3)] overflow-visible transition-all duration-500 hover:scale-[1.01] hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]">

                {/* Floating HUD Labels */}
                <div className="absolute -top-6 left-4 md:left-6 flex flex-col items-start opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="text-white font-bold tracking-widest uppercase text-xs drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                    {project.title.split(' ')[1] || project.title}
                  </span>
                  <span className="text-cyan-400 font-mono text-[9px] tracking-widest font-bold">
                    SYSTEM.ONLINE // 2026
                  </span>
                </div>

                {/* Left Pane - Hologram Emblem Area */}
                <div className="relative w-full md:w-1/4 p-5 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02] rounded-t-[1.5rem] md:rounded-l-[1.5rem] md:rounded-tr-none min-h-[120px]">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 border border-cyan-400/30 rotate-45 rounded-md group-hover:rotate-90 transition-transform duration-1000" />
                    <div className="absolute inset-1.5 border border-cyan-400/50 rotate-12 rounded-md group-hover:-rotate-45 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-cyan-400/10 blur-xl group-hover:bg-cyan-400/20 transition-colors duration-500" />
                    <div className="relative z-10 text-4xl drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
                      {project.title.split(' ')[0]}
                    </div>
                  </div>
                </div>

                {/* Right Pane - Embedded Terminal Data Screen */}
                <div className="relative w-full md:w-3/4 p-3 md:p-4 bg-white/[0.01]">
                   {/* Dark Terminal Window Inside Glass */}
                   <div className="relative h-full w-full bg-[#040f16]/90 rounded-lg border border-cyan-500/20 p-4 md:p-5 flex flex-col shadow-[inset_0_0_15px_rgba(0,255,255,0.05)] overflow-hidden">
                      
                      {/* Terminal Header */}
                      <div className="flex justify-between items-center mb-4 border-b border-cyan-500/20 pb-2">
                         <span className="text-cyan-400 font-mono text-[9px] font-bold tracking-widest flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse rounded-[1px]" />
                           DECRYPTING FLOW...
                         </span>
                         <div className="flex gap-1.5">
                           <div className="w-1.5 h-1.5 bg-cyan-400/60 rounded-[1px]" />
                           <div className="w-1.5 h-1.5 bg-cyan-400/60 rounded-[1px]" />
                           <div className="w-1.5 h-1.5 bg-cyan-400/60 rounded-[1px]" />
                         </div>
                      </div>

                      {/* Terminal Content */}
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-liquid-glass transition-colors duration-300 text-liquid-glass-hover">
                        {project.title.substring(project.title.indexOf(' ') + 1)}
                      </h3>
                      <p className="text-[10px] font-mono text-cyan-400/80 mb-3 uppercase tracking-wide">
                        {project.subtitle}
                      </p>
                      <p className="text-cyan-100/70 text-sm leading-relaxed font-mono mb-6 hover:text-white transition-colors duration-300 cursor-default">
                        {project.description}
                      </p>
                      
                      <div className="mb-5 flex-1">
                        <ul className="space-y-1.5">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-[10px] font-mono text-cyan-300/60 group-hover:text-cyan-300/90 transition-colors">
                              <span className="text-cyan-500 mr-2 mt-[2px] font-bold opacity-80">&gt;</span>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Tech Stack Terminal Tags */}
                      <div className="pt-3 mt-auto border-t border-cyan-500/20">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <span key={idx} className="px-2 py-[2px] text-[8px] sm:text-[9px] uppercase font-mono tracking-widest text-cyan-400 bg-cyan-900/30 border border-cyan-500/30 rounded-sm shadow-[0_0_6px_rgba(0,255,255,0.1)]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                   </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="group relative rounded-[2.5rem] p-[1px] overflow-hidden transition-all duration-500 hover:scale-[1.01]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full w-full bg-transparent backdrop-blur-[16px] 
                            border border-white/10 group-hover:border-white/20
                            rounded-[2.5rem] p-10 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_4px_rgba(255,255,255,0.1)] 
                            flex flex-col items-center text-center z-10 overflow-hidden transition-all duration-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-400/20 group-hover:animate-pulse transition-all duration-700 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-20">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-liquid-glass cursor-default hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500">System Profile</h2>
                <div className="space-y-6 text-gray-300 md:text-lg leading-relaxed font-light max-w-3xl">
                  <p>
                    I’m a novice software developer with a strong interest in cybersecurity and intelligent systems. I enjoy turning ideas into real applications, especially those that combine practical functionality with security awareness.
                  </p>
                  <p>
                    My goal is to build solutions that are not just functional, but also safe, scalable, and impactful. I’m always exploring new tools and technologies, and I see every project as an opportunity to grow and refine my skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-liquid-glass">Initiate Contact</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Ready to deploy secure solutions or discuss architectural patterns? Open a secure channel.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:levimugendi8@gmail.com" className="group relative rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:scale-[1.05]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full w-full bg-transparent backdrop-blur-[16px] border border-white/10 group-hover:border-white/20 rounded-[2rem] py-6 px-8 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_4px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                   <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z"/>
                 </svg>
                 <span className="font-mono text-liquid-glass-blue">levimugendi8@gmail.com</span>
              </div>
            </a>
            
            <a href="tel:+254791470074" className="group relative rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:scale-[1.05]">
               <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative h-full w-full bg-transparent backdrop-blur-[16px] border border-white/10 group-hover:border-white/20 rounded-[2rem] py-6 px-8 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_4px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.721 7.454c-3.444 0-6.435-1.767-8.202-4.456l-3.351 1.096 1.115-3.264C1.04 13.918.4 12.016.4 10.018.4 4.542 4.842.1 10.32.1c5.476 0 9.919 4.442 9.919 9.918 0 5.476-4.443 9.918-9.919 9.918z"/>
                 </svg>
                 <span className="font-mono text-liquid-glass-blue">+254791470074</span>
               </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
