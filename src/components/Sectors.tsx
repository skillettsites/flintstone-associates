"use client";

import {
  Monitor,
  Landmark,
  HeartPulse,
  Briefcase,
  Zap,
  ShoppingBag,
} from "lucide-react";
import BlurFade from "./BlurFade";
import SectionHeading from "./SectionHeading";

const sectors = [
  {
    icon: Monitor,
    name: "Technology & Digital",
    description:
      "Software engineering, product, data science, and digital transformation roles.",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    description:
      "Banking, insurance, fintech, and investment management professionals.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Life Sciences",
    description:
      "Pharma, biotech, medtech, and healthcare leadership positions.",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description:
      "Consulting, legal, accounting, and advisory firm placements.",
  },
  {
    icon: Zap,
    name: "Energy & Infrastructure",
    description:
      "Renewables, utilities, construction, and infrastructure development.",
  },
  {
    icon: ShoppingBag,
    name: "Consumer & Retail",
    description:
      "FMCG, e-commerce, luxury, and retail leadership recruitment.",
  },
];

export default function Sectors() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="03 / Sectors"
          heading="Industries we know inside out"
          description="Deep expertise across six core sectors, built over years of successful partnerships."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <BlurFade key={sector.name} delay={0.1 + i * 0.06}>
              <div className="group p-6 rounded-xl border border-card-border bg-card hover:border-accent/40 transition-colors duration-300">
                <sector.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{sector.name}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
