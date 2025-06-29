"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const aboutMeLetters = "About Me".split("");

  const fullText =
    "Hey, I’m Kierath! I’m a Games Engine Specialist, and lately I’ve been exploring full stack development because I really enjoy coding and building things. I’m excited to keep learning and take on more projects that inspire me.";

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
          <div className="portfolioItem">Affirmation Generator</div>
          <div className="portfolioItem">Portfolio 2</div>
          <div className="portfolioItem">Portfolio 3</div>
        </div>
        <div className="white"></div>

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
