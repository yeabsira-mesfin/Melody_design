import { useMemo } from "react";
import Himg from './assets/Hero.jpg';
import ProjectOne from './assets/ProjectOne.gif';
import Studio from './assets/Studio.gif';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

type NavItem = { label: string; href: string };

function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-6xl px-5 mx-auto">{children}</div>;
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs tracking-[0.22em] uppercase text-[color:var(--espresso)]/70">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[color:var(--onyx)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-[color:var(--onyx)]/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs border rounded-full border-black/10 bg-white/70 text-black/70">
      {children}
    </span>
  );
}

function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-6 shadow-sm">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="mt-0.5 rounded-xl border border-black/10 bg-[color:var(--bg)] p-2">
            {icon}
          </div>
        ) : null}
        <div>
          <h3 className="text-base font-semibold text-[color:var(--onyx)]">
            {title}
          </h3>
          <div className="mt-2 text-sm leading-relaxed text-[color:var(--onyx)]/70">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--deep)] text-white hover:opacity-90"
      : "border border-black/10 bg-white/70 text-[color:var(--onyx)] hover:bg-white";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Navbar({ items }: { items: NavItem[] }) {
  return (
    <div className="sticky top-0 z-40 border-b border-black/10 bg-[color:var(--bg)]/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid bg-white border h-9 w-9 rounded-xl border-black/10 place-items-center">
              <span className="text-sm font-semibold text-[color:var(--deep)]">
                M
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Melody Interior Design</p>
              <p className="text-[11px] text-black/55">
                Interior Architecture Office
              </p>
            </div>
          </a>

          <div className="items-center hidden gap-6 md:flex">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="text-sm text-black/70 hover:text-black"
              >
                {it.label}
              </a>
            ))}
          </div>

          <Button href="#contact">
            Initiate Consultation <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </div>
  );
}

function LeaderCard({
  name,
  role,
  title,
  bio,
  img,
}: {
  name: string;
  role: string;
  title: string;
  bio: string;
  img: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-6 shadow-sm">
        <p className="text-xs tracking-[0.22em] uppercase text-black/55">{role}</p>
        <h3 className="mt-2 text-xl font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-black/60">{title}</p>
        <p className="mt-4 text-sm leading-relaxed text-black/70">{bio}</p>

        <div className="grid gap-3 mt-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-[color:var(--bg)] p-4">
            <p className="text-xs text-black/55">Focus</p>
            <p className="mt-1 text-sm font-semibold">Spatial coherence</p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-[color:var(--bg)] p-4">
            <p className="text-xs text-black/55">Method</p>
            <p className="mt-1 text-sm font-semibold">Context driven design</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-3 shadow-sm">
        <img src={img} alt={name} className="object-cover w-full h-full rounded-xl" />
      </div>
    </div>
  );
}

