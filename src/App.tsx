import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Code2,
  Database,
  Globe,
  Smartphone,
  Brain,
  Server,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Sparkles,
  Download,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

type Language = "es" | "en";

const skills = [
  { name: { es: "Angular", en: "Angular" }, icon: <Code2 className="h-5 w-5" /> },
  { name: { es: "TypeScript", en: "TypeScript" }, icon: <Code2 className="h-5 w-5" /> },
  { name: { es: "JavaScript", en: "JavaScript" }, icon: <Code2 className="h-5 w-5" /> },
  { name: { es: "HTML / CSS", en: "HTML / CSS" }, icon: <Globe className="h-5 w-5" /> },
  { name: { es: "Supabase", en: "Supabase" }, icon: <Database className="h-5 w-5" /> },
  { name: { es: "SQL", en: "SQL" }, icon: <Database className="h-5 w-5" /> },
  { name: { es: "n8n", en: "n8n" }, icon: <Server className="h-5 w-5" /> },
  { name: { es: "APIs y automatización", en: "APIs & Automation" }, icon: <Sparkles className="h-5 w-5" /> },
  { name: { es: "Flutter", en: "Flutter" }, icon: <Smartphone className="h-5 w-5" /> },
  { name: { es: "Kotlin", en: "Kotlin" }, icon: <Smartphone className="h-5 w-5" /> },
  { name: { es: "IA aplicada", en: "Applied AI" }, icon: <Brain className="h-5 w-5" /> },
  { name: { es: "Git / GitHub", en: "Git / GitHub" }, icon: <Github className="h-5 w-5" /> },
];

const projects = [
  {
    title: { es: "RiseSense", en: "RiseSense" },
    subtitle: {
      es: "Automatización inteligente para negocios",
      en: "Smart automation for businesses",
    },
    description: {
      es: "Proyecto en desarrollo enfocado en crear soluciones de automatización, chatbots y flujos de WhatsApp para mejorar la gestión de citas, tareas repetitivas y procesos internos de negocios.",
      en: "Ongoing project focused on building automation solutions, chatbots and WhatsApp workflows to improve appointment management, repetitive tasks and internal business processes.",
    },
    tags: {
      es: ["n8n", "IA", "WhatsApp", "Automatización", "Supabase"],
      en: ["n8n", "AI", "WhatsApp", "Automation", "Supabase"],
    },
    link: "https://www.risesense.es/",
  },
  {
    title: {
      es: "Proyecto Final de Grado - GlowUp",
      en: "Final Degree Project - GlowUp",
    },
    subtitle: {
      es: "Interfaz móvil con enfoque visual",
      en: "Mobile interface with a visual focus",
    },
    description: {
      es: "Desarrollo de una interfaz moderna, responsive y orientada a experiencia de usuario, cuidando diseño, estructura y rendimiento.",
      en: "Development of a modern, responsive and user-focused mobile interface, with attention to design, structure and performance.",
    },
    tags: {
      es: ["Desarrollo móvil", "Kotlin", "UI", "Responsive"],
      en: ["Mobile Development", "Kotlin", "UI", "Responsive"],
    },
    link: "https://youtu.be/r2eqATt3_HU",
  },
];

const experience = [
  {
    title: {
      es: "Desarrollador y creador de proyectos propios",
      en: "Developer and creator of independent projects",
    },
    period: { es: "Actualidad", en: "Present" },
    description: {
      es: "Diseño y desarrollo de proyectos tecnológicos centrados en automatización con IA, desarrollo web, experiencia de usuario e integración de herramientas digitales para resolver problemas reales.",
      en: "Design and development of technology projects focused on AI automation, web development, user experience and the integration of digital tools to solve real-world problems.",
    },
  },
  {
    title: {
      es: "Desarrollo técnico en Akra Informática",
      en: "Junior Software Developer at Akra Informática",
    },
    period: { es: "Marzo 2025 - Enero 2026", en: "March 2025 - January 2026" },
    description: {
      es: "Participación en proyectos de programación, diseño de interfaces, bases de datos y desarrollo de aplicaciones con Flutter, reforzando una base sólida como desarrollador full stack junior.",
      en: "Contributed to programming projects, interface design, databases and Flutter application development, strengthening a solid foundation as a junior full-stack developer.",
    },
  },
];

