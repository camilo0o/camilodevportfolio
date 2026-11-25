import { CONTACT } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-20 flex min-h-[85vh] flex-col items-center justify-center gap-6 px-6 py-20 text-center md:px-12"
    >
      <p className="font-mono text-sm text-emerald-400">
        {"// hola, soy"}
      </p>
      <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Camilo
        </span>{" "}
        Fagundez
      </h1>
      <h2 className="max-w-2xl text-lg font-medium text-gray-300 md:text-2xl">
        Estudiante de Tecnólogo en Informática · Desarrollo de software &amp; móvil
      </h2>
      <p className="max-w-xl text-sm text-gray-400 md:text-base">
        Construyo software, aplicaciones web y móviles de punta a punta: desde la base
        de datos hasta la interfaz, pasando por autenticación, despliegue e
        infraestructura, hasta como estas se almacenan en la nube.
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#proyectos"
          className="rounded-xl bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400"
        >
          Ver proyectos
        </a>
        <a
          href={CONTACT.cv}
          download
          className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition hover:border-emerald-400 hover:text-emerald-400"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}