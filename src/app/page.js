"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");

  const fullText =
    "Hi, I’m Kierath Dhugga, a full-stack developer passionate about crafting modern, elegant user interfaces. I specialize in React, Node.js, and Tailwind CSS.";

  const skills = ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Tailwind", "Figma"];

  const portfolioItems = [
    {
      title: "Affirmation Generator",
      description: "React app fetching random affirmations with a sleek interface.",
      link: "https://message-generator-nine.vercel.app/",
      github: "https://github.com/kierath/affirmation-generator",
      image: "/images/affirmation.png",
    },
    {
      title: "Spotify Playlist Creator",
      description: "Interact with Spotify API to effortlessly create playlists.",
      link: "https://spotifyproject-henna.vercel.app/",
      github: "https://github.com/kierath/spotify-api-project",
      image: "/images/spotify.png",
    },
    {
      title: "Coming Soon",
      description: "Next modern UI-focused project.",
      link: "#",
      github: "#",
      image: "/images/coming-soon.png",
    },
  ];

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Hero */}
      <section id="hero" className="hero fade-in">
        <h1>Kierath Dhugga</h1>
        <p>{typedText}</p>
      </section>

      {/* About */}
      <section id="about" className="about fade-in">
        <h2>About Me</h2>
        <p>
          I craft modern web applications that balance functionality and aesthetics. I love turning
          complex problems into intuitive, user-friendly solutions that delight users.
        </p>
      </section>

      {/* Skills Bubble Cloud */}
      <section id="skills" className="skills fade-in">
        <h2>Tech Skills</h2>
        <div className="skills-bubble-container">
          {skills.map((skill, i) => (
            <div key={i} className="skill-bubble">{skill}</div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio fade-in">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, i) => (
            <a key={i} href={item.link} target="_blank" className="portfolio-item">
              <div className="portfolio-image-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.github} target="_blank" className="github-link">View Code</a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact fade-in">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:kierath_dhugga@hotmail.co.uk">kierath_dhugga@hotmail.co.uk</a></p>
        <p>Mobile: 07415242850</p>
        <p>GitHub: <a href="https://github.com/kierath" target="_blank">kierath</a></p>
      </section>

      <footer>
        © {new Date().getFullYear()} Kierath Dhugga
      </footer>
    </div>
  );
}
