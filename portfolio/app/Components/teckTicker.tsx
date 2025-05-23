const techIcons = [
  "/icons/python.png",
  "/icons/react.png",
  "/icons/nextJs.png",
  "/icons/nodejs.svg",
  "/icons/docker.png",
  "/icons/dotnet.jpg",
  "/icons/blazor.png",
  "/icons/flutter.jpg",
  "/icons/java.png",
  "/icons/spring.png",
  "/icons/c++.png",
  "/icons/unreal.png",
];

const techIcons2 = [
  "file.svg",
  "/globe.svg",
  "/globe.svg",
  "/logoShop4Me.svg",
  "/vercel.svg",
];

export default function TechTicker() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 space-y-12">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
        Compétences
      </h1>
      <div className="overflow-hidden w-full bg-gray-100 dark:bg-gray-800 py-4">
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
