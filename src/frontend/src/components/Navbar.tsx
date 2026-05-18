import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BookOpen,
  Building2,
  ChevronDown,
  FlaskConical,
  Menu,
  Mic2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useGetCallerUserProfile } from "../hooks/useQueries";

const industriesSubLinks = [
  { label: "All Industries", href: "/industries", icon: Building2 },
  { label: "Internships", href: "/internships", icon: BookOpen },
  { label: "Guest Lectures", href: "/guest-lectures", icon: Mic2 },
  { label: "R&D Collaboration", href: "/r-and-d", icon: FlaskConical },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries", hasDropdown: true },
  { label: "Institutions", href: "/institutions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { data: userProfile } = useGetCallerUserProfile();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === "logging-in";

  const handleLogin = async () => {
    try {
      await login();
    } catch (error: any) {
      if (error.message === "User is already authenticated") {
        await clear();
        setTimeout(() => login(), 300);
      }
    }
  };

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
  };

  const principalShort = identity
    ? `${identity.getPrincipal().toString().slice(0, 8)}...`
    : "";
  const displayName = userProfile?.profileName || principalShort;

  const isIndustriesActive = [
    "/industries",
    "/internships",
    "/guest-lectures",
    "/r-and-d",
  ].includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-navbar border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            data-ocid="nav.link"
          >
            <img
              src="/assets/uploads/inbox_logo-019d1baa-39e7-725b-97c8-3e63a1aebf1d-1.png"
              alt="inbox2k26 logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Center nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const active = link.hasDropdown
                ? isIndustriesActive
                : location.pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <DropdownMenu
                    key={link.href}
                    open={industriesOpen}
                    onOpenChange={setIndustriesOpen}
                  >
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          active
                            ? "text-primary bg-secondary"
                            : "text-foreground hover:text-primary hover:bg-secondary"
                        }`}
                        data-ocid="nav.toggle"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-3 h-3 transition-transform ${industriesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-52"
                      data-ocid="nav.dropdown_menu"
                    >
                      {industriesSubLinks.map((sub, idx) => (
                        <div key={sub.href}>
                          {idx === 1 && <DropdownMenuSeparator />}
                          <DropdownMenuItem asChild>
                            <Link
                              to={sub.href}
                              className="flex items-center gap-2 cursor-pointer"
                              data-ocid="nav.link"
                              onClick={() => setIndustriesOpen(false)}
                            >
                              <sub.icon
                                className="w-4 h-4"
                                style={{ color: "oklch(var(--teal))" }}
                              />
                              {sub.label}
                            </Link>
                          </DropdownMenuItem>
                        </div>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary"
                  }`}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    data-ocid="nav.toggle"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarFallback
                        style={{
                          background: "oklch(var(--teal))",
                          color: "white",
                        }}
                        className="text-sm font-semibold"
                      >
                        {displayName?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-foreground max-w-[120px] truncate">
                      {displayName}
                    </span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48"
                  data-ocid="nav.dropdown_menu"
                >
                  <DropdownMenuItem asChild>
                    <Link
                      to="/register"
                      className="cursor-pointer"
                      data-ocid="nav.link"
                    >
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-destructive cursor-pointer"
                    data-ocid="nav.link"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  onClick={handleLogin}
                  disabled={isLoggingIn}
                  className="rounded-full text-sm font-semibold px-5"
                  style={{ background: "oklch(var(--navy))", color: "white" }}
                  data-ocid="nav.primary_button"
                >
                  {isLoggingIn ? "Logging in..." : "Login"}
                </Button>
                <Link to="/register">
                  <Button
                    variant="outline"
                    className="rounded-full text-sm font-semibold px-5"
                    style={{
                      borderColor: "oklch(var(--navy))",
                      color: "oklch(var(--navy))",
                    }}
                    data-ocid="nav.secondary_button"
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {industriesSubLinks.slice(1).map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
                          data-ocid="nav.link"
                        >
                          <sub.icon
                            className="w-3 h-3"
                            style={{ color: "oklch(var(--teal))" }}
                          />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 flex gap-2">
                {isAuthenticated ? (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="flex-1"
                    data-ocid="nav.secondary_button"
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={handleLogin}
                      disabled={isLoggingIn}
                      className="flex-1 rounded-full"
                      style={{
                        background: "oklch(var(--navy))",
                        color: "white",
                      }}
                      data-ocid="nav.primary_button"
                    >
                      Login
                    </Button>
                    <Link to="/register" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full rounded-full"
                        style={{
                          borderColor: "oklch(var(--navy))",
                          color: "oklch(var(--navy))",
                        }}
                        data-ocid="nav.secondary_button"
                      >
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
