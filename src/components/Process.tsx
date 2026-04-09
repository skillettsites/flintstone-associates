"use client";

import { Compass, Search, ClipboardCheck, Rocket } from "lucide-react";
import BlurFade from "./BlurFade";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your business, culture, team dynamics, and the specific challenges this hire needs to solve.",
  },
  {
    icon: Search,
    number: "02",
    title: "Search",
    description:
      "Leveraging our network and research capabilities, we identify and approach candidates who are the right fit, not just the obvious fit.",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Assess",
    description:
      "Rigorous screening, in-depth interviews, and thorough referencing ensure only the strongest candidates make it to your shortlist.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Deliver",
    description:
      "We present a curated shortlist, manage the offer process, and support both sides through onboarding for a seamless transition.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 px-6 bg-muted-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="04 / Our Process"
          heading="A proven approach to every placement"
          description="Four clear stages ensure rigour, transparency, and results at every step."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <BlurFade key={step.title} delay={0.1 + i * 0.1}>
              <div className="relative p-6 rounded-xl border border-card-border bg-card h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-mono text-accent font-medium">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-card-border" />
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
