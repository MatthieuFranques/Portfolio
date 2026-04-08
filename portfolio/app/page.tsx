"use client";

import Projects from "@/app/components/project";
import TechTicker from "@/app/components/techTicker";
import TechClound from "@/app/components/techClound";
import AboutMe from "./components/aboutMe";
import TrainingTimeLine from "./components/trainingTimeline";
import Career from "./components/career";
import CVViewer from "./components/cvView";

export default function Home() {
  return (
    <main className="main-custom">
      <div className="pt-16 w-full" id="aboutMe">
        <AboutMe />
        <CVViewer />
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
