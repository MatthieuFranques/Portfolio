import Card from "./Card"; // ajuste le chemin selon ton arborescence

export default function Header() {
  const cards = [
    {
      title: "Développement Web",
      description:
        "Création de sites web modernes, responsives et performants avec Next.js et Tailwind CSS.",
      image: "/favicon.ico",
      link: "#",
      color: "bg-blue-700",
      buttonText: "Voir plus",
    },
    {
      title: "ShopForMe",
      description:
        "Développement d’une applciation pour aider les malvoyant et aveugle a faire leurs course en autonomie",
      image: "/logoShop4Me.svg",
      link: "#",
      color: "bg-green-600",
      buttonText: "En savoir plus",
    },
    {
      title: "LegalTech",
      description:
        "Conceptiont et creation d'un outil de gestion de fichier juridique (prototype).",
      image: "/design-tools.png",
      link: "#",
      color: "bg-purple-600",
      buttonText: "Découvrir",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        Projets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