export default function App() {
  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Works", href: "#works" },
      { label: "Leadership", href: "#leadership" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: "Residential Interior Architecture",
        body:
          "Domestic environments structured through spatial hierarchy, ergonomic logic, and material continuity, designed to accommodate evolving patterns of inhabitation.",
      },
      {
        title: "Commercial Interior Architecture",
        body:
          "Program-driven interior systems for offices, retail environments, hospitality spaces, and showrooms, aligning spatial performance, brand articulation, and user behavior.",
      },
      {
        title: "Spatial Visualization & Representation",
        body:
          "Advanced three-dimensional representation techniques conveying volumetric relationships, material tactility, and atmospheric intent prior to realization.",
      },
      {
        title: "Adaptive Reuse & Spatial Reconfiguration",
        body:
          "Strategic interventions within existing structures, reprogramming space through refined circulation, functional redistribution, and architectural recalibration.",
      },
      {
        title: "Materiality & Chromatic Systems",
        body:
          "Specification of materials and color frameworks informed by durability, sensory perception, and compositional balance.",
      },
      {
        title: "Spatial Planning & Interior Composition",
        body:
          "Analytical configuration of interior layouts prioritizing flow, adaptability, and multi-functional performance, resolved through disciplined detailing.",
      },
    ],
    []
  );

  const process = useMemo(
    () => [
      { step: "01", title: "Programmatic Analysis", body: "Interpretation of spatial requirements, operational needs, and contextual parameters." },
      { step: "02", title: "Conceptual Formulation", body: "Development of architectural concepts, spatial diagrams, and material strategies." },
      { step: "03", title: "Design Development & Resolution", body: "Refinement of spatial systems, finish specifications, and technical coordination." },
      { step: "04", title: "Implementation Oversight", body: "Construction-phase supervision ensuring alignment between conceptual intent and built execution." },
      { step: "05", title: "Completion & Spatial Commissioning", body: "Delivery of a resolved interior condition, operational, coherent, and inhabitable." },
    ],
    []
  );

  const reasons = useMemo(
    () => [
      "Architecture-led design methodology",
      "Emphasis on spatial performance over ornamentation",
      "Contextual integration of cultural narratives",
      "Methodical design process and execution control",
      "Commitment to enduring, non-trend-driven interiors",
    ],
    []
  );

  const works = useMemo(
    () => [
      { title: "Residence, Addis Ababa", tag: "Residential", img: ProjectOne },
      { title: "Boutique Showroom", tag: "Commercial", img: "https://placehold.co/1200x900/png?text=Project+02" },
      { title: "Hospitality Lounge", tag: "Hospitality", img: "https://placehold.co/1200x900/png?text=Project+03" },
      { title: "Office Interior System", tag: "Workplace", img: "https://placehold.co/1200x900/png?text=Project+04" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--onyx)]">
      <Navbar items={navItems} />

      {/* HERO */}
      <section id="home" className="pt-12 sm:pt-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>Spatial intelligence</Pill>
                <Pill>Material discipline</Pill>
                <Pill>Ethiopia based</Pill>
              </div>

              <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Articulating interior architectures beyond surface
              </h1>

              <p className="max-w-xl mt-4 text-sm leading-relaxed sm:text-base text-black/70">
                Spatial intelligence informed by culture, proportion, and contemporary
                inhabitation.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <Button href="#contact">
                  Initiate Consultation <ArrowRight size={16} />
                </Button>
                <Button href="#works" variant="ghost">
                  View Selected Works <ChevronRight size={16} />
                </Button>
              </div>

              <div className="grid max-w-lg grid-cols-3 gap-3 mt-8">
                <div className="p-4 border rounded-2xl border-black/10 bg-white/70">
                  <p className="text-xs text-black/60">Focus</p>
                  <p className="mt-1 text-sm font-semibold">Interior architecture</p>
                </div>
                <div className="p-4 border rounded-2xl border-black/10 bg-white/70">
                  <p className="text-xs text-black/60">Method</p>
                  <p className="mt-1 text-sm font-semibold">Architectural inquiry</p>
                </div>
                <div className="p-4 border rounded-2xl border-black/10 bg-white/70">
                  <p className="text-xs text-black/60">Outcome</p>
                  <p className="mt-1 text-sm font-semibold">Enduring spaces</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-black/10 bg-[color:var(--surface)] p-3 shadow-sm">
                <img
                  src={Himg}
                  alt="Hero placeholder"
                  className="h-[420px] w-full rounded-2xl object-cover"
                />
              </div>

              <div className="grid grid-cols-4 gap-3 mt-4">
                <div className="p-3 border rounded-2xl border-black/10 bg-white/70">
                  <div className="h-10 w-full rounded-xl bg-[color:var(--sage)]" />
                  <p className="mt-2 text-[11px] text-black/60">Sage</p>
                </div>
                <div className="p-3 border rounded-2xl border-black/10 bg-white/70">
                  <div className="h-10 w-full rounded-xl bg-[color:var(--moss)]" />
                  <p className="mt-2 text-[11px] text-black/60">Moss</p>
                </div>
                <div className="p-3 border rounded-2xl border-black/10 bg-white/70">
                  <div className="h-10 w-full rounded-xl bg-[color:var(--taupe)]" />
                  <p className="mt-2 text-[11px] text-black/60">Taupe</p>
                </div>
                <div className="p-3 border rounded-2xl border-black/10 bg-white/70">
                  <div className="h-10 w-full rounded-xl bg-[color:var(--deep)]" />
                  <p className="mt-2 text-[11px] text-black/60">Deep</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Studio Introduction"
            title="Interior design as architectural inquiry"
            subtitle="At Melody Interior Design Office, interior design is positioned as an architectural inquiry rather than an exercise in visual embellishment. Our practice engages interior space as a system of relationships between volume, circulation, materiality, and use, producing environments that operate with functional rigor while maintaining experiential depth. Each project emerges from a critical reading of context, lifestyle, and spatial potential."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Card title="Contextual reading">
              We begin with constraints and opportunities, then translate them into spatial logic.
            </Card>
            <Card title="System thinking">
              Interiors are treated as connected decisions, circulation, program, materials, and light.
            </Card>
            <Card title="Enduring outcomes">
              The goal is longevity, clarity, and usability, not trend cycles.
            </Card>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 border-y border-black/10 bg-white/30">
        <Container>
          <SectionTitle
            eyebrow="About the practice"
            title="Studio overview"
            subtitle="Melody Interior Design Office is an Ethiopia-based interior architecture studio operating at the convergence of cultural continuity and contemporary spatial discourse. Our work negotiates between luxury and restraint, employing architectural methodologies to generate interiors that are both performative and enduring."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-6 shadow-sm">
              <h3 className="text-base font-semibold">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                To conceive and deliver architecturally grounded interiors that synthesize
                spatial efficiency, cultural reference, and material intelligence, executed
                with conceptual clarity and technical discipline.
              </p>
              <div className="h-px mt-5 bg-black/10" />
              <h3 className="mt-5 text-base font-semibold">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                To establish Melody Interior Design Office as a reference practice in Ethiopia
                for interior architecture, distinguished by spatial coherence, contextual
                sensitivity, and design longevity.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-3 shadow-sm">
              <img
                src={Studio}
                alt="Studio placeholder"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="Capabilities grounded in spatial performance"
            subtitle="A complete set of services designed to move from analysis to built reality with clarity and control."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <Card key={s.title} title={s.title}>
                {s.body}
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 border-y border-black/10 bg-white/30">
        <Container>
          <SectionTitle
            eyebrow="Process"
            title="A methodical design sequence"
            subtitle="Each phase is structured to protect the concept while steadily increasing technical precision."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-6 shadow-sm"
              >
                <p className="text-xs tracking-[0.22em] uppercase text-black/50">
                  {p.step}
                </p>
                <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WORKS */}
      <section id="works" className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Selected works"
            title="Curated portfolio"
            subtitle="A curated portfolio illustrating our architectural approach to interior design, where spatial logic, cultural narrative, and functional intelligence intersect."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {works.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-3 shadow-sm"
              >
                <img
                  src={w.img}
                  alt={w.title}
                  className="object-cover w-full h-44 rounded-xl"
                />
                <div className="mt-3">
                  <p className="text-xs text-black/55">{w.tag}</p>
                  <p className="mt-1 text-sm font-semibold">{w.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex mt-8">
            <Button href="#contact">
              View Selected Works <ArrowRight size={16} />
            </Button>
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section className="py-16 border-y border-black/10 bg-white/30">
        <Container>
          <SectionTitle
            eyebrow="Why Melody"
            title="Design decisions with architectural discipline"
            subtitle="A practice built around clarity, performance, and context."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-6 shadow-sm">
              <ul className="space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5" size={18} />
                    <span className="text-sm text-black/75">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-[color:var(--surface)] p-3 shadow-sm">
              <img
                src="https://placehold.co/1400x1100/png?text=Material+Study"
                alt="Materials placeholder"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Leadership"
            title="Practice direction"
            subtitle="The studio is guided through architectural reasoning, spatial analysis, and contextual awareness."
          />

          <div className="space-y-6">
            <LeaderCard
              name="Meskerem Abreham"
              role="Founder | Creative Director"
              title="Architect & Urban Planner"
              bio="Meskerem Abreham directs the practice through a framework of architectural reasoning, spatial analysis, and contextual awareness, crafting interiors that are intellectually robust and experientially refined."
              img="https://placehold.co/1200x1400/png?text=Meskerem"
            />

            {/* <LeaderCard
              name="Yonathan Gidey"
              role="Co-Lead | Design Operations"
              title="Interior Architecture"
              bio="Yonathan supports the practice through disciplined project coordination, design development structure, and delivery oversight, ensuring concepts translate into resolved, buildable interior systems."
              img="https://placehold.co/1200x1400/png?text=Yonathan"
            /> */}
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 border-t border-black/10">
        <Container>
          <div className="rounded-3xl border border-black/10 bg-[color:var(--surface)] p-6 sm:p-10 shadow-sm">
            <SectionTitle
              eyebrow="Contact"
              title="Let us engage your space as an architectural proposition."
              subtitle="Send a message and we will respond with next steps for consultation, site visit, and scope definition."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[color:var(--bg)] p-4">
                  <Phone size={18} className="mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-sm text-black/70">+251-911-28-77-48</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[color:var(--bg)] p-4">
                  <Mail size={18} className="mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-black/70">melodyinteriors34@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-black/10 bg-[color:var(--bg)] p-4">
                  <MapPin size={18} className="mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">Location</p>
                    <p className="text-sm text-black/70">Ethiopia</p>
                  </div>
                </div>
              </div>

              <form
                className="p-5 border rounded-2xl border-black/10 bg-white/70"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted (demo). We can connect this to email next.");
                }}
              >
                <div className="grid gap-3">
                  <label className="grid gap-1">
                    <span className="text-xs text-black/60">Name</span>
                    <input
                      className="px-3 py-2 text-sm bg-white border outline-none rounded-xl border-black/10 focus:ring-2 focus:ring-black/10"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className="grid gap-1">
                    <span className="text-xs text-black/60">Email</span>
                    <input
                      type="email"
                      className="px-3 py-2 text-sm bg-white border outline-none rounded-xl border-black/10 focus:ring-2 focus:ring-black/10"
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                  <label className="grid gap-1">
                    <span className="text-xs text-black/60">Project summary</span>
                    <textarea
                      className="min-h-[120px] rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/10"
                      placeholder="Location, type of space, timeline, and what you want to achieve."
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[color:var(--deep)] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                  >
                    Send inquiry <ArrowRight size={16} />
                  </button>

                  <p className="text-[11px] text-black/50">
                    Demo form for now. We can connect it to EmailJS or a backend later.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <p className="py-10 text-xs text-center text-black/50">
            © {new Date().getFullYear()} Melody Interior Design Office. All rights reserved.
          </p>
        </Container>
      </section>
    </div>
  );
}
