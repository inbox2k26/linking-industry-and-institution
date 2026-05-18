import { Skeleton } from "@/components/ui/skeleton";
import {
  BarChart3,
  Cpu,
  Factory,
  Gem,
  Settings2,
  Shirt,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { useGetAllIndustries } from "../hooks/useQueries";

const manufacturingSector = [
  {
    name: "Robert Bosch GmbH",
    desc: "Auto parts & engineering solutions",
    icon: Settings2,
  },
  { name: "PRIcol Ltd.", desc: "Automotive instruments maker", icon: Wrench },
  {
    name: "ELGI Equipments Ltd.",
    desc: "Air compressors manufacturing",
    icon: Factory,
  },
  { name: "CRI Pumps Pvt. Ltd.", desc: "Pump manufacturer", icon: Factory },
  { name: "Texmo Industries", desc: "Pumps & motors", icon: Factory },
  {
    name: "Sharp Industries",
    desc: "Engineering & machinery",
    icon: Settings2,
  },
  {
    name: "Lakshmi Machine Works (LMW)",
    desc: "Machine tools & textile machinery",
    icon: Settings2,
  },
  {
    name: "Roots Industries",
    desc: "Auto & industrial products",
    icon: Wrench,
  },
  { name: "Shanthi Gears", desc: "Gear manufacturing", icon: Settings2 },
  {
    name: "Craftsman Automation",
    desc: "Industrial automation devices",
    icon: Factory,
  },
];

const textileSector = [
  {
    name: "Coimbatore Textile Mills",
    desc: "Many textile mills producing cotton and fabrics",
    icon: Shirt,
  },
  {
    name: "South Indian Textiles Research Association (SITRA)",
    desc: "Textile research institute",
    icon: Gem,
  },
  {
    name: "Central Institute for Cotton Research (CICR)",
    desc: "Cotton research center",
    icon: Gem,
  },
  {
    name: "SVPISTM",
    desc: "Sardar Vallabhbhai Patel International School of Textiles & Management – textile management studies",
    icon: Shirt,
  },
];

const itSector = [
  {
    name: "Tata Consultancy Services (TCS)",
    desc: "India's largest IT services company",
    icon: Cpu,
  },
  {
    name: "Cognizant Technology Solutions",
    desc: "IT services and consulting",
    icon: Cpu,
  },
  {
    name: "Wipro",
    desc: "Global IT, consulting and business process services",
    icon: Cpu,
  },
  { name: "IBM", desc: "Enterprise technology & cloud solutions", icon: Cpu },
  { name: "Dell", desc: "Technology solutions & IT infrastructure", icon: Cpu },
  { name: "CSS Corp", desc: "IT services & support solutions", icon: Cpu },
  {
    name: "KGISL",
    desc: "Coimbatore-based IT & educational services",
    icon: BarChart3,
  },
];

type Company = { name: string; desc: string; icon: React.ElementType };

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
}: { title: string; companies: Company[] }) {
  return (
    <div className="mb-12">
      <h2
        className="font-display font-bold text-xl mb-5 flex items-center gap-2"
        style={{ color: "oklch(var(--navy))" }}
      >
        <span
          className="inline-block w-1 h-6 rounded-full mr-1"
          style={{ background: "oklch(var(--teal))" }}
        />
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

import type React from "react";

export default function IndustriesPage() {
  const { data: industries, isLoading } = useGetAllIndustries();

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
              Sectors
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-3">
              Industry Partners
            </h1>
            <p className="text-white/70 max-w-xl">
              Explore Coimbatore's thriving industrial ecosystem — from
              precision manufacturing to cutting-edge IT.
            </p>
          </motion.div>
        </div>
      </section>

      {isLoading ? (
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["s1", "s2", "s3", "s4", "s5", "s6"].map((sk) => (
              <Skeleton
                key={sk}
                className="h-32 rounded-xl"
                data-ocid="industries.loading_state"
              />
            ))}
          </div>
        </section>
      ) : industries && industries.length > 0 ? (
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl mb-6"
              style={{ color: "oklch(var(--navy))" }}
            >
              Registered Industry Partners
            </h2>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="industries.list"
            >
              {industries.map((ind) => (
                <motion.div
                  key={ind.profileName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl border border-border bg-background hover:shadow-card transition-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 font-bold text-white text-sm"
                    style={{ background: "oklch(var(--navy))" }}
                  >
                    {ind.profileName.charAt(0)}
                  </div>
                  <h3
                    className="font-semibold"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    {ind.profileName}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {ind.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        className="py-14"
        style={{ background: "oklch(var(--hero-bg))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionBlock
            title="Manufacturing & Engineering"
            companies={manufacturingSector}
          />
          <SectionBlock
            title="Textiles & Textile Research"
            companies={textileSector}
          />
          <SectionBlock title="IT & Software Companies" companies={itSector} />
        </div>
      </section>
    </main>
  );
}
