import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactMessage } from "../hooks/useQueries";

export default function ContactPage() {
  const submitMsg = useSubmitContactMessage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await submitMsg.mutateAsync(form);
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <main>
      {/* Hero */}
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
              Get In Touch
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-3">
              Contact Us
            </h1>
            <p className="text-white/70 max-w-xl">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond promptly.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16"
        style={{ background: "oklch(var(--hero-bg))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card rounded-2xl shadow-card p-8">
              <h2
                className="font-display font-bold text-2xl mb-6"
                style={{ color: "oklch(var(--navy))" }}
              >
                Send a Message
              </h2>

              {submitted ? (
                <div
                  className="text-center py-10"
                  data-ocid="contact.success_state"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "oklch(var(--teal) / 0.12)" }}
                  >
                    <Send
                      className="w-8 h-8"
                      style={{ color: "oklch(var(--teal))" }}
                    />
                  </div>
                  <h3
                    className="font-semibold text-lg mb-2"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                    style={{
                      borderColor: "oklch(var(--navy))",
                      color: "oklch(var(--navy))",
                    }}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <Label
                      htmlFor="contact-name"
                      className="text-xs font-semibold mb-1.5"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Full Name
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={set("name")}
                      data-ocid="contact.input"
                    />
                    {errors.name && (
                      <p
                        className="text-xs text-destructive mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-email"
                      className="text-xs font-semibold mb-1.5"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Email Address
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set("email")}
                      data-ocid="contact.input"
                    />
                    {errors.email && (
                      <p
                        className="text-xs text-destructive mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label
                      htmlFor="contact-message"
                      className="text-xs font-semibold mb-1.5"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      data-ocid="contact.textarea"
                    />
                    {errors.message && (
                      <p
                        className="text-xs text-destructive mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full font-bold uppercase tracking-wider text-sm"
                    style={{ background: "oklch(var(--navy))", color: "white" }}
                    disabled={submitMsg.isPending}
                    data-ocid="contact.submit_button"
                  >
                    {submitMsg.isPending ? "Sending..." : "SEND MESSAGE"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2
                className="font-display font-bold text-2xl mb-6"
                style={{ color: "oklch(var(--navy))" }}
              >
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you&apos;re an industry leader looking for academic
                partners, or an institution seeking collaborative opportunities
                — our team is here to guide you.
              </p>
            </div>

            {[
              {
                icon: MapPin,
                label: "Address",
                value:
                  "123 Innovation Drive, Tech Hub, Makati City, Metro Manila",
              },
              {
                icon: Mail,
                label: "Email",
                value: "inbox2k26@gmail.com",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Monday – Friday, 8:00 AM – 6:00 PM",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex gap-4 bg-card rounded-xl p-4 border border-border"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "oklch(var(--teal) / 0.1)" }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--teal))" }}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {label}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
