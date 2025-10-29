"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");

  const fullText =
    "Hey, I’m Kierath! I’m a full stack development enthusiast who loves turning ideas into interactive web apps. I work with React, Node.js, Express, and PostgreSQL, and I’ve built projects like a Spotify-powered playlist creator and a random affirmation generator. I’m excited to keep learning, take on challenging projects, and join a collaborative team where I can grow as a developer.";

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
      description: "React app fetching random affirmations with a sleek UI.",
      link: "https://message-generator-nine.vercel.app/",
      github: "https://github.com/kierath/affirmation-generator",
      image: "/images/affirmation.png",
    },
    {
      title: "Spotify Playlist Creator",
      description: "Interact with Spotify API to create playlists.",
      link: "https://spotifyproject-henna.vercel.app/",
      github: "https://github.com/kierath/spotify-api-project",
      image: "/images/spotify.png",
    },
    {
      title: "Coming Soon",
      description: "Stay tuned for my next UI-focused project!",
      link: "#",
      github: "#",
      image: "/images/coming-soon.png",
    },
  ];

  const skills = ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Vercel", "Tailwind"];

  return (
    <div className="container">

      {/* Title */}
      <h1 className="titleName">Kierath Kaur Dhugga</h1>

      {/* Profile Image */}
      <div className="profileImage">
        <img src="/images/kierath.jpg" alt="Kierath" />
      </div>

      {/* About Me Card */}
      <div className="aboutWrapper">
        <button className="aboutButton">About Me</button>
        <div className="popupBox glassCard">
          <p>{typedText}</p>
        </div>
      </div>

      <div className="white"></div>

      {/* Portfolio Section */}
      <button className="portfolioButton">Portfolio</button>
      <div className="portfolioContainer">
        {portfolioItems.map((item, i) => (
          <a key={i} href={item.link} target="_blank" className="portfolioItem">
            <div className="portfolioImageWrapper">
              <img src={item.image} alt={item.title} className="portfolioImage" />
              <div className="portfolioOverlay">
                <p className="portfolioDescription">{item.description}</p>
              </div>
            </div>
            <h3>{item.title}</h3>
          </a>
        ))}
      </div>

      <div className="white"></div>

      {/* Skills Section */}
      <div className="skills">
        <h3>Tech Skills</h3>
        <div className="skillsList">
          {skills.map((skill, i) => (
            <span key={i} className="skillBadge">{skill}</span>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <button className="contactButton">Contact Me</button>
      <div className="contactContainer">
        <p>Email: kierath_dhugga@hotmail.co.uk</p>
        <p>Mobile: 07415242850</p>
        <p>GitHub: <a href="https://github.com/kierath" target="_blank">kierath</a></p>
      </div>
    </div>
  );
}
