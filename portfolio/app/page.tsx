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
      {/* AboutMe → Tech */}
      <div
        id="aboutMe"
        className="relative w-full min-h-screen pt-48"
        style={{ backgroundColor: "#f4fff8", color: "#111827" }}
      >
        <AboutMe />
        <div
          className="absolute bottom-0 left-0 w-full h-[5vh] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #f4fff8 0%, #1f2937 100%)",
          }}
        />
      </div>

      {/* Tech → Projects */}
      <div id="competences" className="relative bg-[#1f2937] text-white w-full">
        <TechClound />
        <TechTicker />
        <div
          className="absolute bottom-0 left-0 w-full h-[5vh] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #1f2937 0%, #f4fff8 100%)",
          }}
        />
      </div>

      {/* Projects → Career */}
      <div
        id="projects"
        className="relative w-full"
        style={{ backgroundColor: "#f4fff8" }}
      >
        <Projects />
        <div
          className="absolute bottom-0 left-0 w-full h-[5vh] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #f4fff8 0%, #1f2937 100%)",
          }}
        />
      </div>

      {/* Career → Timeline */}
      <div
        className="relative w-full"
        style={{ backgroundColor: "#1f2937", color: "white" }}
      >
        <div className="max-w-5xl mx-auto py-24 px-4">
          <Career />
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-[10vh] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #1f2937 0%, #e5e7eb 100%)",
          }}
        />
      </div>

      {/* Timeline → fin */}
      <div className="w-full" style={{ backgroundColor: "#e5e7eb" }}>
        <TrainingTimeLine />
      </div>
    </main>
  );
}