const education = [
  {
    title: {
      es: "Curso UDIA de Automatizaciones e IA aplicada (Agosto 2025 - Enero 2026)",
      en: "UDIA Course in Automation and Applied AI (August 2025 - January 2026)",
    },
    extra: {
      es: "Formación complementaria orientada a herramientas y aplicaciones prácticas de inteligencia artificial y automatización.",
      en: "Additional training focused on practical artificial intelligence and automation tools and applications.",
    },
  },
  {
    title: {
      es: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (2023-2025)",
      en: "Higher Vocational Training in Multiplatform Application Development (2023-2025)",
    },
    extra: {
      es: "Formación en desarrollo de software, bases de datos, programación y aplicaciones.",
      en: "Training in software development, databases, programming and application development.",
    },
  },
  {
    title: {
      es: "Grado Medio en Sistemas Microinformáticos y Redes (2021-2023)",
      en: "Vocational Training in Microcomputer Systems and Networks (2021-2023)",
    },
    extra: {
      es: "Base técnica en sistemas, hardware, redes y soporte informático.",
      en: "Technical foundation in computer systems, hardware, networks and IT support.",
    },
  },
  {
    title: { es: "ESO", en: "Secondary Education (ESO)" },
    extra: {
      es: "Formación académica general.",
      en: "General secondary education.",
    },
  },
];

