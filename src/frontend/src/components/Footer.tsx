import { Link } from "@tanstack/react-router";
import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer
      style={{ background: "oklch(var(--footer-bg))" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center"
                style={{ background: "oklch(var(--teal))" }}
              >
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span
                className="font-display font-bold text-sm"
                style={{ color: "oklch(var(--teal))" }}
              >
                INTEGRA SOLUTIONS
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Bridging the gap between industry and academia for a stronger,
              more innovative future.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: "oklch(var(--teal) / 0.2)" }}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: "oklch(var(--teal) / 0.2)" }}
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: "oklch(var(--teal) / 0.2)" }}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ background: "oklch(var(--teal) / 0.2)" }}
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "oklch(var(--teal))" }}
            >
              About Us
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "oklch(var(--teal))" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-white transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/institutions"
                  className="hover:text-white transition-colors"
                >
                  Institutions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-white transition-colors"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "oklch(var(--teal))" }}
            >
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(var(--teal))" }}
                />
                <span>
                  123 Innovation Drive,
                  <br />
                  Tech Hub, Makati City
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "oklch(var(--teal))" }}
                />
                <span>inbox2k26@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "oklch(1 0 0 / 10%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>
            &copy; {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </span>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
