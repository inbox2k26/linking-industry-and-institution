import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate } from "@tanstack/react-router";
import { Building2, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { ProfileType } from "../backend";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  useGetCallerUserProfile,
  useSaveCallerUserProfile,
} from "../hooks/useQueries";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login, loginStatus, identity } = useInternetIdentity();
  const { data: existingProfile } = useGetCallerUserProfile();
  const saveProfile = useSaveCallerUserProfile();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "" as "Industry" | "Institution" | "",
    description: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isLoggingIn = loginStatus === "logging-in";

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.role) newErrors.role = "Please select your role";
    if (!form.description.trim())
      newErrors.description = "Description is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      if (!identity) {
        await login();
      }
      if (identity) {
        await saveProfile.mutateAsync({
          profileName: form.name,
          profileType:
            form.role === "Industry"
              ? ProfileType.Industry
              : ProfileType.Institution,
          description: form.description,
        });
        toast.success("Account created successfully!");
        navigate({ to: "/" });
      }
    } catch {
      toast.error("Registration failed. Please try again.");
    }
  };

  const set =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden py-10">
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
        style={{ background: "oklch(var(--hero-bg) / 0.88)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-auto px-4"
      >
        <div className="bg-card rounded-2xl shadow-card p-8 sm:p-10">
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
              {existingProfile ? "Update Profile" : "Create Account"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {existingProfile
                ? "Update your Integra Solutions profile"
                : "Join the Integra Solutions network"}
            </p>
          </div>

          {!identity && (
            <div
              className="mb-6 p-4 rounded-xl"
              style={{
                background: "oklch(var(--teal) / 0.08)",
                border: "1px solid oklch(var(--teal) / 0.2)",
              }}
            >
              <p className="text-sm" style={{ color: "oklch(var(--navy))" }}>
                You&apos;ll be prompted to sign in with Internet Identity to
                create your account.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <Label
                htmlFor="name"
                className="text-xs font-semibold mb-1.5"
                style={{ color: "oklch(var(--navy))" }}
              >
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={set("name")}
                  className="pl-10"
                  autoComplete="name"
                  data-ocid="register.input"
                />
              </div>
              {errors.name && (
                <p
                  className="text-xs text-destructive mt-1"
                  data-ocid="register.error_state"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="reg-email"
                className="text-xs font-semibold mb-1.5"
                style={{ color: "oklch(var(--navy))" }}
              >
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="reg-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                  className="pl-10"
                  autoComplete="email"
                  data-ocid="register.input"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="reg-password"
                className="text-xs font-semibold mb-1.5"
                style={{ color: "oklch(var(--navy))" }}
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="reg-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={form.password}
                  onChange={set("password")}
                  className="pl-10 pr-10"
                  autoComplete="new-password"
                  data-ocid="register.input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide" : "Show"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <Label
                htmlFor="confirm-password"
                className="text-xs font-semibold mb-1.5"
                style={{ color: "oklch(var(--navy))" }}
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="confirm-password"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Repeat password"
                  value={form.confirmPassword}
                  onChange={set("confirmPassword")}
                  className="pl-10 pr-10"
                  autoComplete="new-password"
                  data-ocid="register.input"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showConfirm ? "Hide" : "Show"}
                >
                  {showConfirm ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <Label
                className="text-xs font-semibold mb-1.5"
                style={{ color: "oklch(var(--navy))" }}
              >
                Role
              </Label>
              <Select
                value={form.role}
                onValueChange={(v) =>
                  setForm((p) => ({
                    ...p,
                    role: v as "Industry" | "Institution",
                  }))
                }
              >
                <SelectTrigger data-ocid="register.select">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Industry">Industry Partner</SelectItem>
                  <SelectItem value="Institution">
                    Academic Institution
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.role && (
                <p
                  className="text-xs text-destructive mt-1"
                  data-ocid="register.error_state"
                >
                  {errors.role}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="description"
                className="text-xs font-semibold mb-1.5"
                style={{ color: "oklch(var(--navy))" }}
              >
                Brief Description
              </Label>
              <Input
                id="description"
                placeholder="Describe your organization briefly"
                value={form.description}
                onChange={set("description")}
                data-ocid="register.input"
              />
              {errors.description && (
                <p
                  className="text-xs text-destructive mt-1"
                  data-ocid="register.error_state"
                >
                  {errors.description}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full rounded-full font-bold uppercase tracking-wider text-sm py-3"
              style={{ background: "oklch(var(--navy))", color: "white" }}
              disabled={isLoggingIn || saveProfile.isPending}
              data-ocid="register.submit_button"
            >
              {isLoggingIn || saveProfile.isPending
                ? "Processing..."
                : identity
                  ? "Save Profile"
                  : "REGISTER"}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold hover:underline"
              style={{ color: "oklch(var(--navy))" }}
              data-ocid="register.link"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