const copy = {
  es: {
    headerSubtitle: "Programador · Portfolio CV",
    navAbout: "Sobre mí",
    navSkills: "Skills",
    navProjects: "Proyectos",
    navExperience: "Experiencia",
    navContact: "Contacto",
    digitalCv: "CV digital",
    heroBefore: "Construyo",
    heroAfter: ", automatizaciones y experiencias web con enfoque moderno.",
    intro:
      "Soy desarrollador de software con formación en DAM y SMR, enfocado en desarrollo web, aplicaciones móviles, automatización e integración de sistemas con IA. Me gusta crear soluciones útiles, visuales y bien pensadas que conviertan ideas en productos reales.",
    location: "Alicante, España",
    role: "Desarrollador de Software Junior",
    viewProjects: "Ver proyectos",
    contact: "Contactar",
    profile: "Perfil",
    available: "Disponible",
    specialty: "Especialidad",
    specialtyText: "Desarrollo web y aplicaciones móviles, automatización e integración de sistemas con IA.",
    focus: "Enfoque",
    focusText: "Producto + código + diseño",
    interest: "Interés",
    interestText: "IA, automatización y desarrollo web y móvil",
    favoriteStack: "Stack favorito",
    aboutEyebrow: "Sobre mí",
    aboutTitle: "Un perfil técnico con mentalidad de creación",
    aboutSubtitle:
      "Me gusta aprender rápido, construir cosas útiles y combinar desarrollo, automatización y visión de producto para aportar valor real.",
    aboutP1Before: "Tengo formación en ",
    aboutDegree1: "Desarrollo de Aplicaciones Multiplataforma",
    aboutMiddle: " y ",
    aboutDegree2: "Sistemas Microinformáticos y Redes",
    aboutP1After:
      ", lo que me da una base sólida tanto en programación como en sistemas. Disfruto creando interfaces modernas, integrando servicios, automatizando procesos y explorando cómo aplicar la inteligencia artificial y el desarrollo de software en proyectos reales.",
    aboutP2:
      "Busco oportunidades donde pueda seguir creciendo como desarrollador, aportar ideas, resolver problemas y participar en proyectos con ambición tecnológica y enfoque práctico.",
    highlights: "Highlights",
    highlightsItems: [
      "Interés por producto digital e IA",
      "Desarrollo frontend moderno",
      "Automatización de procesos",
      "Integración con APIs y bases de datos",
    ],
    skillsTitle: "Tecnologías y herramientas",
    skillsSubtitle:
      "Una base técnica orientada a construir productos funcionales, interfaces potentes y automatizaciones útiles.",
    skillLevel: "Nivel en crecimiento constante",
    projectsEyebrow: "Proyectos",
    projectsTitle: "Trabajo con ideas que conectan código y utilidad",
    featuredProject: "Proyecto destacado",
    viewMore: "Ver más",
    expEyebrow: "Experiencia y formación",
    expTitle: "Base técnica, aprendizaje constante y mentalidad builder",
    professionalExperience: "Experiencia Profesional",
    education: "Formación",
    contactEyebrow: "Contacto",
    contactTitle: "¿Buscas un perfil joven, técnico y con ganas de construir?",
    downloadCv: "Descargar CV PDF",
  },
  en: {
    headerSubtitle: "Software Developer · CV Portfolio",
    navAbout: "About me",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",
    digitalCv: "Digital CV",
    heroBefore: "I build",
    heroAfter: ", automation and modern web experiences.",
    intro:
      "I am a software developer with vocational training in application development and IT systems, focused on web development, mobile applications, automation and AI-powered system integration. I enjoy building useful, well-designed solutions that turn ideas into real products.",
    location: "Alicante, Spain",
    role: "Junior Software Developer",
    viewProjects: "View projects",
    contact: "Contact me",
    profile: "Profile",
    available: "Open to opportunities",
    specialty: "Specialty",
    specialtyText: "Web and mobile development, automation and AI-powered system integration.",
    focus: "Focus",
    focusText: "Product + code + design",
    interest: "Interests",
    interestText: "AI, automation, web and mobile development",
    favoriteStack: "Favorite stack",
    aboutEyebrow: "About me",
    aboutTitle: "A technical profile with a builder mindset",
    aboutSubtitle:
      "I learn quickly, enjoy building useful products and combine software development, automation and product thinking to create real value.",
    aboutP1Before: "I have vocational training in ",
    aboutDegree1: "Multiplatform Application Development",
    aboutMiddle: " and ",
    aboutDegree2: "Microcomputer Systems and Networks",
    aboutP1After:
      ", giving me a solid foundation in both programming and IT systems. I enjoy creating modern interfaces, integrating services, automating processes and exploring practical applications of artificial intelligence and software development.",
    aboutP2:
      "I am looking for opportunities where I can continue growing as a developer, contribute ideas, solve problems and take part in ambitious technology projects with a practical mindset.",
    highlights: "Highlights",
    highlightsItems: [
      "Interest in digital products and AI",
      "Modern frontend development",
      "Process automation",
      "API and database integration",
    ],
    skillsTitle: "Technologies and tools",
    skillsSubtitle:
      "A technical foundation focused on building functional products, strong interfaces and useful automations.",
    skillLevel: "Continuously developing",
    projectsEyebrow: "Projects",
    projectsTitle: "Building ideas that connect code with real-world value",
    featuredProject: "Featured project",
    viewMore: "View more",
    expEyebrow: "Experience & Education",
    expTitle: "Technical foundation, continuous learning and a builder mindset",
    professionalExperience: "Professional Experience",
    education: "Education",
    contactEyebrow: "Contact",
    contactTitle: "Looking for a motivated junior technical profile ready to build?",
    downloadCv: "Download CV PDF",
  },
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/60">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-white/65 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function CVWebsite() {
  const [language, setLanguage] = useState<Language>("es");
  const t = copy[language];

  const cvFile =
    language === "en"
      ? `${import.meta.env.BASE_URL}cv_gonzalo_mosqueda_en.pdf`
      : `${import.meta.env.BASE_URL}cv_gonzalo_mosqueda.pdf`;

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-fuchsia-500/30">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%),linear-gradient(to_bottom,#050816,#070b1a_45%,#050816)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <header className="sticky top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sm font-semibold">
            CV
          </div>
          <div>
            <p className="text-sm font-medium text-white/90">Gonzalo Mosqueda Herrera</p>
            <p className="text-xs text-white/50">{t.headerSubtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#sobre-mi" className="transition hover:text-white">{t.navAbout}</a>
            <a href="#skills" className="transition hover:text-white">{t.navSkills}</a>
            <a href="#proyectos" className="transition hover:text-white">{t.navProjects}</a>
            <a href="#experiencia" className="transition hover:text-white">{t.navExperience}</a>
            <a href="#contacto" className="transition hover:text-white">{t.navContact}</a>
          </nav>

          <button
            type="button"
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
            title={language === "es" ? "Switch to English" : "Cambiar a español"}
          >
            {language === "es" ? "EN 🇬🇧" : "ES 🇪🇸"}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20">
        <section className="relative grid min-h-[88vh] items-center gap-10 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4" />
              {t.digitalCv}
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl xl:text-[6rem]">
              {t.heroBefore}{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-white to-cyan-400 bg-clip-text text-transparent">
                software
              </span>
              {t.heroAfter}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">{t.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <MapPin className="h-4 w-4" /> {t.location}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Briefcase className="h-4 w-4" /> {t.role}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <GraduationCap className="h-4 w-4" /> DAM · SMR
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#proyectos" className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:scale-[1.02]">
                {t.viewProjects}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                {t.contact}
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <GlassCard className="relative overflow-hidden p-5 md:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">{t.profile}</p>
                    <h3 className="text-2xl font-semibold">Gonzalo Mosqueda Herrera</h3>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    {t.available}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl border border-white/10 bg-[#0a1023]/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">{t.specialty}</p>
                    <p className="mt-2 text-lg text-white/90">{t.specialtyText}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/45">{t.focus}</p>
                      <p className="mt-2 font-medium text-white/90">{t.focusText}</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/45">{t.interest}</p>
                      <p className="mt-2 font-medium text-white/90">{t.interestText}</p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="mb-3 text-xs text-white/45">{t.favoriteStack}</p>
                    <div className="flex flex-wrap gap-2">
                      {["Angular", "TypeScript", "n8n", "APIs", "Flutter", "Kotlin"].map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <motion.section id="sobre-mi" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="py-14 md:py-24">
          <SectionTitle eyebrow={t.aboutEyebrow} title={t.aboutTitle} subtitle={t.aboutSubtitle} />

          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard className="p-6 md:col-span-2">
              <p className="text-base leading-8 text-white/75 md:text-lg">
                {t.aboutP1Before}<span className="text-white">{t.aboutDegree1}</span>{t.aboutMiddle}<span className="text-white">{t.aboutDegree2}</span>{t.aboutP1After}
              </p>
              <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">{t.aboutP2}</p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/45">{t.highlights}</p>
              <div className="space-y-4 text-sm text-white/75">
                {t.highlightsItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">{item}</div>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.section>

        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="py-14 md:py-24">
          <SectionTitle eyebrow="Skills" title={t.skillsTitle} subtitle={t.skillsSubtitle} />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div key={skill.name.en} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.03 }}>
                <GlassCard className="flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90">{skill.icon}</div>
                  <div>
                    <p className="font-medium text-white/90">{skill.name[language]}</p>
                    <p className="text-sm text-white/45">{t.skillLevel}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="proyectos" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="py-14 md:py-24">
          <SectionTitle eyebrow={t.projectsEyebrow} title={t.projectsTitle} />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div key={project.title.en} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
                <GlassCard className="group h-full p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="mb-6 flex h-44 items-end rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(217,70,239,0.22),rgba(34,211,238,0.12),rgba(255,255,255,0.04))] p-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">{t.featuredProject}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title[language]}</h3>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-fuchsia-300/90">{project.subtitle[language]}</p>
                  <p className="mt-4 leading-7 text-white/65">{project.description[language]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags[language].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-white/85 transition hover:text-white">
                    {t.viewMore}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="experiencia" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="py-14 md:py-24">
          <SectionTitle eyebrow={t.expEyebrow} title={t.expTitle} />

          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard className="p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-semibold">{t.professionalExperience}</h3>
              <div className="space-y-5">
                {experience.map((item) => (
                  <div key={item.title.en} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-medium text-white/90">{item.title[language]}</p>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">{item.period[language]}</span>
                    </div>
                    <p className="mt-3 leading-7 text-white/65">{item.description[language]}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-semibold">{t.education}</h3>
              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.title.en} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="font-medium text-white/90">{item.title[language]}</p>
                    <p className="mt-2 leading-7 text-white/65">{item.extra[language]}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.section>

        <motion.section id="contacto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="py-14 md:py-24">
          <GlassCard className="overflow-hidden p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">{t.contactEyebrow}</div>
                <h2 className="mb-20 text-3xl font-semibold tracking-tight md:text-5xl">{t.contactTitle}</h2>
              </div>

              <div className="grid gap-4">
                <a href="mailto:gonzamosqueda@gmail.com" className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-white/75" />
                    <span>gonzamosqueda@gmail.com</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/45" />
                </a>

                <a href="https://github.com/gonzalo410" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-white/75" />
                    <span>GitHub</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/45" />
                </a>

                <a href="https://linkedin.com/in/gonzalo-joaquin-mosqueda-herrera-b00b64328" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-white/75" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/45" />
                </a>

                <a href={cvFile} download className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-white/75" />
                    <span>{t.downloadCv}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/45" />
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.section>
      </main>
    </div>
  );
}
