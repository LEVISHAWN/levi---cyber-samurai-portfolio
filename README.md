# LEVI.SYS | Cyber-Samurai Portfolio

A meticulously crafted, high-fidelity portfolio website designed for a cybersecurity professional and developer. The project employs a "Liquid Glassmorphism" and cyberpunk aesthetic, rendering interactive, holographic-style UI components that feel like advanced terminal systems.

## 🚀 Live Demo & Visuals
*(Deployment Link Pending)*

## 🛠 Tech Stack

- **Framework:** React.js, TypeScript, Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide-React
- **Animations:** Motion (Framer/React)
- **Assets:** Custom static images for base and mask composite layouts.

## 🔮 Key Features

- **Liquid Glassmorphism:** True `100% transparent` glass panels that rely exclusively on heavy `backdrop-blur` and glowing light-catcher borders, simulating physical water/glass rather than standard flat UI cards.
- **Holographic Dual-Pane Consoles:** The Projects section is built exactly like a sci-fi tactical HUD. It splits content into a left-pane geometric shield generator and a right-pane embedded tracking terminal.
- **Hover-Reveal Optics:** Leveraging `group-hover`, the main hero card smoothly expands a liquid glass layer over a base image, revealing a meticulously aligned secondary mask image for a cinematic effect.
- **Responsive Architecture:** Fully scales from narrow mobile views to ultra-wide panoramic terminal arrays.

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LEVISHAWN/levi---cyber-samurai-portfolio.git
   cd levi---cyber-samurai-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

- `src/App.tsx`: The primary application matrix. Contains all layout data for the Hero, Skills, Projects, About, and Contact sections.
- `src/components/CarGlassmorphism.tsx`: The highly complex standalone module responsible for the "Masked Reveal" effect seen in the Hero section.
- `src/index.css`: Injects global design tokens, animations (like the slow ambient pulses), and custom classes where utility variants are insufficient.

## 🛡️ License
This project is for personal use and portfolio demonstration.
