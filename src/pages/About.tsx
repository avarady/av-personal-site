import React, { useState } from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="container mb-5">
      <div className="about-header">About Me</div>
      <p>
        I am a full stack developer who has worked on both inherited and new projects in many different languages and frameworks.
        My first project was in middle school: an Android application to help track health, cards, counters, etc. while playing Magic: The Gathering.
        My favorite part of coding is backend and data manipulation - I could happily design relational databases and write complex SQL queries all day.
      </p>
      <p>
        I did create this website myself using ReactJS + TypeScript. 
        It is rather new and a work in progress that I have been updating regularly.
        (There is no backend as the amount of data required is small and not expected to grow significantly.)
      </p>
      <p>
        Outside of work, my hobbies include video games and cosplay. 
        My latest and favorite cosplays are two characters - Felis and Devil's Advocate - from Hunt: Showdown.
        I enjoy the process of problem-solving that comes along with recreating a character's design.
      </p>
      <div className="d-flex gap-2">
        <img className="w-50" src="/images/about/cosplay.jpg"/>
        <img className="w-50" src="/images/about/cosplay2.jpg"/>
      </div>
      <p>
        I also enjoy experimenting with various forms of art, including most types of traditional media as well as digital media (Photoshop, Illustrator, video editing, animation, 3D modeling).
      </p>
      <div className="d-flex gap-2">
        <img className="w-50" src="/images/about/art.jpg"/>
        <img className="w-50" src="/images/about/art2.jpg"/>
      </div>
      <p>
        As an animal lover, I have two cats and currently foster three kittens for <a href="https://therescueproject.net/" target="_blank" rel="noreferrer">The Rescue Project</a>.
        Whether or not we keep any fosters remains to be seen!
      </p>
      <div className="d-flex gap-2">
        <img className="w-50" src="/images/about/echo.jpg"/>
        <img className="w-50" src="/images/about/foster.jpg"/>
      </div>
      <p>
        Want to learn more about my background and experiences? Contact me at <a href="mailto:avarady94@gmail.com">avarady94@gmail.com</a>.
      </p>
    </div>
  );
};

export default About;
