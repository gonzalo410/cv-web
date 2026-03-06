import React from "react";
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

const skills = [
  { name: "Angular", icon: <Code2 className="h-5 w-5" /> },
  { name: "TypeScript", icon: <Code2 className="h-5 w-5" /> },
  { name: "JavaScript", icon: <Code2 className="h-5 w-5" /> },
  { name: "HTML / CSS", icon: <Globe className="h-5 w-5" /> },
  { name: "Supabase", icon: <Database className="h-5 w-5" /> },
  { name: "SQL", icon: <Database className="h-5 w-5" /> },
  { name: "n8n", icon: <Server className="h-5 w-5" /> },
  { name: "APIs & Automatización", icon: <Sparkles className="h-5 w-5" /> },
  { name: "Flutter", icon: <Smartphone className="h-5 w-5" /> },
  { name: "Kotlin", icon: <Smartphone className="h-5 w-5" /> },
  { name: "IA aplicada", icon: <Brain className="h-5 w-5" /> },
  { name: "Git / GitHub", icon: <Github className="h-5 w-5" /> },
];

const projects = [
  {
    title: "RiseSense",
    subtitle: "Automatización inteligente para negocios",
    description:
      "Proyecto enfocado en crear soluciones de automatización, chatbots y flujos de WhatsApp para mejorar la gestión de citas, tareas repetitivas y procesos internos de negocios.",
    tags: ["n8n", "IA", "WhatsApp", "Automatización", "Supabase"],
    link: "#",
  },
  {
    title: "Proyecto Final de Grado - GlowUp",
    subtitle: "Interfaz móvil con enfoque visual",
    description:
      "Desarrollo de una interfaz moderna, responsive y orientada a experiencia de usuario, cuidando diseño, estructura y rendimiento.",
    tags: ["Desarrollo de Software para Móviles", "Kotlin", "UI", "Responsive"],
    link: "https://youtu.be/r2eqATt3_HU",
  },
];

const experience = [
  {
    title: "Desarrollador y creador de proyectos propios",
    period: "Actualidad",
    description:
      "Diseño y desarrollo de proyectos tecnológicos centrados en automatización con IA, desarrollo web, experiencia de usuario e integración de herramientas digitales para resolver problemas reales.",
  },
  {
    title: "Desarrollo técnico en la empresa Akra Informática",
    period: "Último año",
    description:
      "Participación en proyectos de programación, diseño de interfaces, bases de datos, desarrollo de aplicaciones con Flutter, reforzando una base sólida como programador full stack junior en la empresa Akra Informática desde Marzo de 2025 hasta Enero de 2026.",
  },
];

