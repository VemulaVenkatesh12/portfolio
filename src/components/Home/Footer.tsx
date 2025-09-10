import React from "react";

interface Social {
  icon: string;
  title: string;
  link: string;
}

const socials: Social[] = [
  { icon: "💼", title: "LinkedIn", link: "#" },
  { icon: "👨‍💻", title: "GitHub", link: "#" },
  { icon: "🎨", title: "Dribbble", link: "#" },
  { icon: "🐦", title: "Twitter", link: "#" },
  { icon: "📧", title: "Email", link: "#" },
];

const Footer: React.FC = () => (
  <footer>
    <div className="social-grid">
      {socials.map((soc, idx) => (
        <a href={soc.link} className="social-link" title={soc.title} key={idx}>
          {soc.icon}
        </a>
      ))}
    </div>
    <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
      © 2025 Jordan Rivers. Crafting the future, one pixel at a time.
    </p>
    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", opacity: 0.7 }}>
      Built with passion, powered by innovation.
    </p>
  </footer>
);

export default Footer;
