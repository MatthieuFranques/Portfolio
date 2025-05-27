import { trainingCards } from "@/app/data/trainingTimeline";

export default function TrainingTimeline() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-20 text-center">
          Mon Parcours de Formation
        </h2>

        {/* Trait central */}
        <div className="absolute left-1/2 top-36 bottom-0 transform -translate-x-1/2 border-l-4 border-white/40"></div>

        <div className="space-y-24">
          {trainingCards.map((card, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div className="flex items-center w-full relative" key={index}>
                {isLeft ? (
                  <>
                    <div className="w-1/2 pr-8 text-right relative">
                      <div
                        className="bg-gray-800 p-6 rounded-lg inline-block shadow-md"
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
                        className={`w-16 h-16 rounded-full ${card.color} border-4 border-gray-900 flex items-center justify-center text-white text-3xl`}
                      >
                        {card.icon}
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-16 h-16 rounded-full ${card.color} border-4 border-gray-900 flex items-center justify-center text-white text-3xl`}
                      >
                        {card.icon}
                      </div>
                    </div>
                    <div className="w-1/2 pl-8 text-left relative">
                      <div
                        className="bg-gray-800 p-6 rounded-lg inline-block shadow-md"
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
    </section>
  );
}
