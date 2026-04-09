"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import BlurFade from "./BlurFade";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
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
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-card-border bg-card text-foreground placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="gradient-bg text-background font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity active:scale-95 w-full sm:w-auto"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@flintstoneassociates.com"
                    className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <span>hello@flintstoneassociates.com</span>
                  </a>
                  <a
                    href="tel:+442012345678"
                    className="flex items-center gap-3 text-muted hover:text-accent transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <span>+44 (0) 20 1234 5678</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted">
                    <MapPin className="w-5 h-5 text-accent shrink-0" />
                    <span>London, United Kingdom</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Follow us on LinkedIn</span>
                </a>
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
