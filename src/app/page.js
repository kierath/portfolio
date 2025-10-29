"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");

  const fullText =
    "Hi, I’m Kierath, a full-stack developer passionate about building clean, functional web applications. I specialize in React, Node.js, Express, and PostgreSQL, and I enjoy creating intuitive, user-friendly interfaces.";

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

  const portfolioItems = [
    {
      title: "Affirmation Generator",
      description: "React app fetching random affirmations with a simple interface.",
      link: "https://message-generator-nine.vercel.app/",
      github: "https://github.com/kierath/affirmation-generator",
      image: "/images/affirmation.png",
    },
    {
      title: "Spotify Playlist Creator",
      description: "Interact with Spotify API to create playlists effortlessly.",
      link: "https://spotifyproject-henna.vercel.app/",
      github: "https://github.com/kierath/spotify-api-project",
      image: "/images/spotify.png",
    },
    {
      title: "Coming Soon",
      description: "Next clean and modern UI-focused project.",
      link: "#",
      github: "#",
      image: "/images/coming-soon.png",
    },
  ];

  const skills = ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Tailwind"];

  return (
    <div className="container">

      {/* Title */}
      <h1 className="titleName">Kierath Kaur Dhugga</h1>

      {/* Profile Image */}
      <div className="profileImage">
        <img src="/images/kierath.jpg" alt="Kierath" />
      </div>

      {/* About Me */}
      <div className="aboutWrapper">
        <div className="aboutCard">
          <p>{typedText}</p>
        </div>
      </div>

      <div className="sectionDivider"></div>

      {/* Portfolio Section */}
      <h2 className="sectionTitle">Portfolio</h2>
      <div className="portfolioContainer">
        {portfolioItems.map((item, i) => (
          <a key={i} href={item.link} target="_blank" className="portfolioItem">
            <img src={item.image} alt={item.title} className="portfolioImage" />
            <div className="portfolioContent">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="sectionDivider"></div>

      {/* Skills */}
      <div className="skills">
        <h2 className="sectionTitle">Tech Skills</h2>
        <div className="skillsList">
          {skills.map((skill, i) => (
            <span key={i} className="skillBadge">{skill}</span>
          ))}
        </div>
      </div>

      <div className="sectionDivider"></div>

      {/* Contact */}
      <div className="contactContainer">
        <h2 className="sectionTitle">Contact</h2>
        <p>Email: kierath_dhugga@hotmail.co.uk</p>
        <p>Mobile: 07415242850</p>
        <p>GitHub: <a href="https://github.com/kierath" target="_blank">kierath</a></p>
      </div>
    </div>
  );
}
