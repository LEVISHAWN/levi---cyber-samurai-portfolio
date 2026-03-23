/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CarGlassmorphism from './components/CarGlassmorphism';
import { motion } from 'motion/react';
import { Shield, Terminal, Code, Cpu } from 'lucide-react';

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
  return (
    <div className="min-h-screen bg-cyber-grey text-white font-sans selection:bg-white/30 selection:text-white relative overflow-hidden">
      
      {/* Liquid Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute top-[40%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-panel rounded-full px-8 h-16 flex items-center justify-between">
        <div className="font-sans text-xl font-semibold tracking-tight text-liquid-glass">
          LEVI<span className="opacity-50">.SYS</span>
        </div>
        <div className="hidden md:flex space-x-8 font-sans text-sm font-medium text-liquid-glass-subtle">
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
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
              <button className="px-8 py-4 glass-panel text-liquid-glass font-semibold rounded-full btn-liquid">
                Initiate Contact
              </button>
              <button className="px-8 py-4 glass-panel text-liquid-glass font-semibold rounded-full btn-liquid">
                View Logs
              </button>
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
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-liquid-glass">Combat Arsenal</h2>
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
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-liquid-glass">Active Operations</h2>
            <p className="text-liquid-glass-subtle max-w-2xl font-light">Classified mission files and deployed architectural constructs representing current computational capabilities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                {/* Shimmering background interaction on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* The Liquid Glass Box */}
                <div className="relative h-full w-full bg-transparent backdrop-blur-[16px] 
                                border border-white/10 group-hover:border-white/20
                                rounded-[2rem] p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_4px_rgba(255,255,255,0.1)] 
                                flex flex-col z-10 overflow-hidden transition-all duration-500">
                  
                  {/* Subtle Liquid Glow Base Inside the glass */}
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-400/20 group-hover:animate-pulse transition-all duration-700 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-20 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold tracking-tight text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-liquid-glass-blue mb-6 border-b border-white/10 pb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                            <span className="text-blue-500 mr-2 mt-0.5 opacity-70">▹</span>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Tech Stack Chips at bottom */}
                  <div className="relative z-20 pt-6 mt-auto border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 text-[10px] sm:text-xs font-mono tracking-wider text-white/70 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] group-hover:border-white/20 transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
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
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8 text-liquid-glass">System Profile</h2>
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
                 <span className="text-2xl">✉️</span>
                 <span className="font-mono text-liquid-glass-blue">levimugendi8@gmail.com</span>
              </div>
            </a>
            
            <a href="tel:+254791470074" className="group relative rounded-[2rem] p-[1px] overflow-hidden transition-all duration-500 hover:scale-[1.05]">
               <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative h-full w-full bg-transparent backdrop-blur-[16px] border border-white/10 group-hover:border-white/20 rounded-[2rem] py-6 px-8 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_4px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 transition-all duration-500">
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.1] opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                 <span className="text-2xl">📱</span>
                 <span className="font-mono text-liquid-glass-blue">+254791470074</span>
               </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
