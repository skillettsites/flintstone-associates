"use client";

import BlurFade from "./BlurFade";
import SectionHeading from "./SectionHeading";
import CountUp from "./CountUp";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Placements Made" },
  { value: 96, suffix: "%", label: "Client Retention" },
  { value: 12, suffix: "", label: "Industries Covered" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="01 / About Us"
          heading="Built on relationships, driven by results"
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-6">
            <BlurFade delay={0.1}>
              <p className="text-lg text-muted leading-relaxed">
                Flintstone Associates was founded on a simple belief: the best
                recruitment happens when you truly understand both sides of
                the equation. We take the time to know our clients, their
                culture, and their ambitions before we ever begin a search.
              </p>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="text-lg text-muted leading-relaxed">
                Our team brings decades of experience across multiple
                sectors, with a network built on trust and repeat
                partnerships. We do not just fill roles; we build teams
                that drive businesses forward.
              </p>
            </BlurFade>
            <BlurFade delay={0.3}>
              <p className="text-lg text-muted leading-relaxed">
                Whether you are looking for a transformative C-suite hire
                or scaling a specialist team, we bring the same rigour,
                discretion, and commitment to every engagement.
              </p>
            </BlurFade>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={0.1 + i * 0.1}>
                <div className="p-6 rounded-xl border border-card-border bg-card hover:border-accent/30 transition-colors">
                  <p className="text-3xl md:text-4xl font-bold text-accent">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
