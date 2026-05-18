import { Badge } from "@/components/ui/badge";
import {
  Banknote,
  BarChart3,
  Briefcase,
  Building,
  Cpu,
  Factory,
  Globe,
  GraduationCap,
} from "lucide-react";
import { motion } from "motion/react";
import type React from "react";

const portalCompanies = [
  {
    name: "Internshala",
    desc: "India's top internship & training portal",
    icon: Globe,
  },
  {
    name: "All India Internship Program (AIIP)",
    desc: "National internship coordination body",
    icon: GraduationCap,
  },
  {
    name: "InternshipWala",
    desc: "Internship listings across sectors",
    icon: Briefcase,
  },
  {
    name: "Academy Of Skill Development (ASD)",
    desc: "Skill development & internship facilitation",
    icon: GraduationCap,
  },
];

const itCompanies = [
  {
    name: "Tata Consultancy Services (TCS)",
    desc: "IT services & consulting",
    icon: Cpu,
  },
  { name: "Wipro Ltd", desc: "Global IT services", icon: Cpu },
  { name: "Infosys Technologies", desc: "IT & business solutions", icon: Cpu },
  { name: "HCL Technologies", desc: "IT services", icon: Cpu },
  { name: "Tech Mahindra", desc: "IT and networking", icon: Cpu },
  { name: "Cisco Systems", desc: "Networking & cybersecurity", icon: Cpu },
  { name: "Dell India", desc: "Technology solutions", icon: Cpu },
  { name: "Intel", desc: "Semiconductor technology", icon: Cpu },
  { name: "Qualcomm", desc: "Mobile semiconductor solutions", icon: Cpu },
  {
    name: "Broadcom",
    desc: "Semiconductor & infrastructure software",
    icon: Cpu,
  },
  {
    name: "Samsung Electronics",
    desc: "Consumer electronics & semiconductors",
    icon: Cpu,
  },
  { name: "Motorola", desc: "Communication technology", icon: Cpu },
  { name: "Nokia", desc: "Network infrastructure", icon: Cpu },
  {
    name: "Honeywell",
    desc: "Industrial automation & technology",
    icon: Factory,
  },
  {
    name: "Aptron Noida",
    desc: "IT training & internship programs",
    icon: GraduationCap,
  },
];

const engineeringCompanies = [
  {
    name: "Tata Motors",
    desc: "India's largest automobile manufacturer",
    icon: Factory,
  },
  {
    name: "Bharat Heavy Electricals Ltd. (BHEL)",
    desc: "Power plant equipment manufacturer",
    icon: Factory,
  },
  {
    name: "Varroc Engineering",
    desc: "Auto components manufacturer",
    icon: Factory,
  },
  {
    name: "Sedmac Mechatronics",
    desc: "Mechatronics & automation",
    icon: Factory,
  },
  {
    name: "Dassault Systemes",
    desc: "3D design & simulation software",
    icon: Building,
  },
  {
    name: "Micromax Instruments",
    desc: "Electronic instruments & IoT",
    icon: Factory,
  },
  {
    name: "Evobi Automation",
    desc: "Robotics & automation kits",
    icon: Factory,
  },
];

const financeCompanies = [
  {
    name: "SBI Life Insurance",
    desc: "Life insurance & financial planning",
    icon: Banknote,
  },
  { name: "ICICI Bank", desc: "Banking & financial services", icon: Banknote },
  { name: "Axis Bank", desc: "Private banking & finance", icon: Banknote },
  {
    name: "Kotak Mahindra Bank",
    desc: "Banking, lending & wealth management",
    icon: Banknote,
  },
  { name: "Federal Bank", desc: "Retail & commercial banking", icon: Banknote },
];

const fields = [
  "Software Development & IT",
  "Data Science & AI/ML",
  "Electronics & Communication",
  "Mechanical & Automotive Engineering",
  "Civil & Construction",
  "Finance & Banking",
  "Marketing & Business Analytics",
  "Digital Marketing & Web",
];

type Company = { name: string; desc: string; icon: React.ElementType };

function CompanyCard({ company, index }: { company: Company; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
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

export default function InternshipsPage() {
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
              Opportunities
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-3">
              Internship & Training Platforms
            </h1>
            <p className="text-white/70 max-w-xl">
              Discover industry-leading organizations offering internship
              opportunities for students and fresh graduates.
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
            title="Major Internship Portals"
            companies={portalCompanies}
            icon={Globe}
          />
          <SectionBlock
            title="Technology & IT Companies"
            companies={itCompanies}
            icon={Cpu}
          />
          <SectionBlock
            title="Engineering & Manufacturing"
            companies={engineeringCompanies}
            icon={Factory}
          />
          <SectionBlock
            title="Finance & Corporate Training Partners"
            companies={financeCompanies}
            icon={Banknote}
          />

          <div className="mb-12">
            <h2
              className="font-display font-bold text-xl mb-5 flex items-center gap-2"
              style={{ color: "oklch(var(--navy))" }}
            >
              <span
                className="inline-block w-1 h-6 rounded-full"
                style={{ background: "oklch(var(--teal))" }}
              />
              <BarChart3
                className="w-5 h-5"
                style={{ color: "oklch(var(--teal))" }}
              />
              Typical Fields Where Internships Are Available
            </h2>
            <div className="flex flex-wrap gap-3">
              {fields.map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Badge
                    className="text-sm py-1.5 px-4 rounded-full font-medium cursor-default"
                    style={{
                      background: "oklch(var(--teal) / 0.12)",
                      color: "oklch(var(--navy))",
                      border: "1px solid oklch(var(--teal) / 0.3)",
                    }}
                  >
                    {field}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
