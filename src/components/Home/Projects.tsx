import React from "react";

interface Project {
  icon: string;
  title: string;
  description: string;
  stack: string[];
}

const projects: Project[] = [
  {
    icon: "🚀",
    title: "NeuroVision AI",
    description:
      "Revolutionary AI-powered visual recognition platform with real-time neural network processing and adaptive learning algorithms.",
    stack: ["React", "TensorFlow", "WebGL", "Python"],
  },
  {
    icon: "🌐",
    title: "MetaCommerce 3D",
    description:
      "Immersive e-commerce platform featuring photorealistic 3D product visualization, AR try-on, and blockchain integration.",
    stack: ["Three.js", "WebXR", "Blockchain", "Next.js"],
  },
  {
    icon: "⚡",
    title: "Quantum Dashboard",
    description:
      "Real-time data visualization platform with quantum-inspired algorithms for processing massive datasets and predictive analytics.",
    stack: ["D3.js", "WebGL", "Node.js", "MongoDB"],
  },
  {
    icon: "🎨",
    title: "Creative Studio Pro",
    description:
      "Next-generation design collaboration platform with real-time multiplayer editing, AI-assisted creativity, and cloud synchronization.",
    stack: ["WebRTC", "Canvas API", "Socket.io", "Vue.js"],
  },
];

const Projects: React.FC = () => (
  <section id="work">
    <div className="section-header">
      <div className="section-badge">Featured Work</div>
      <h2 className="section-title">Revolutionary Projects</h2>
      <p className="section-subtitle">
        Pushing boundaries with cutting-edge technology and innovative design solutions
      </p>
    </div>
    <div className="projects-grid">
      {projects.map((proj, i) => (
        <div className="project-card" key={i}>
          <div className="project-header">
            <div className="project-icon">{proj.icon}</div>
            <h3>{proj.title}</h3>
          </div>
          <p className="project-description">{proj.description}</p>
          <div className="tech-stack">
            {proj.stack.map((tech, idx) => (
              <span className="tech-tag" key={idx}>{tech}</span>
            ))}
          </div>
          <a href="#" className="project-link">View Project →</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
