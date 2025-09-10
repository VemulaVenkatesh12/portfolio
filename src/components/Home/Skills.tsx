import React from "react";
interface Skill {
  icon: string;
  name: string;
  desc: string;
}

const skills: Skill[] = [
  { icon: "🎨", name: "UI/UX Design", desc: "Creating intuitive, beautiful interfaces with user-centered design principles and cutting-edge visual aesthetics." },
  { icon: "⚡", name: "Frontend Development", desc: "Building lightning-fast, responsive web applications with modern frameworks and performance optimization." },
  { icon: "🧠", name: "AI Integration", desc: "Implementing machine learning models and AI-powered features to enhance user experiences and automation." },
  { icon: "🔮", name: "3D & WebGL", desc: "Creating immersive 3D experiences, interactive visualizations, and high-performance graphics rendering." },
  { icon: "📱", name: "Mobile Design", desc: "Designing seamless mobile experiences with native performance and platform-specific optimizations." },
  { icon: "🚀", name: "Innovation Strategy", desc: "Leading digital transformation initiatives and identifying emerging technology opportunities for businesses." }
];

const Skills: React.FC = () => (
  <section id="skills">
    <div className="section-header">
      <div className="section-badge">Expertise</div>
      <h2 className="section-title">Technical Mastery</h2>
      <p className="section-subtitle">
        A comprehensive skillset spanning design, development, and emerging technologies
      </p>
    </div>
    <div className="skills-container">
      {skills.map((skill, idx) => (
        <div className="skill-card" key={idx}>
          <div className="skill-icon">{skill.icon}</div>
          <h3>{skill.name}</h3>
          <p className="skill-description">{skill.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
