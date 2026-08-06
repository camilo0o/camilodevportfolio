import { INTERNSHIP } from "../data/portfolioData";

export default function Internship() {
  return (
    <section
      id="pasantia"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20 md:px-12"
    >
      <p className="font-mono text-sm text-amber-400">{"// pasantía"}</p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
        Experiencia laboral
      </h2>

      <div className="mt-10 rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/[0.07] to-transparent p-8 md:p-10">
        <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-300">
          Pasantía
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-white">
          {INTERNSHIP.role}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{INTERNSHIP.org}</p>

        <ul className="mt-6 space-y-3">
          {INTERNSHIP.points.map((point) => (
            <li key={point} className="flex gap-3 text-sm text-gray-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {INTERNSHIP.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/40 px-3 py-1 text-xs text-amber-200 ring-1 ring-amber-400/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}