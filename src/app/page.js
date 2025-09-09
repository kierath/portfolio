"use client";

import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const aboutMeLetters = "About Me".split("");

  const fullText =
    "Hey, I’m Kierath! I’ve been exploring full stack development because I really enjoy coding and building things. I’m excited to keep learning and take on more projects that inspire me.";

  useEffect(() => {

    let index = 0;

    // Use setInterval to type out the text one character at a time
    // The interval is cleared when the text is fully typed
    const interval = setInterval(() => {
      if (index < fullText.length) {
        const nextChar = fullText[index];
        if (nextChar !== undefined) {
          setTypedText((prev) => prev + nextChar);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="titleName">Kierath Kaur Dhugga</div>
      <div className="profileImage">
        <img src="/images/kierath.jpg" alt="Kierath" />
      </div>
      <div className="contentRow">
        <div className="aboutContainer">
          <div className="aboutWrapper">
            <button className="aboutButton">
              {aboutMeLetters.map((letter, i) => (
                <div key={i} className="verticalLetter">
                  {letter === " " ? "\u00A0" : letter}
                </div>
              ))}
            </button>
            <div className="popupBox">
              <p>{typedText}</p>
            </div>
          </div>
        </div>
        <div className="white"></div>

        <button className="portfolioButton">Portfolio</button>
        <div className="portfolioContainer">

          {/*PORTFOLIO 1 - AFFIRMATION GENERATOR*/}
          <a href= "https://message-generator-nine.vercel.app/">
          <div className="portfolioItem">Affirmation Generator
            <p className="portfolioDescription">React-based app that fetches random affirmations, built with CSS grid.</p>
          </div>
          </a>
          
           {/*PORTFOLIO 2 - SPOTIFY API*/}
          <a href= "https://spotifyproject-henna.vercel.app/">
          <div className="portfolioItem">Spotify API
            <p className="portfolioDescription">Uses Spotify’s Web API to create playlists, search, add and remove songs.</p>
          </div>
          </a>

          {/*PORTFOLIO 3 - BLANK*/}
          <div className="portfolioItem">Portfolio 3</div>
        </div>
        <div className="white"></div>

        <div className="skills">
          <h3>Tech Skills</h3>
          <p>React | Node.js | Express | PostgreSQL | Vercel | Tailwind</p>
        </div>

        <button className="contactButton">Contact Me</button>
        <div className="contactContainer">
          <p>Email: kierath_dhugga@hotmail.co.uk</p>
          <p>Mobile: 07415242850</p>
          <p>GitHub:  <a href="https://github.com/kierath" target="_blank">kierath</a></p>
        </div>
      </div>
    </div>
  );
}
