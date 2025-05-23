const techIcons = [
  "/icons/python.png",
  "/icons/react.png",
  "/icons/next.png",
  "/icons/node.svg",
  "/icons/docker.png",
  "/icons/dotnet.png",
  "/icons/blazor.png",
  "/icons/flutter.png",
  "/icons/java.png",
  "/icons/spring.png",
  "/icons/c++.png",
  "/icons/unreal.png",
];

export default function TechTicker() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 space-y-12">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
        Mes outils favoris
      </h1>
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
