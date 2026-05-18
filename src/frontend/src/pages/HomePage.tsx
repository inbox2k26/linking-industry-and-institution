import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Globe,
  GraduationCap,
  Handshake,
  Lightbulb,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Handshake,
    title: "Industry Partnerships",
    desc: "Connect with leading companies seeking academic expertise and talent.",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "Access top-tier institutions driving research and innovation.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Matching",
    desc: "Our smart platform aligns industry needs with institutional strengths.",
  },
  {
    icon: Globe,
    title: "Nationwide Network",
    desc: "Spanning all major regions, linking opportunities across the country.",
  },
  {
    icon: Users,
    title: "Talent Pipeline",
    desc: "Build a continuous flow of skilled graduates ready for the workforce.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    desc: "Co-create solutions through collaborative R&D programs.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Students gain real-world experience; companies gain fresh perspectives.",
  },
  {
    icon: Shield,
    title: "Trusted Platform",
    desc: "Verified partners, transparent processes, and secure data handling.",
  },
];

const stats = [
  { value: "500+", label: "Industry Partners" },
  { value: "200+", label: "Institutions" },
  { value: "10,000+", label: "Students Placed" },
  { value: "95%", label: "Satisfaction Rate" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-office.dim_1200x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to right, oklch(var(--hero-bg)) 45%, oklch(var(--hero-bg) / 0.7) 65%, transparent 85%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{
                background: "oklch(var(--teal) / 0.15)",
                color: "oklch(var(--teal))",
              }}
            >
              Linking Industry &amp; Institution
            </span>
            <h1
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4"
              style={{ color: "oklch(var(--navy))" }}
            >
              Bridging Industry
              <br />
              &amp; Academia
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Integra Solutions connects forward-thinking companies with top
              academic institutions — creating partnerships that fuel
              innovation, grow talent, and shape the future.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/industries">
                <Button
                  size="lg"
                  className="rounded-full font-semibold px-8"
                  style={{ background: "oklch(var(--navy))", color: "white" }}
                  data-ocid="home.primary_button"
                >
                  Explore Industries
                </Button>
              </Link>
              <Link to="/institutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full font-semibold px-8"
                  style={{
                    borderColor: "oklch(var(--navy))",
                    color: "oklch(var(--navy))",
                  }}
                  data-ocid="home.secondary_button"
                >
                  Find Institutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{ background: "oklch(var(--navy))" }} className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="font-display font-extrabold text-3xl sm:text-4xl"
                  style={{ color: "oklch(var(--teal))" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="font-display font-bold text-3xl sm:text-4xl mb-3"
              style={{ color: "oklch(var(--navy))" }}
            >
              Why Choose Integra?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive platform designed to maximize the value of
              industry-academic collaboration.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-5 rounded-xl bg-background border border-border hover:shadow-card transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: "oklch(var(--teal) / 0.12)" }}
                >
                  <feature.icon
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--teal))" }}
                  />
                </div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "oklch(var(--hero-bg))" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-display font-bold text-3xl sm:text-4xl mb-4"
              style={{ color: "oklch(var(--navy))" }}
            >
              Ready to Connect?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join hundreds of organizations already transforming education and
              industry through meaningful partnerships.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/register">
                <Button
                  size="lg"
                  className="rounded-full font-semibold px-10"
                  style={{ background: "oklch(var(--navy))", color: "white" }}
                  data-ocid="home.primary_button"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full font-semibold px-10"
                  style={{
                    borderColor: "oklch(var(--navy))",
                    color: "oklch(var(--navy))",
                  }}
                  data-ocid="home.secondary_button"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
