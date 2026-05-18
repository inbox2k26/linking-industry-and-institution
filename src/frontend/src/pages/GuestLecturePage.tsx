import {
  BookOpen,
  Building2,
  Cpu,
  GraduationCap,
  Landmark,
  Mic2,
  Plane,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import type React from "react";

const topOrganizations = [
  {
    name: "SaIREX Academy",
    desc: "Industry-academia exchange programs",
    icon: GraduationCap,
  },
  {
    name: "Kambaa Academy",
    desc: "Skill development & lectures",
    icon: BookOpen,
  },
  {
    name: "Mentor Minds",
    desc: "Expert mentoring & guest sessions",
    icon: Users,
  },
  {
    name: "Edufabric",
    desc: "Educational content & workshops",
    icon: BookOpen,
  },
  {
    name: "Brillianz Group",
    desc: "Competitive exam coaching & sessions",
    icon: GraduationCap,
  },
  {
    name: "Trade Tech International",
    desc: "Technical trade training sessions",
    icon: Cpu,
  },
  {
    name: "Towards Technology",
    desc: "Tech outreach & awareness workshops",
    icon: Cpu,
  },
  {
    name: "Cyber Awareness Sessions",
    desc: "Cybersecurity awareness programs",
    icon: Cpu,
  },
  { name: "CareerTome", desc: "Career guidance & industry talks", icon: Users },
  {
    name: "Ta Academy",
    desc: "Talent development programs",
    icon: GraduationCap,
  },
  {
    name: "Esoir Business Solution",
    desc: "Business & entrepreneurship sessions",
    icon: Building2,
  },
  {
    name: "Urmila Institute",
    desc: "Spoken English & communication workshops",
    icon: Mic2,
  },
  {
    name: "Nk Learnicare",
    desc: "Learning facilitation & guest lectures",
    icon: BookOpen,
  },
];

type Company = { name: string; desc: string; icon: React.ElementType };

const logisticsSector: Company[] = [
  {
    name: "TransGlobe Academy",
    desc: "Logistics & supply chain training",
    icon: Building2,
  },
  { name: "CB Tech", desc: "Technology & management programs", icon: Cpu },
  {
    name: "International Institution of Vocational Studies",
    desc: "Vocational & skill-based education",
    icon: GraduationCap,
  },
];

const itTechSector: Company[] = [
  {
    name: "Accel IT Academy",
    desc: "IT skills & certification training",
    icon: Cpu,
  },
  {
    name: "N2K Technologies",
    desc: "Networking & technology programs",
    icon: Cpu,
  },
  { name: "Mazenet", desc: "IT services & educational outreach", icon: Cpu },
  {
    name: "Entuple Technologies",
    desc: "IoT & embedded systems training",
    icon: Cpu,
  },
];

const hospitalitySector: Company[] = [
  {
    name: "Wings Institute",
    desc: "Hospitality & airline management",
    icon: Plane,
  },
  {
    name: "Servo Hospitality School",
    desc: "Hospitality & tourism training",
    icon: Plane,
  },
  {
    name: "Imperial Institute of Advanced Management",
    desc: "Management & leadership programs",
    icon: Landmark,
  },
];

const civilServicesSector: Company[] = [
  {
    name: "Synergy IAS Study Circle",
    desc: "IAS & civil services preparation",
    icon: Landmark,
  },
  {
    name: "Avision Institute",
    desc: "Competitive exam coaching",
    icon: GraduationCap,
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

export default function GuestLecturePage() {
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
              Knowledge Exchange
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-3">
              Guest Lectures & Workshops
            </h1>
            <p className="text-white/70 max-w-xl">
              Organizations bridging the gap between academia and industry
              through knowledge sharing sessions.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-14"
        style={{ background: "oklch(var(--hero-bg))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2
              className="font-display font-bold text-xl mb-5 flex items-center gap-2"
              style={{ color: "oklch(var(--navy))" }}
            >
              <span
                className="inline-block w-1 h-6 rounded-full"
                style={{ background: "oklch(var(--teal))" }}
              />
              <Mic2
                className="w-5 h-5"
                style={{ color: "oklch(var(--teal))" }}
              />
              Top Companies & Organizations Offering Guest Lectures
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {topOrganizations.map((c, i) => (
                <CompanyCard key={c.name} company={c} index={i} />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h2
              className="font-display font-bold text-xl mb-6"
              style={{ color: "oklch(var(--navy))" }}
            >
              Specialized Sectors & Educational Partners
            </h2>

            <div className="space-y-10">
              {[
                {
                  label: "Logistics & Management",
                  companies: logisticsSector,
                  icon: Building2,
                },
                {
                  label: "IT & Technology",
                  companies: itTechSector,
                  icon: Cpu,
                },
                {
                  label: "Hospitality & Tourism",
                  companies: hospitalitySector,
                  icon: Plane,
                },
                {
                  label: "Civil Services & Competitive Exams",
                  companies: civilServicesSector,
                  icon: Landmark,
                },
              ].map((sector) => (
                <div key={sector.label}>
                  <h3
                    className="font-semibold text-base mb-4 flex items-center gap-2"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    <sector.icon
                      className="w-4 h-4"
                      style={{ color: "oklch(var(--teal))" }}
                    />
                    {sector.label}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {sector.companies.map((c, i) => (
                      <CompanyCard key={c.name} company={c} index={i} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
