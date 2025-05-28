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
      <div
        className="w-full min-h-screen pt-48"
        style={{ backgroundColor: "#f4fff8", color: "#111827" }}
      >
        <AboutMe />
      </div>
      <div className="bg-[#50808e] text-white w-full">
        <TechClound />
        <TechTicker />
      </div>
      <div
        className="w-full"
        style={{ backgroundColor: "#f4fff8", color: "#111827" }}
      >
        <Projects />
      </div>

      <div
        className="w-full"
        style={{ backgroundColor: "#e9b44c", color: "#111827" }}
      >
        <CareerPage />
      </div>

      <div
        className="w-full"
        style={{ backgroundColor: "#50808e", color: "white" }}
      >
        <TrainingTimeLine />
      </div>
    </main>
  );
}
