import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Flintstone Associates",
  description: "Built on relationships, driven by results. Learn about Flintstone Associates and our approach to executive recruitment.",
};

export default function AboutPage() {
  return <About />;
}
