"use client";

import React from "react";

export default function Home() {
  const aboutMeLetters = "About Me".split("");

  return (
    <div className="container">
      <div className="titleName">Kierath Kaur Dhugga</div>
      <div className="contentRow">
        <div className="profileImage">
          <img src="/images/kierath.jpg" alt="Kierath Kaur Dhugga" />
        </div>
        <div className="buttonContainer">
          <button className="aboutButton">
            {aboutMeLetters.map((letter, i) => (
              <div key={i} className="verticalLetter">
                {letter === " " ? "\u00A0" : letter}
              </div>
            ))}
          </button>
          <button className="portfolioButton">Portfolio</button>
        </div>
      </div>
    </div>
  );
}
