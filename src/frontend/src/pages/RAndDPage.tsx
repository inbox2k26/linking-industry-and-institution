import {
  Atom,
  BrainCircuit,
  Building2,
  Car,
  FlaskConical,
  HeartPulse,
  Lightbulb,
  Microscope,
  ShoppingBag,
} from "lucide-react";
import { motion } from "motion/react";
import type React from "react";

type Company = { name: string; desc: string; icon: React.ElementType };

const techAI: Company[] = [
  {
    name: "Amazon",
    desc: "Cloud computing, AI & logistics innovation",
    icon: BrainCircuit,
  },
  {
    name: "Alphabet / Google",
    desc: "AI, search, quantum computing & life sciences R&D",
    icon: BrainCircuit,
  },
  {
    name: "Meta",
    desc: "Social AI, AR/VR & connectivity research",
    icon: BrainCircuit,
  },
  {
    name: "Apple",
    desc: "Consumer tech, semiconductors & health tech R&D",
    icon: BrainCircuit,
  },
  {
    name: "Janyu Robotics",
    desc: "Automation & industrial robotics research",
    icon: Atom,
  },
];

const pharma: Company[] = [
  {
    name: "Dr. Reddy's Laboratories",
    desc: "Pharmaceutical R&D & generics",
    icon: FlaskConical,
  },
  {
    name: "Alembic Pharmaceuticals",
    desc: "Drug discovery & formulation research",
    icon: FlaskConical,
  },
  {
    name: "Biocon",
    desc: "Biopharmaceuticals & biosimilars",
    icon: Microscope,
  },
  {
    name: "Cipla",
    desc: "Generic drugs & respiratory therapies",
    icon: FlaskConical,
  },
  {
    name: "Suven Life Sciences",
    desc: "CNS drug discovery & research",
    icon: Microscope,
  },
  {
    name: "Johnson & Johnson",
    desc: "Medical devices, pharma & consumer health",
    icon: HeartPulse,
  },
  {
    name: "Reinventbio Private Limited",
    desc: "Biotech innovations & solutions",
    icon: Microscope,
  },
  {
    name: "Premas Biotech",
    desc: "VLP-based vaccines & diagnostics",
    icon: FlaskConical,
  },
];

const automotive: Company[] = [
  {
    name: "Ford",
    desc: "Electric vehicles & autonomous driving research",
    icon: Car,
  },
  { name: "Tesla", desc: "EV technology, AI & energy storage R&D", icon: Car },
  {
    name: "Bharat Electronics Limited (BEL)",
    desc: "Defense electronics & systems R&D",
    icon: Atom,
  },
];

const consumerGoods: Company[] = [
  {
    name: "Unilever",
    desc: "Sustainable materials & consumer products R&D",
    icon: ShoppingBag,
  },
  {
    name: "Nestle",
    desc: "Food science, nutrition & sustainability R&D",
    icon: ShoppingBag,
  },
];

const specialized: Company[] = [
  { name: "Creare", desc: "Engineering research & development", icon: Atom },
  {
    name: "Synthace",
    desc: "Biology automation & life sciences platform",
    icon: Microscope,
  },
  {
    name: "4S Medical Research Pvt Ltd",
    desc: "Clinical research & medical innovations",
    icon: HeartPulse,
  },
];

const hubs: Company[] = [
  {
    name: "T-Hub",
    desc: "India's largest startup incubator & R&D hub",
    icon: Lightbulb,
  },
  {
    name: "BIRAC",
    desc: "Biotechnology Industry Research Assistance Council",
    icon: FlaskConical,
  },
  {
    name: "Technology Development Board",
    desc: "Govt. body funding technology innovation",
    icon: Building2,
  },
];

function CompanyCard({ company, index }: { company: Company; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card rounded-xl p-5 border border-border hover:shadow-card transition-shadow"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
        style={{ background: "oklch(var(--teal) / 0.12)" }}
      >
        <company.icon
          className="w-5 h-5"
          style={{ color: "oklch(var(--teal))" }}
        />
      </div>
      <h3
        className="font-semibold text-sm mb-1"
        style={{ color: "oklch(var(--navy))" }}
      >
        {company.name}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {company.desc}
      </p>
    </motion.div>
  );
}

function SectionBlock({
  title,
  companies,
  icon: Icon,
}: { title: string; companies: Company[]; icon: React.ElementType }) {
  return (
    <div className="mb-12">
      <h2
        className="font-display font-bold text-xl mb-5 flex items-center gap-2"
        style={{ color: "oklch(var(--navy))" }}
      >
        <span
          className="inline-block w-1 h-6 rounded-full"
          style={{ background: "oklch(var(--teal))" }}
        />
        <Icon className="w-5 h-5" style={{ color: "oklch(var(--teal))" }} />
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {companies.map((c, i) => (
          <CompanyCard key={c.name} company={c} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function RAndDPage() {
  return (
    <main>
      <section
        style={{ background: "oklch(var(--navy))" }}
        className="py-16 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
              style={{
                background: "oklch(var(--teal) / 0.2)",
                color: "oklch(var(--teal))",
              }}
            >
              Innovation
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-3">
              R&D Collaborating Companies
            </h1>
            <p className="text-white/70 max-w-xl">
              Organizations at the forefront of research and development,
              driving innovation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-14"
        style={{ background: "oklch(var(--hero-bg))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionBlock
            title="Technology & AI"
            companies={techAI}
            icon={BrainCircuit}
          />
          <SectionBlock
            title="Pharmaceuticals & Healthcare"
            companies={pharma}
            icon={FlaskConical}
          />
          <SectionBlock
            title="Automotive & Manufacturing"
            companies={automotive}
            icon={Car}
          />
          <SectionBlock
            title="Consumer Goods & Materials"
            companies={consumerGoods}
            icon={ShoppingBag}
          />
          <SectionBlock
            title="Specialized R&D / Startups"
            companies={specialized}
            icon={Microscope}
          />
          <SectionBlock
            title="Key Collaboration Hubs"
            companies={hubs}
            icon={Lightbulb}
          />
        </div>
      </section>
    </main>
  );
}
