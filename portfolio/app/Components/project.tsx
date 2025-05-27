import Card from "./Card";
import { cards } from "@/app/data/project";

export default function Header() {
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
