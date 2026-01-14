export const cards = [
  {
    title: "Développement Web",
    description:
      "Création de sites web modernes, responsives et performants avec Next.js et Tailwind CSS.",
    image: "/favicon.ico",
    link: "#",
    color: "bg-blue-700",
    buttonText: "Voir plus",
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
            <div className="flex justify-center mb-4">
              <img
                src="/Shop4Me/figma1.png"
                alt="Maquette mobile"
                className="rounded-lg shadow-md max-h-96 object-contain"
              />
              <img
                src="/Shop4Me/figma2.png"
                alt="Maquette mobile"
                className="rounded-lg shadow-md max-h-96 object-contain mx-5"
              />
              {/* <p className="italic text-gray-500">Maquette non disponible</p> */}
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
    title: "LegalTech",
    description:
      "Conceptiont et creation d'un outil de gestion de fichier juridique (prototype).",
    image: "/icons/legalTech.png",
    link: "#",
    color: "bg-purple-600",
    buttonText: "Découvrir",
    size: "xl",
    modalDescription: (
      <>
        <div className="max-w-4xl mx-auto p-6 dark:text-gray-100">
          <section className="mb-6 border-b border-white pb-4">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
              Description
            </h3>
            <p className="leading-relaxed">
              LegalTech vise à simplifier l’accès aux services juridiques grâce
              à une plateforme numérique innovante.
            </p>
          </section>

          <section className="mb-6 border-b border-white pb-4">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 dark:border-gray-700 pb-1">
              Aperçu
            </h3>
            <div className="flex justify-center mb-4">
              {/* <img src="/Shop4Me/IntranetPlan.png" alt="Plan intranet" className="rounded-lg shadow-md max-h-96 object-contain" /> */}
              <p className="italic text-gray-500">Contenu non disponible</p>
            </div>
          </section>

          <section className="text-center">
            <a
              href="https://github.com/MatthieuFranques/LegalTech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Voir plus de détails sur GitHub
            </a>
          </section>
        </div>
      </>
    ),
  },
];
