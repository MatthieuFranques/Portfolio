import CareerPage from "@/app/career/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/project/page";
import TechTicker from "@/app/Components/techTicker";
import TechClound from "@/app/Components/techClound";
import AboutMe from "./Components/aboutMe";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start flex-grow">
      <AboutMe />
      <TechClound />
      <TechTicker />
      <Projects />
      <CareerPage />
      <div className="flex justify-center w-full">
        <Contact />
      </div>
    </main>
  );
}
