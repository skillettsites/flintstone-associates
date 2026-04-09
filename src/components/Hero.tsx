"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import BlurFade from "./BlurFade";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />

      <div className="relative max-w-5xl mx-auto px-6 text-center pt-20">
        <BlurFade delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent font-medium">
              Executive Recruitment Excellence
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={0.3}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Finding{" "}
            <span className="gradient-text">exceptional talent</span>
            <br />
            for exceptional companies
          </h1>
        </BlurFade>

        <BlurFade delay={0.4}>
          <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Flintstone Associates is a specialist recruitment agency connecting
            senior talent with the businesses that need them most. We combine
            deep industry knowledge with a relationship-first approach.
          </p>
        </BlurFade>

        <BlurFade delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="gradient-bg text-background font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity active:scale-95 w-full sm:w-auto text-center"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-card-border text-foreground font-medium px-8 py-3 rounded-lg hover:border-accent/50 hover:text-accent transition-colors active:scale-95 w-full sm:w-auto text-center"
            >
              Get in Touch
            </Link>
          </div>
        </BlurFade>

        <motion.div
          className="mt-16 md:mt-24"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href="/about" className="inline-block text-muted hover:text-accent transition-colors">
            <ArrowDown size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
