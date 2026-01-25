export const cards = [
  {
    title: "Développement Web",
    description:
      "Création de sites web modernes, responsives et performants avec Next.js et Tailwind CSS.",
    image: "/favicon.ico",
    link: "#",
    color: "bg-blue-700",
    // buttonText: "Voir plus",
    size: "xl",
  },
  {
    title: "ShopForMe",
    description:
      "Développement d’une applciation pour aider les malvoyant et aveugle a faire leurs course en autonomie",
    image: "/logoShop4Me.svg",
    link: "#",
    color: "bg-green-600",
    buttonText: "En savoir plus",
    size: "xl",
    modalDescription: (
      <>
        <div className="max-w-4xl mx-auto p-6 dark:text-gray-100">
          <section className="mb-6 border-b border-white pb-4">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
              Description
            </h3>
            <p className="leading-relaxed">
              ShopForMe est une application mobile associée à des dispositifs
              IoT, conçue pour aider les personnes aveugles ou malvoyantes à
              faire leurs courses en toute autonomie. Elle les guide dans le
              magasin, leur permet de localiser des produits, et d’éviter les
              obstacles.
            </p>
          </section>

          <section className="mb-6 border-b border-white pb-4">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
              Démo vidéo
            </h3>
            <div className="flex justify-center mb-4">
              <video className="h-80 rounded-lg shadow-md" muted autoPlay loop>
                <source src="/video/Shop4Me_demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section className="mb-6 border-b border-white pb-4">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
              Contexte & équipe
            </h3>
            <p className="leading-relaxed">
              Ce projet a été réalisé dans le cadre de ma formation à Epitech.
              Il a évolué au fil du temps : nous étions d'abord 3 pionniers,
              puis 8, et enfin 11 membres dans l'équipe. J'occupais le poste de
              PO et développeur mobile.
            </p>
          </section>

          <section className="mb-6 border-b border-white pb-4">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
              Architecture globale (App + IoT)
            </h3>
            <div className="flex justify-center mb-4">
              <img
                src="/Shop4Me/ArchitectureHardwaire.png"
                alt="Schéma de fonctionnement global"
                className="rounded-lg shadow-md max-h-96 object-contain"
              />
            </div>
          </section>

          <section className="mb-6 border-b border-white pb-4">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
              Maquette mobile
            </h3>

            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
              <img
                src="/Shop4Me/figma1.png"
                alt="Maquette mobile 1"
                className="
      w-full 
      max-w-[180px] 
      sm:max-w-[220px] 
      md:max-w-[260px] 
      rounded-lg 
      shadow-md 
      object-contain
    "
              />
              <img
                src="/Shop4Me/figma2.png"
                alt="Maquette mobile 2"
                className="
      w-full 
      max-w-[180px] 
      sm:max-w-[220px] 
      md:max-w-[260px] 
      rounded-lg 
      shadow-md 
      object-contain
    "
              />
            </div>
          </section>

          {/* <section className="text-center">
            <a
              href="https://github.com/FredericLEDOUARIN/Esp-ShopForMe-Local"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Voir plus de détails sur GitHub
            </a>
          </section> */}
        </div>
      </>
    ),
  },
  {
    title: "LearnALanguage",
    description:
      "Application mobile pour apprendre les bases de nouvelles langues de manière ludique. Anglais uniquement pour le moment.",
    image: "/logoLL.png",
    link: "#",
    color: "bg-purple-600",
    buttonText: "En savoir plus",
    size: "xl",
    modalDescription: (
      <>
        <div className="max-w-4xl mx-auto p-6 dark:text-gray-100">
          <section className="mb-6 border-b border-white pb-4">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
              Description
            </h3>
            <p className="leading-relaxed">
              LearnALanguage propose une approche ludique et complète pour
              apprendre l’anglais à ton rythme. Avec différents modes
              d’entraînement, tu peux :
            </p>
            <br />
            <ul className="leading-relaxed list-disc list-inside">
              <li>
                <strong>Quiz</strong> : teste tes connaissances sur le
                vocabulaire et la grammaire.
              </li>
              <li>
                <strong>Quiz Multiple</strong> : renforce ta mémoire et tes
                choix rapides avec des questions à choix multiples.
              </li>
              <li>
                <strong>Quiz de rapidité</strong> : challenge-toi et améliore
                ton temps de réponse.
              </li>
              <li>
                <strong>Trouver le bon ordre</strong> : pratique la construction
                correcte des phrases.
              </li>
              <li>
                <strong>Compréhension</strong> : travaille ton écoute et ta
                compréhension orale.
              </li>
            </ul>
          </section>

          <section className="mb-6 border-b border-white pb-4">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
              Aperçu
            </h3>
            <div className="flex justify-center mb-4">
              <img
                src="/LearnLanguage/screenLL.jpg"
                className="rounded-lg shadow-md max-h-96 object-contain"
                alt="Aperçu LearnALanguage"
              />
            </div>
          </section>

          <section className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://learn-language-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Découvrir l’application
            </a>

            <a
              href="https://github.com/MatthieuFranques/LearnLanguage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition"
            >
              Répertoire GitHub
            </a>
          </section>
        </div>
      </>
    ),
  },
];
