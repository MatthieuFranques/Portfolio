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
      <TechClound />
      <TechTicker />
      <Projects />
      <Career />
      <TrainingTimeLine />
    </main>
  );
}
