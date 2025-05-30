import Card from "@/app/Components/Card";
import { cards } from "@/app/data/project";

export default function Header() {
  return (
    <section
      className="max-w-screen-xl mx-auto px-4 py-8"
      style={{ marginBottom: "6rem" }}
    >
      <h2 className="text-4xl font-bold mb-20 text-center text-gray-800">
        Projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
