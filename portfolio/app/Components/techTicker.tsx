import { techIcons } from "@/app/data/techTicker";

export default function TechTicker() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 space-y-12">
      <h2 className="text-4xl font-bold mb-20 text-center">
        Mes outils favoris
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
              className="h-12 mx-4 inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
