"use client";

import Projects from "@/app/Components/project";
import TechTicker from "@/app/Components/techTicker";
import TechClound from "@/app/Components/techClound";
import AboutMe from "./Components/aboutMe";
import TrainingTimeLine from "./Components/trainingTimeline";
import Career from "./Components/career";

export default function Home() {
  return (
    <main className="main-custom">
      <div className="pt-48 w-full">
        <AboutMe />
      </div>
      <div className="circle-1" />
      <TechClound />
      <TechTicker />
      <div className="circle-2" />
      <Projects />
      <div className="circle-3" />
      <Career />
      <div className="circle-4" />
      <div className="circle-5" />
      <div className="circle-6" />
      <div className="circle-7" />
      <TrainingTimeLine />
    </main>
  );
}
