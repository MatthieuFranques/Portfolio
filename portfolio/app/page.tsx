"use client";

import CareerPage from "@/app/Components/career";
import Projects from "@/app/Components/project";
import TechTicker from "@/app/Components/techTicker";
import TechClound from "@/app/Components/techClound";
import AboutMe from "./Components/aboutMe";
import TrainingTimeLine from "./Components/trainingTimeline";

export default function Home() {
  return (
    <main className="main-custom">
      <AboutMe />
      <TechClound />
      <TechTicker />
      <Projects />
      <CareerPage />
      <TrainingTimeLine />
    </main>
  );
}
