import { techCategories } from "@/app/data/techBadges";
import { useLanguage } from "@/app/contexts/languageContext";

export default function TechBadges() {
  const { language } = useLanguage();

  return (
  <section className="max-w-screen-xl mx-auto px-4 py-12" id="competences">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-10 md:mb-20">
      {language === "FR" ? "Mes compétences" : "My Skills"}
    </h2>

    {/* ← juste ce div à ajouter autour du contenu */}
    <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-white/5 backdrop-blur-sm max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        {techCategories.map((category, index) => (
          <>
            {index > 0 && (
              <hr className="border-white/10" />
            )}
            <div key={category.labelFR}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                {language === "FR" ? category.labelFR : category.labelEN}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.badges.map((badge) => (
                  <img
                    key={badge.name}
                    src={badge.url}
                    alt={badge.name}
                    title={badge.name}
                    className="h-7 rounded transition-transform duration-150 hover:-translate-y-0.5 hover:scale-105"
                  />
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  </section>
);
}
