"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");

  const fullText = "UI & Frontend Developer chasing perfection, one pixel at a time.";

  const skills = [
    "React", "Next.js", "Tailwind", "Figma", "Node.js", "Express",
    "PostgreSQL", "JavaScript", "TypeScript", "HTML5", "CSS3", "Git",
    "GitHub", "C#", "C++", "Unity", "Unreal Engine (UE4/UE5/VR)",
    "PHP", "Python 3", "Bootstrap", "jQuery", "Debugging",
    "Performance Optimisation", "UI Implementation", "Troubleshooting"
  ];

  const portfolioItems = [
    {
      title: "Grind",
      description: "Full-stack coffee shop web app built with React, Node.js, PostgreSQL; responsive UI & seamless backend integration.",
      link: "https://coffee-shop-nu-pearl.vercel.app/",
      image: "/images/grind.png"
    },
    {
      title: "Spotify API",
      description: "Interact with Spotify API to create playlists, search songs, and manage your library with a modern UI.",
      link: "https://spotifyproject-henna.vercel.app/",
      image: "/images/spotify.png",
    },
    {
      title: "Affirmation Generator",
      description: "React app fetching random affirmations, with clean CSS grid layout and smooth animations.",
      link: "https://message-generator-nine.vercel.app/",
      image: "/images/affirmation.png",
    }
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">KD</div>
        <div className="nav-links">
          <a href="https://github.com/kierath">GitHub</a>
          <a href="https://www.linkedin.com/in/kierath-dhugga-60102a177/">LinkedIn</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Hi, I'm <span className="name">Kierath Dhugga</span></h1>
        <p className="typed-text">{typedText}</p>
        <div className="blob purple"></div>
        <div className="blob pink"></div>
        <div className="blob yellow"></div>
      </section>

      {/* About */}
      <section className="section-bubble about-bubble left-align">
        <h2>About Me</h2>
        <div className="about-content">
          <img src="/images/kierath.jpg" alt="Profile" className="profile-pic" />
          <p className="about-text">
            Hi, I’m Kierath Dhugga, a Game Engine Specialist transitioning into Frontend Development. Over the past two years, I’ve specialised in maintaining AAA game builds, troubleshooting complex technical issues, and optimising performance for demanding environments. This experience sharpened my problem-solving skills, attention to detail, and ability to work efficiently under pressure—skills I’m now applying to web development.
            <br></br><br></br>
            I’m currently completing a full-stack development course with CodeAcademy, learning HTML, CSS, JavaScript, React, and Next.js, and expanding my abilities to build intuitive, user-focused digital experiences. While my background is in game engines, I’m passionate about applying my technical expertise and creativity to frontend development and UI design, creating interfaces that are smooth, functional, and visually engaging.
            <br></br><br></br>
            Outside of coding, I enjoy digital art, painting in Procreate, swimming, and competitive gaming. These activities fuel my creativity and curiosity, helping me bring fresh ideas and perspectives to every project I work on. I’m excited to continue learning, growing, and building meaningful digital experiences beyond games.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="section-bubble skills-bubble right-align">
        <h2>Skills</h2>
        <div className="skill-bubbles">
          {skills.map(skill => <span key={skill} className="skill-bubble">{skill}</span>)}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section-bubble portfolio-bubble">
        <h2>Projects</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-item">
              <img src={item.image} alt={item.title} className="portfolio-image" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

          {/* Figma */}
      <section className="section-bubble portfolio-bubble">
        <h2>Figma</h2>
        <div className="figma-images">
          <img src = "/images/figmahome.png"/>
          <img src = "/images/figmamenu.png"/>
        </div>
      </section>

            {/* Contact */}
      <section className="section-bubble contact-bubble left-align">
        <h2>Contact Me</h2>
        <div className="contact-bubbles">
          <h4>Email: kierath_dhugga@hotmail.co.uk</h4>
          <h4>Mobile: 07415242850</h4>
        </div>
      </section>
    </div>
  );
}