const education = [
  {
    title: "Curso UDIA de Automatizaciones e IA aplicada (Agosto, 2025 - Enero, 2026)",
    extra: "Formación complementaria orientada a herramientas y aplicaciones prácticas de inteligencia artificial y automatizacion.",
  },
  {
    title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (2023-2025)",
    extra: "Formación en desarrollo de software, bases de datos, programación y aplicaciones.",
  },
  {
    title: "Grado Medio en Sistemas Microinformáticos y Redes (2021-2023)",
    extra: "Base técnica en sistemas, hardware, redes y soporte informático.",
  },
  {
    title: "ESO",
    extra: "Formación académica general.",
  },
  
];

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
            <p className="text-xs text-white/50">Programador · Portfolio CV</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#sobre-mi" className="transition hover:text-white">Sobre mí</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#proyectos" className="transition hover:text-white">Proyectos</a>
          <a href="#experiencia" className="transition hover:text-white">Experiencia</a>
          <a href="#contacto" className="transition hover:text-white">Contacto</a>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20">
        <section className="relative grid min-h-[88vh] items-center gap-10 py-14 md:grid-cols-[1.15fr_0.85fr] md:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
              <Sparkles className="h-4 w-4" />
              CV digital
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl xl:text-[6rem]">
              Construyo <span className="bg-gradient-to-r from-fuchsia-400 via-white to-cyan-400 bg-clip-text text-transparent">software</span>,
              automatizaciones y experiencias web con enfoque moderno.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Soy desarrollador de software con formación en DAM y SMR, enfocado en desarrollo web, aplicaciones móviles, automatización e integración de sistemas con IA. Me gusta crear soluciones útiles, visuales y bien pensadas que conviertan ideas en productos reales.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <MapPin className="h-4 w-4" /> Alicante, España
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Briefcase className="h-4 w-4" /> Desarrollador Full Stack Junior
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <GraduationCap className="h-4 w-4" /> DAM · SMR
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:scale-[1.02]"
              >
                Ver proyectos
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Contactar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <GlassCard className="relative overflow-hidden p-5 md:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Perfil</p>
                    <h3 className="text-2xl font-semibold">Gonzalo Mosqueda Herrera</h3>
                  </div>
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Disponible
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl border border-white/10 bg-[#0a1023]/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/45">Especialidad</p>
                    <p className="mt-2 text-lg text-white/90">Desarrollo web y aplicaciones móviles, automatización e integración de sistemas con IA.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/45">Enfoque</p>
                      <p className="mt-2 font-medium text-white/90">Producto + código + diseño</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/45">Interés</p>
                      <p className="mt-2 font-medium text-white/90">IA, automatización y Desarrollo Web y Móvil</p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="mb-3 text-xs text-white/45">Stack favorito</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Angular",
                        "TypeScript",
                        "n8n",
                        "APIs",
                        "Flutter",
                        "Kotlin",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
                        >
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

        <motion.section
          id="sobre-mi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="py-14 md:py-24"
        >
          <SectionTitle
            eyebrow="Sobre mí"
            title="Un perfil técnico con mentalidad de creación"
            subtitle="Me gusta aprender rápido, construir cosas útiles y combinar desarrollo, automatización y visión de producto para aportar valor real."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <GlassCard className="p-6 md:col-span-2">
              <p className="text-base leading-8 text-white/75 md:text-lg">
                Tengo formación en <span className="text-white">Desarrollo de Aplicaciones Multiplataforma</span> y <span className="text-white">Sistemas Microinformáticos y Redes</span>, lo que me da una base sólida tanto en programación como en sistemas. Disfruto creando interfaces modernas, integrando servicios, automatizando procesos y explorando cómo aplicar la inteligencia artificial y el desarrollo de software en proyectos reales.
              </p>
              <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
                Busco oportunidades donde pueda seguir creciendo como desarrollador, aportar ideas, resolver problemas y participar en proyectos con ambición tecnológica y enfoque práctico.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/45">Highlights</p>
              <div className="space-y-4 text-sm text-white/75">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Interés por producto digital e IA
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Desarrollo frontend moderno
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Automatización de procesos
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Integración con APIs y bases de datos
                </div>
                
              </div>
            </GlassCard>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="py-14 md:py-24"
        >
          <SectionTitle
            eyebrow="Skills"
            title="Tecnologías y herramientas"
            subtitle="Una base técnica orientada a construir productos funcionales, interfaces potentes y automatizaciones útiles."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
              >
                <GlassCard className="flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90">
                    {skill.icon}
                  </div>
                  <div>
                    <p className="font-medium text-white/90">{skill.name}</p>
                    <p className="text-sm text-white/45">Nivel en crecimiento constante</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="proyectos"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="py-14 md:py-24"
        >
          <SectionTitle
            eyebrow="Proyectos"
            title="Trabajo con ideas que conectan código y utilidad"
            subtitle=""
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <GlassCard className="group h-full p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="mb-6 flex h-44 items-end rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(217,70,239,0.22),rgba(34,211,238,0.12),rgba(255,255,255,0.04))] p-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">Proyecto destacado</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-fuchsia-300/90">{project.subtitle}</p>
                  <p className="mt-4 leading-7 text-white/65">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-white/85 transition hover:text-white"
                  >
                    Ver más
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experiencia"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="py-14 md:py-24"
        >
          <SectionTitle
            eyebrow="Experiencia y formación"
            title="Base técnica, aprendizaje constante y mentalidad builder"
            subtitle=""
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard className="p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-semibold">Experiencia Profesional</h3>
              <div className="space-y-5">
                {experience.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-medium text-white/90">{item.title}</p>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 leading-7 text-white/65">{item.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-semibold">Formación</h3>
              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="font-medium text-white/90">{item.title}</p>
                    <p className="mt-2 leading-7 text-white/65">{item.extra}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.section>

        <motion.section
          id="contacto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="py-14 md:py-24"
        >
          <GlassCard className="overflow-hidden p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                  Contacto
                </div>
                <h2 className="mb-20 text-3xl font-semibold tracking-tight md:text-5xl">
                  ¿Buscas un perfil joven, técnico y con ganas de construir?
                </h2>
              </div>

              <div className="grid gap-4">
                <a
                  href="mailto:gonzamosqueda@gmail.com"
                  className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-white/75" />
                    <span>gonzamosqueda@gmail.com</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/45" />
                </a>

                <a
                  href="https://github.com/gonzalo410"
                  className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-white/75" />
                    <span>GitHub</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/45" />
                </a>

                <a
                  href="https://linkedin.com/in/gonzalo-joaquin-mosqueda-herrera-b00b64328"
                  className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-white/75" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/45" />
                </a>

                <a 
                href="/cv-web/cv_gonzalo_mosqueda_herrera_hosteleria.pdf"
                download
                className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <Download className="h-5 w-5 text-white/75" />
                  <span>Descargar CV PDF</span>
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
