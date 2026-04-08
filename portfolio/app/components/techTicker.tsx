import { techIcons } from "@/app/data/techTicker";
import { useLanguage } from "@/app/contexts/languageContext";

export default function TechTicker() {
      const { language } = useLanguage();
  
  return (
    <section
      className="max-w-screen-xl mx-auto px-4 py-8 space-y-12"
      style={{ marginBottom: "6rem" }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center antialiased tracking-tight mb-10 md:mb-20">
      {language === "FR" ? "Mes outils favoris" : "Top Tools"}
    </h2>

      <div className="overflow-hidden w-full py-4 relative fade-mask">
        <div
          className="flex animate-scroll whitespace-nowrap"
          style={{ animationDuration: "20s" }}
        >
          {techIcons.concat(techIcons).map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Tech icon"
              className="h-8 sm:h-10 md:h-12 lg:h-14 mx-2 sm:mx-3 md:mx-4 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
