// Mapa de tecnología -> ícono disponible en /public.
// Si una tecnología no tiene ícono, se muestra como chip de texto (mismo patrón
// que ya usaba la sección "Análisis y Abstracción").
export const ICONS = {
  "C": "c.svg",
  "C++": "c++.svg",
  "Java": "java.svg",
  "JavaScript / TypeScript": "javascript.svg",
  "PHP": "php.svg",
  "Python": "python.svg",
  "Spring Boot": "springboot.svg",
  "Angular": "angular.svg",
  "React / React Native": "react.svg",
  "Vue 3": "vue.svg",
  "Laravel": "laravel.svg",
  "Inertia.js": "inertia.svg",
  "Expo": "expo.svg",
  "Next.js": "nextjs.svg",
  "Servlets / JSP": "Servlets.svg",
  "APIs REST": "APIs REST.svg",
  "JWT": "jwt.svg",
  "Apache Tomcat": "Tomcat.svg",
  "Node.js": "nodejs.svg",
  "Hibernate": "hibernate.svg",
  "HTML": "html.svg",
  "CSS": "CSS.svg",
  "Bootstrap": "bootstrap.svg",
  "Tailwind CSS": "tailwind.svg",
  "Flaticon": "flaticon.svg",
  "Filament": "filament.svg",
  "Leaflet": "leaflet.svg",
  "Capacitor": "capacitor.svg",
  "EAS Build": "expo.svg",
  "Android": "android.svg",
  "iOS": "apple.svg",
  "SQL": "sql.svg",
  "MySQL": "mysql.svg",
  "PostgreSQL": "postgresql.svg",
  "DBeaver": "dbeaver.svg",
  "Supabase": "supabase.svg",
  "Cloudinary": "cloudinary.svg",
  "Apache POI": "apache.svg",
  "Git": "Git.svg",
  "GitHub": "Github.svg",
  "Docker": "docker.svg",
  "JetBrains": "Jetbrains.svg",
  "VS Code": "VScode.svg",
  "Postman": "postman.svg",
  "Android Studio": "androidstudio.svg",
  "Xcode": "xcode.svg",
  "Oracle Cloud": "oracle.svg",
  "NGINX": "nginx.svg",
  "Proxmox VE": "proxmox.svg",
  "Terraform": "terraform.svg",
  "Ubuntu Server": "ubuntu.svg",
};

export const TECH_CATEGORIES = [
  {
    title: "Lenguajes",
    items: ["Java", "JavaScript / TypeScript", "PHP", "Python", "C++", "C"],
  },
  {
    title: "Frameworks",
    items: [
      "Spring Boot",
      "Angular",
      "React / React Native",
      "Vue 3",
      "Laravel",
      "Inertia.js",
      "Expo",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    items: [
      "Servlets / JSP",
      "APIs REST",
      "MapStruct",
      "JWT",
      "Apache Tomcat",
      "Node.js",
      "Hibernate",
    ],
  },
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Angular Material",
      "Flaticon",
      "Filament",
      "Leaflet",
      "Diseño responsive",
    ],
  },
  {
    title: "Móvil",
    items: ["Capacitor", "EAS Build", "Android", "iOS"],
  },
  {
    title: "Bases de datos",
    items: ["SQL", "MySQL", "PostgreSQL", "DBeaver", "Supabase"],
  },
  {
    title: "Servicios e integraciones",
    items: ["Cloudinary", "Apache POI", "OpenPDF", "SMTP"],
  },
  {
    title: "Herramientas",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "JetBrains",
      "VS Code",
      "UML",
      "Postman",
      "Android Studio",
      "Xcode",
      "Oracle Cloud",
    ],
  },
  {
    title: "Infraestructura y redes",
    items: [
      "NGINX",
      "Proxmox VE",
      "Active Directory",
      "Samba / SMB",
      "Terraform",
      "Gestión de redes y virtualización",
      "Ubuntu Server",
    ],
  },
  {
    title: "Análisis y abstracción",
    items: [
      "POO",
      "Estructuras de datos",
      "Modelado UML",
      "Patrones de diseño",
      "Arquitectura en capas",
    ],
  },
];

export const SOFT_SKILLS = [
  "Trabajo en equipo",
  "Comunicación efectiva",
  "Resolución de problemas",
  "Pro-actividad",
  "Organización",
  "Responsabilidad",
  "Liderazgo",
  "Creatividad",
  "Adaptabilidad",
  "Puntualidad",
];

