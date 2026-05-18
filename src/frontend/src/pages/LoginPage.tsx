import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { Building2, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isLoggingIn = loginStatus === "logging-in";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if (identity) {
        await clear();
        queryClient.clear();
      }
      await login();
      navigate({ to: "/" });
    } catch (err: any) {
      if (err.message === "User is already authenticated") {
        navigate({ to: "/" });
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  // suppress unused warning - these are UI state for visual purposes
  void email;
  void password;
  void rememberMe;

  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-office.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "oklch(var(--hero-bg) / 0.88)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-auto px-4"
      >
        <div
          className="bg-card rounded-2xl shadow-card p-8 sm:p-10"
          data-ocid="login.card"
        >
          <div className="text-center mb-8">
            <div
              className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
              style={{ background: "oklch(var(--navy))" }}
            >
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1
              className="font-display font-extrabold text-3xl mb-1"
              style={{ color: "oklch(var(--navy))" }}
            >
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your Integra Solutions account
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <Label
                htmlFor="email"
                className="text-xs font-semibold mb-1.5"
                style={{ color: "oklch(var(--navy))" }}
              >
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  autoComplete="email"
                  data-ocid="login.input"
                />
              </div>
            </div>

            <div className="mb-4">
              <Label
                htmlFor="password"
                className="text-xs font-semibold mb-1.5"
                style={{ color: "oklch(var(--navy))" }}
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  autoComplete="current-password"
                  data-ocid="login.input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(v) => setRememberMe(!!v)}
                  data-ocid="login.checkbox"
                />
                <Label htmlFor="remember" className="text-sm cursor-pointer">
                  Remember Me
                </Label>
              </div>
              <Link
                to="/contact"
                className="text-sm font-medium hover:underline"
                style={{ color: "oklch(var(--navy))" }}
                data-ocid="login.link"
              >
                Forgot Password?
              </Link>
            </div>

            {error && (
              <p
                className="text-sm text-destructive mb-4"
                data-ocid="login.error_state"
              >
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full rounded-full font-bold uppercase tracking-wider text-sm py-3"
              style={{ background: "oklch(var(--navy))", color: "white" }}
              disabled={isLoggingIn}
              data-ocid="login.submit_button"
            >
              {isLoggingIn ? "Signing in..." : "LOG IN"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold hover:underline"
              style={{ color: "oklch(var(--navy))" }}
              data-ocid="login.link"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
