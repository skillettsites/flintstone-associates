"use client";

import { Search, Users, BarChart3 } from "lucide-react";
import BlurFade from "./BlurFade";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Search,
    title: "Executive Search",
    description:
      "Confidential, targeted search for senior leadership and C-suite positions. We identify and approach the very best candidates, including those not actively looking.",
    features: [
      "Board and C-suite appointments",
      "Confidential search mandates",
      "Succession planning support",
      "Leadership assessment",
    ],
  },
  {
    icon: Users,
    title: "Contract & Interim",
    description:
      "Flexible workforce solutions for businesses needing specialist talent on a project or interim basis. Fast turnaround without compromising on quality.",
    features: [
      "Interim management",
      "Project-based specialists",
      "Rapid deployment",
      "Contractor management",
    ],
  },
  {
    icon: BarChart3,
    title: "Talent Advisory",
    description:
      "Strategic guidance to help you attract, retain, and develop the right people. From salary benchmarking to workforce planning, we help you stay ahead.",
    features: [
      "Salary benchmarking",
      "Workforce planning",
      "Employer brand strategy",
      "Market intelligence",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-muted-bg">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="02 / Services"
          heading="How we deliver"
          description="Three core services, each tailored to your specific needs and delivered with the same commitment to excellence."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <BlurFade key={service.title} delay={0.1 + i * 0.1}>
              <div className="group p-8 rounded-xl border border-card-border bg-card hover:border-accent/40 transition-colors duration-300 h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