export const PROJECTS = [
  {
    name: "Sistema Centro Crecer",
    subtitle: "Gestión para un centro de cuidado infantil",
    context: "Taller de Sistemas de Información Java EE · 5to semestre · Equipo",
    description:
      "Plataforma web para administrar niños, familias, asistencia, grupos y reportes de un centro de cuidado infantil. Estuve a cargo de la seguridad y gestión de usuarios, el módulo de asistencia, el panel de familias y la configuración de grupos, además de colaborar en perfiles, notificaciones e historiales.",
    tags: ["Java", "Spring Boot", "Angular", "PostgreSQL", "JWT", "Cloudinary"],
  },
  {
    name: "LitoralHogar",
    subtitle: "Publicación y búsqueda de propiedades inmobiliarias",
    context: "Taller de Aplicaciones Web con PHP · 5to semestre · Equipo",
    description:
      "Sitio para publicar y buscar propiedades con mapa interactivo. Desarrollé el detalle de propiedad, componentes reutilizables de formularios, el login con autenticación de usuarios y los criterios visuales del sitio.",
    tags: ["PHP", "Laravel", "Vue 3", "Tailwind CSS", "Leaflet"],
  },
  {
    name: "QuizzIT",
    subtitle: "Cuestionarios y trivia por categorías",
    context: "Taller de Aplicaciones para Dispositivos Móviles · 5to semestre · Equipo",
    description:
      "App móvil donde los usuarios juegan partidas de preguntas por categoría y dificultad. Desarrollé las pantallas de historial y detalle de partida, y una barra de tiempo visual por pregunta según la categoría.",
    tags: ["React Native", "Expo", "Supabase"],
  },
  {
    name: "Papuchat",
    subtitle: "Mensajería estilo WhatsApp",
    context: "Taller de Aplicaciones de Internet Ricas · 5to semestre · Individual",
    description:
      "Laboratorio individual que replica la funcionalidad básica de un chat consumiendo una API REST: envío de mensajes e imágenes, indicador de escritura en tiempo real y persistencia local de conversaciones, sin frameworks.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Sistema de reservas de canchas de pádel",
    subtitle: "Consulta de disponibilidad y reservas",
    context: "Programación de Aplicaciones · 4to semestre",
    description:
      "Proyecto que permite consultar disponibilidad y reservar canchas de pádel, desplegado sobre infraestructura cloud.",
    tags: ["Java", "Servlets", "JSP", "MySQL", "Oracle Cloud"],
  },
  {
    name: "Organigrama empresarial",
    subtitle: "Jerarquías y roles organizacionales",
    context: "Estructura de Datos y Algoritmos · 2do semestre · Equipo",
    description:
      "Herramienta para representar la jerarquía de una empresa, gestionando roles mediante estructuras de datos avanzadas como árboles y listas.",
    tags: ["C++"],
  },
  {
    name: "Portfolio personal",
    subtitle: "Este mismo sitio",
    context: "Proyecto personal · Individual",
    description:
      "Sitio de presentación propio, construido para mostrar mis proyectos, tecnologías y experiencia de forma ordenada, con secciones navegables, descarga de CV y datos de contacto directo.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
];

export const INTERNSHIP = {
  role: "Corrección y puesta en producción de aplicación de gramíneas",
  org: "Facultad de Agronomía, Universidad de la República (FAGRO – UdelaR)",
  points: [
    "Responsable de corregir errores y estabilizar la aplicación de gramíneas (Gramíneas App) desarrollada para la facultad, resolviendo bugs de backend y frontend detectados en uso real.",
    "Despliegue en producción en un servidor institucional mediante Docker, incluyendo un manual de despliegue y un script de instalación.",
    "Ajustes funcionales y de usabilidad en la aplicación web: búsqueda, filtrado morfológico y visualización de especies vegetales.",
    "Sincronización offline con respaldo en localStorage y persistencia del orden de datos mediante endpoints propios del backend.",
    "Desarrollo sobre la app móvil: generación de assets de íconos para iOS/Android y mejoras de experiencia de usuario en ambas plataformas.",
  ],
  tags: ["Docker", "JavaScript", "REST APIs", "localStorage", "Ubuntu Server"],
};

export const CONTACT = {
  email: "camilo.pfs@gmail.com",
  phone: "+598 92 336 666",
  location: "Guichón, Paysandú, Uruguay",
  github: "https://github.com/camilo0o",
  linkedin: "https://www.linkedin.com/in/camilo-fagundez",
  cv: "/CV_Ernesto_Camilo_Fagundez.pdf",
};