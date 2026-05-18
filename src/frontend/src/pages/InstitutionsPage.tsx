import { Skeleton } from "@/components/ui/skeleton";
import {
  BookOpen,
  BrainCircuit,
  Brush,
  FlaskConical,
  GraduationCap,
  Microscope,
  Monitor,
  Scale,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import type React from "react";
import { useGetAllInstitutions } from "../hooks/useQueries";

const defaultTypes = [
  {
    icon: GraduationCap,
    name: "Universities & Colleges",
    desc: "Degree-granting institutions with broad research capabilities.",
    count: "85 registered",
  },
  {
    icon: FlaskConical,
    name: "Research Institutes",
    desc: "Specialized centers driving cutting-edge research across disciplines.",
    count: "42 registered",
  },
  {
    icon: Microscope,
    name: "Science & Technology",
    desc: "STEM-focused institutions producing technical graduates.",
    count: "60 registered",
  },
  {
    icon: BookOpen,
    name: "Liberal Arts Colleges",
    desc: "Institutions nurturing critical thinkers and creative leaders.",
    count: "35 registered",
  },
  {
    icon: Monitor,
    name: "Technical & Vocational",
    desc: "Skills-based training and diploma programs.",
    count: "50 registered",
  },
  {
    icon: Stethoscope,
    name: "Medical & Health Sciences",
    desc: "Nursing, medicine, and allied health programs.",
    count: "30 registered",
  },
  {
    icon: Scale,
    name: "Law & Governance",
    desc: "Legal education and public administration institutions.",
    count: "20 registered",
  },
  {
    icon: Brush,
    name: "Arts & Design",
    desc: "Creative arts, architecture, and design schools.",
    count: "25 registered",
  },
];

const edtechCompanies = [
  {
    name: "Flinto Learning Solutions Pvt. Ltd.",
    desc: "Early childhood learning & edtech",
    icon: BrainCircuit,
  },
  {
    name: "Karadi Path Education Company",
    desc: "Innovative literacy programs for children",
    icon: BookOpen,
  },
  {
    name: "Chrysalis",
    desc: "K-12 school transformation programs",
    icon: GraduationCap,
  },
  {
    name: "VREON Tech",
    desc: "VR-powered educational technology",
    icon: Monitor,
  },
  {
    name: "Sura Books Pvt Ltd",
    desc: "Educational publications & study materials",
    icon: BookOpen,
  },
  {
    name: "Puthir",
    desc: "Puzzle-based learning for children",
    icon: BrainCircuit,
  },
  {
    name: "Headstream Technologies",
    desc: "Digital learning platforms",
    icon: Monitor,
  },
  {
    name: "LMES Academy Pvt. Ltd.",
    desc: "Skill development & training",
    icon: GraduationCap,
  },
  {
    name: "Focus Edumatics Pvt Ltd",
    desc: "Coimbatore-based educational solutions",
    icon: Zap,
  },
  {
    name: "Nature Nurture",
    desc: "Tamil Nadu – holistic educational programs",
    icon: Users,
  },
];

const corporateTraining = [
  {
    name: "Skill-Lync",
    desc: "Chennai – industry-ready engineering courses",
    icon: Zap,
  },
  {
    name: "GUVI.in",
    desc: "Chennai – vernacular tech education platform",
    icon: Monitor,
  },
  {
    name: "Elysium Academy",
    desc: "Chennai – IT training & placement",
    icon: GraduationCap,
  },
  {
    name: "ATG - Aspiring to Go",
    desc: "Chennai – corporate skill training",
    icon: Users,
  },
  {
    name: "Speak Your Mind Education",
    desc: "Chennai – communication & soft skills",
    icon: BookOpen,
  },
];

const contentRoles = [
  {
    name: "Neurealm",
    desc: "Chennai – neuroscience-based learning",
    icon: BrainCircuit,
  },
  {
    name: "SIA Publishers & Distributors",
    desc: "Chennai – engineering & science textbooks",
    icon: BookOpen,
  },
  {
    name: "Equitas Gurukul Group of Schools",
    desc: "Chennai – affordable quality education",
    icon: GraduationCap,
  },
  {
    name: "EI Design",
    desc: "Tamil Nadu – eLearning content & design",
    icon: Brush,
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

export default function InstitutionsPage() {
  const { data: institutions, isLoading } = useGetAllInstitutions();

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
              Academia
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-3">
              Academic Institutions
            </h1>
            <p className="text-white/70 max-w-xl">
              Discover institutions and EdTech companies shaping the next
              generation of professionals.
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
                data-ocid="institutions.loading_state"
              />
            ))}
          </div>
        </section>
      ) : institutions && institutions.length > 0 ? (
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-2xl mb-6"
              style={{ color: "oklch(var(--navy))" }}
            >
              Registered Institutions
            </h2>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              data-ocid="institutions.list"
            >
              {institutions.map((inst) => (
                <motion.div
                  key={inst.profileName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl border border-border bg-background hover:shadow-card transition-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 font-bold text-white text-sm"
                    style={{ background: "oklch(var(--teal))" }}
                  >
                    {inst.profileName.charAt(0)}
                  </div>
                  <h3
                    className="font-semibold"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    {inst.profileName}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {inst.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        className="py-12"
        style={{ background: "oklch(var(--hero-bg))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold text-2xl mb-6"
            style={{ color: "oklch(var(--navy))" }}
          >
            Institution Types
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
            {defaultTypes.map((type, i) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl p-5 border border-border hover:shadow-card transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "oklch(var(--teal) / 0.1)" }}
                >
                  <type.icon
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--teal))" }}
                  />
                </div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {type.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                  {type.desc}
                </p>
                <span
                  className="text-xs font-medium"
                  style={{ color: "oklch(var(--teal))" }}
                >
                  {type.count}
                </span>
              </motion.div>
            ))}
          </div>

          <SectionBlock
            title="Leading Curriculum Development & EdTech Companies"
            companies={edtechCompanies}
          />
          <SectionBlock
            title="Corporate Training & Specialized Curriculum"
            companies={corporateTraining}
          />
          <SectionBlock
            title="Key Educational Content & Curriculum Roles"
            companies={contentRoles}
          />
        </div>
      </section>
    </main>
  );
}
