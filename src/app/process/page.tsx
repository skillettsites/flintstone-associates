import type { Metadata } from "next";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Our Process | Flintstone Associates",
  description: "A proven four-stage approach to every placement: discover, search, assess, and deliver.",
};

export default function ProcessPage() {
  return <Process />;
}
