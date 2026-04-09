"use client";

import BlurFade from "./BlurFade";

interface SectionHeadingProps {
  label: string;
  heading: string;
  description?: string;
}

export default function SectionHeading({
  label,
  heading,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <BlurFade>
        <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
          {label}
        </p>
      </BlurFade>
      <BlurFade delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {heading}
        </h2>
      </BlurFade>
      {description && (
        <BlurFade delay={0.2}>
          <p className="mt-4 text-lg text-muted max-w-2xl">{description}</p>
        </BlurFade>
      )}
    </div>
  );
}
