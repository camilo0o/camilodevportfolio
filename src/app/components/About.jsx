import { SOFT_SKILLS, CONTACT } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-20 md:px-12"
    >
      <p className="font-mono text-sm text-emerald-400">{"// sobre-mí"}</p>
      <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
        Quién soy
      </h2>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        {/* Bio + habilidades */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-gray-300 leading-relaxed">
            Soy estudiante avanzado de Tecnólogo en Informática en UTEC, con
            experiencia práctica en desarrollo full-stack, aplicaciones
            móviles y despliegue de infraestructura. Participé en proyectos
            académicos, de equipo y una pasantía real, asumiendo
            responsabilidades concretas en autenticación y seguridad, gestión
            de usuarios y roles, y despliegue en producción. Me caracteriza
            mi capacidad de aprendizaje, adaptación y motivación para asumir
            nuevos desafíos técnicos.
          </p>

          <h3 className="mt-8 mb-4 text-sm font-mono text-gray-400">
            habilidades blandas
          </h3>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CV + contacto */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-gray-300">
              ¿Buscás mi perfil completo con formación y experiencia
              detallada?
            </p>
            <a
              href={CONTACT.cv}
              download
              className="mt-4 inline-block w-full rounded-xl bg-teal-500 px-6 py-3 font-medium text-black transition hover:bg-teal-400"
            >
              Descargar CV (PDF)
            </a>
          </div>

          <div
            id="contacto"
            className="scroll-mt-20 rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <p className="font-mono text-sm text-emerald-400">{"// contacto"}</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition hover:text-emerald-400"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="transition hover:text-emerald-400"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-gray-400">{CONTACT.location}</li>
              <li>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  github.com/camilo0o
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-emerald-400"
                >
                  linkedin.com/in/camilo-fagundez
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}