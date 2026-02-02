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
      { threshold: 0.1 },
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [selectedCard, setSelectedCard] = useState<null | {
    title: string;
    modalDescription: React.ReactNode;
  }>(null);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20" id="parcours">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[var(--foreground)] mb-10 md:mb-20">
          Mon Parcours de Formation
        </h2>

        <div className="hidden md:block absolute left-1/2 top-36 bottom-0 transform -translate-x-1/2 border-l-4 border-[var(--card-border)] transition-colors duration-300"></div>

        <div className="space-y-24">
          {trainingCards.map((card, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                className="flex flex-col md:flex-row items-center w-full relative"
                key={index}
              >
                {isLeft ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 w-full text-center md:text-right mb-8 md:mb-0">
                      <div
                        className="reveal p-6 rounded-2xl inline-block opacity-0 translate-y-10 cursor-pointer mx-auto md:mx-0
                        /* THÈME + EFFET HOVER REFAIT */
                        bg-[var(--card-bg)] border border-[var(--card-border)] 
                        transition-all duration-300 ease-in-out
                        shadow-md hover:shadow-2xl 
                        hover:-translate-y-2 hover:brightness-110 active:scale-95"
                        onClick={() => setSelectedCard(card)}
                        style={{ maxWidth: "600px" }}
                      >
                        <h3 className="font-extrabold text-xl mb-1 text-[var(--card-text)]">
                          {card.title}
                        </h3>
                        <p className="text-[var(--card-text)] opacity-80 text-lg">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0 mb-6 md:mb-0 z-10">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${card.color} border-4 border-[var(--background)] flex items-center justify-center text-white text-2xl md:text-3xl transition-transform hover:scale-125 shadow-lg`}
                      >
                        {card.icon}
                      </div>
                    </div>

                    <div className="md:w-1/2 hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 hidden md:block" />

                    <div className="absolute md:static left-1/2 transform -translate-x-1/2 md:translate-x-0 mb-6 md:mb-0 z-10">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${card.color} border-4 border-[var(--background)] flex items-center justify-center text-white text-2xl md:text-3xl transition-transform hover:scale-125 shadow-lg`}
                      >
                        {card.icon}
                      </div>
                    </div>

                    <div className="md:w-1/2 md:pl-12 w-full text-center md:text-left">
                      <div
                        className="reveal p-6 rounded-2xl inline-block opacity-0 translate-y-10 cursor-pointer mx-auto md:mx-0
                          /* FOND ET BORDURE SELON LE THÈME */
                          bg-[var(--card-bg)] border border-[var(--card-border)] 
                          
                          /* TRANSITION DOUCE POUR LA MONTÉE ET LA DESCENTE */
                          transition-all duration-500 ease-out
                          
                          /* L'EFFET DE MONTÉE (LÉVITATION) AU SURVOL */
                          hover:-translate-y-4 hover:shadow-2xl hover:brightness-110"
                        onClick={() => setSelectedCard(card)}
                        style={{ maxWidth: "600px" }}
                      >
                        <h3 className="font-extrabold text-xl mb-1 text-[var(--card-text)]">
                          {card.title}
                        </h3>
                        <p className="text-[var(--card-text)] opacity-80 text-lg">
                          {card.subtitle}
                        </p>
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
          size="lg"
          isOpen={true}
          onClose={() => setSelectedCard(null)}
          title={selectedCard.title}
          description={selectedCard.modalDescription}
        />
      )}
    </section>
  );
}
