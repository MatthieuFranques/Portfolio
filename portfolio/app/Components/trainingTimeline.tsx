import { trainingCards } from "@/app/data/trainingTimeline";
import { useEffect, useState } from "react";
import Modal from "@/app/Components/modal";

export default function TrainingTimeline() {
  useEffect(() => {
    const cards = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const [selectedCard, setSelectedCard] = useState<null | {
    title: string;
    modalDescription: React.ReactNode;
  }>(null);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-20 text-center">
          Mon Parcours de Formation
        </h2>

        {/* Trait central */}
        <div className="absolute left-1/2 top-36 bottom-0 transform -translate-x-1/2 border-l-4 border-black/80"></div>

        <div className="space-y-24">
          {trainingCards.map((card, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div className="flex items-center w-full relative" key={index}>
                {isLeft ? (
                  <>
                    <div className="w-1/2 pr-8 text-right relative">
                      <div
                        className="reveal bg-gray-800 p-6 rounded-lg inline-block shadow-md opacity-0 translate-y-10 transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-gray-700 cursor-pointer"
                        onClick={() => setSelectedCard(card)}
                        style={{
                          width: "400px",
                          transform: "translateX(-200px)",
                        }}
                      >
                        <h3 className="font-bold text-xl mb-1">{card.title}</h3>
                        <p className="text-white/70 text-lg">{card.subtitle}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-16 h-16 rounded-full ${card.color} border-4 border-gray-900 flex items-center justify-center text-white text-3xl transition-transform hover:scale-110`}
                      >
                        {card.icon}
                      </div>
                    </div>
                    <div className="w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="w-1/2" />
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-16 h-16 rounded-full ${card.color} border-4 border-gray-900 flex items-center justify-center text-white text-3xl transition-transform hover:scale-110`}
                      >
                        {card.icon}
                      </div>
                    </div>
                    <div className="w-1/2 pl-8 text-left relative">
                      <div
                        className="reveal bg-gray-800 p-6 rounded-lg inline-block shadow-md opacity-0 translate-y-10 transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-1 hover:bg-gray-700 cursor-pointer"
                        onClick={() => setSelectedCard(card)}
                        style={{
                          width: "400px",
                          transform: "translateX(10px)",
                        }}
                      >
                        <h3 className="font-bold text-xl mb-1">{card.title}</h3>
                        <p className="text-white/70 text-lg">{card.subtitle}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {selectedCard && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          title={selectedCard.title}
          description={selectedCard.modalDescription}
        />
      )}
    </section>
  );
}
