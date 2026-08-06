import { PROJECTS } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20 md:px-12"
    >
      <p className="font-mono text-sm text-emerald-400">{"// proyectos"}</p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
        Proyectos académicos y de equipo
      </h2>
      <p className="mt-3 max-w-2xl text-gray-400">
        Trabajos desarrollados a lo largo de la carrera, individualmente y en
        equipo, para distintas asignaturas del Tecnólogo en Informática.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-emerald-400/40"
          >
            <h3 className="text-xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-emerald-400">
              {project.subtitle}
            </p>
            <p className="mt-1 font-mono text-xs text-gray-500">
              {project.context}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/40 px-3 py-1 text-xs text-gray-300 ring-1 ring-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}