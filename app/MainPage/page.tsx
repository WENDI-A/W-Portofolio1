import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

export default function MainPage() {
  return (
    <div className="scroll-smooth">
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skill"><Skill /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}
