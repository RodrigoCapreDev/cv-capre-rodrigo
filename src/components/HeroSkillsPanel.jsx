import { useLanguage } from "../context/LanguageContext.jsx";

const SKILL_GROUPS = [
  { title: "Core",  items: ["Python", "JS", "C#", "SQL"] },
  { title: "Web",   items: ["React", "HTML", "Django"] },
  { title: "Infra", items: ["Git", "Docker", "Azure", "Linux"] },
];

export default function HeroSkillsPanel() {
  const { t } = useLanguage();

  return (
    <aside className="h-full font-mono text-xs select-none mt-8 md:mt-0 md:ml-6">

      <div className="flex items-center justify-between pb-3 mb-1 border-b border-white/10">
        <span className="font-mono text-[10px] tracking-[0.22em] text-primary uppercase">
          Skills
        </span>
        <span className="font-mono text-[10px] text-white/20">/03</span>
      </div>

      <div className="mt-5 space-y-0">
        {SKILL_GROUPS.map((group, i) => (
          <section
            key={group.title}
            className={`pt-4 ${i !== 0 ? "border-t border-white/5" : ""}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary text-xs">▍</span>
              <h3 className="font-mono text-[10px] tracking-[0.18em] text-white/40 uppercase">
                {group.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 font-mono text-[10px] tracking-wide
                             text-white/50 border border-white/10
                             hover:text-primary hover:border-primary/40
                             transition-colors duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-6 border-t border-dashed border-white/10 pt-4 font-mono text-[10px] tracking-[0.18em] text-white/25">
        {t.focus ?? "FOCUS: backend, frontend, deployment"}
      </div>

    </aside>
  );
}