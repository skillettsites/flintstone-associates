"use client";

import { useState } from "react";
import { Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import BlurFade from "./BlurFade";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/2eae5572c240d81d992458afe79d6c80", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-muted-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="06 / Get in Touch"
          heading="Let's start a conversation"
          description="Whether you are looking to hire or exploring your next career move, we would love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-12">
          <BlurFade delay={0.1}>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">Thanks for getting in touch</h3>
                <p className="text-muted max-w-sm">
                  Your message has been sent. We will get back to you as soon as possible.
                </p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="_subject" value="New enquiry from flintstoneassociates.com" />
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} />
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-card text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-card text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-card text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="+44 7000 000000"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-card text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-card-border bg-card text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="gradient-bg text-background font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity active:scale-95 w-full sm:w-auto disabled:opacity-70"
              >
                {status === "sending" && <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />}
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "error" && "Something went wrong. Try again."}
              </button>
            </form>
            )}
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@flintstoneassociates.com"
                    className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <span>contact@flintstoneassociates.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span>London, United Kingdom</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-accent/20 bg-accent/5">
                <h3 className="font-semibold mb-2">Looking for your next role?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  We work with candidates at all stages. Send us your CV and
                  we will be in touch when the right opportunity arises.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
