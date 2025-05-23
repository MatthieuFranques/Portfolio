import CareerPage from "@/app/career/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/project/page";
import TechTicker from "@/app/Components/teckTicker";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start flex-grow">
        <TechTicker />
        <Projects />
        <CareerPage />
        <div className="flex justify-center w-full">
          <Contact />
        </div>
      </main>
    </div>
  );
}
