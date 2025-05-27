import CareerPage from "@/app/career/page";
import Projects from "@/app/project/page";
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
      <TrainingTimeLine />
    </main>
  );
}
