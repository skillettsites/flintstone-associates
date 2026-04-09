import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Flintstone Associates",
  description: "What our clients and candidates say about working with Flintstone Associates.",
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
