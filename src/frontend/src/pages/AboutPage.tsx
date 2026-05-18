import { Award, Eye, Globe, Heart, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const team = [
  {
    name: "Dr. Maria Santos",
    role: "CEO & Co-founder",
    initials: "MS",
    bio: "20+ years bridging academic research with industry applications.",
  },
  {
    name: "Engr. Juan dela Cruz",
    role: "CTO & Co-founder",
    initials: "JC",
    bio: "Former tech lead at Fortune 500 companies turned academic partner.",
  },
  {
    name: "Prof. Ana Reyes",
    role: "Head of Partnerships",
    initials: "AR",
    bio: "University dean turned innovation champion for industry collaboration.",
  },
  {
    name: "Michael Torres",
    role: "Head of Operations",
    initials: "MT",
    bio: "Operations expert with deep roots in manufacturing and logistics sectors.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Integrity",
    desc: "We operate with transparency and honesty in every partnership we forge.",
  },
  {
    icon: Globe,
    title: "Inclusivity",
    desc: "Connecting organizations across regions, sectors, and disciplines.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We uphold the highest standards in matching, facilitation, and outcomes.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We believe the best results come from working together, not in silos.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{ background: "oklch(var(--navy))" }}
        className="py-20 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
              style={{
                background: "oklch(var(--teal) / 0.2)",
                color: "oklch(var(--teal))",
              }}
            >
              About Us
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-4">
              Our Story &amp; Mission
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Founded in 2019, Integra Solutions was born from a simple but
              powerful idea: that the distance between classroom knowledge and
              real-world application should not exist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {[
            {
              icon: Target,
              label: "Our Mission",
              text: "To build a thriving ecosystem where industry and academia co-create value — producing skilled graduates, breakthrough research, and lasting economic growth.",
            },
            {
              icon: Eye,
              label: "Our Vision",
              text: "A Philippines where every company has an academic partner and every institution has an industry champion — together shaping a knowledge-driven economy.",
            },
          ].map(({ icon: Icon, label, text }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "oklch(var(--navy) / 0.08)" }}
              >
                <Icon
                  className="w-6 h-6"
                  style={{ color: "oklch(var(--navy))" }}
                />
              </div>
              <div>
                <h2
                  className="font-display font-bold text-2xl mb-2"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {label}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16"
        style={{ background: "oklch(var(--hero-bg))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold text-3xl text-center mb-10"
            style={{ color: "oklch(var(--navy))" }}
          >
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-card transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "oklch(var(--teal) / 0.1)" }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--teal))" }}
                  />
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-display font-bold text-3xl text-center mb-10"
            style={{ color: "oklch(var(--navy))" }}
          >
            Meet the Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, initials, bio }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-6 border border-border text-center"
                style={{ background: "oklch(var(--hero-bg))" }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center font-display font-bold text-xl text-white"
                  style={{ background: "oklch(var(--navy))" }}
                >
                  {initials}
                </div>
                <h3
                  className="font-semibold text-sm"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {name}
                </h3>
                <p
                  className="text-xs font-medium mb-2"
                  style={{ color: "oklch(var(--teal))" }}
                >
                  {role}
                </p>
                <p className="text-xs text-muted-foreground">{bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
