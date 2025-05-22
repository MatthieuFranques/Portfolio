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
      title: "UI/UX Design",
      description:
        "Conception d’interfaces élégantes et ergonomiques avec Figma et Adobe XD.",
      image: "/design-tools.png",
      link: "#",
      color: "bg-purple-600",
      buttonText: "Découvrir",
    },
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
      title: "UI/UX Design",
      description:
        "Conception d’interfaces élégantes et ergonomiques avec Figma et Adobe XD.",
      image: "/design-tools.png",
      link: "#",
      color: "bg-purple-600",
      buttonText: "Découvrir",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
