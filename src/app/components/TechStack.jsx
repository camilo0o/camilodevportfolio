import { TECH_CATEGORIES, ICONS } from "../data/portfolioData";

function Chip({ name }) {
  const icon = ICONS[name];
  return (
    <div className="flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 text-sm text-gray-200 shadow-sm ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:ring-emerald-400/50">
      {icon && <img src={`/${icon}`} alt="" className="h-4 w-4 shrink-0" />}
      <span>{name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="tecnologias"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20 md:px-12"
    >
      <p className="font-mono text-sm text-emerald-400">{"// tecnologías"}</p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
        Con qué trabajo
      </h2>
      <p className="mt-3 max-w-2xl text-gray-400">
        Herramientas y lenguajes que uso habitualmente en proyectos
        académicos, de equipo y profesionales.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Chip key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}