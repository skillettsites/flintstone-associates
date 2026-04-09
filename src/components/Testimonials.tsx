"use client";

import { Quote } from "lucide-react";
import BlurFade from "./BlurFade";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "Flintstone Associates understood exactly what we needed. They delivered three outstanding candidates within two weeks, and the hire they helped us make has been transformative for our leadership team.",
    name: "Sarah Mitchell",
    role: "Chief People Officer",
    company: "Nexus Financial Group",
  },
  {
    quote:
      "What sets Flintstone Associates apart is their honesty and rigour. They challenged our brief, asked the right questions, and ultimately found us someone we would never have discovered on our own.",
    name: "James Crawford",
    role: "Managing Director",
    company: "Apex Technology Solutions",
  },
  {
    quote:
      "As a candidate, the experience was exceptional. They took the time to understand my career ambitions and matched me with a role that has genuinely changed my trajectory. I could not recommend them more highly.",
    name: "Emily Hartwell",
    role: "VP of Engineering",
    company: "Placed via Flintstone Associates",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="05 / Testimonials"
          heading="Trusted by leading businesses"
          description="What our clients and candidates say about working with us."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <BlurFade key={t.name} delay={0.1 + i * 0.1}>
              <div className="group p-8 rounded-xl border border-card-border bg-card hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                <Quote className="w-8 h-8 text-accent/30 mb-4 shrink-0" />
                <p className="text-muted leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-card-border">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted mt-0.5">{t.role}</p>
                  <p className="text-xs text-accent mt-0.5">{t.company}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
