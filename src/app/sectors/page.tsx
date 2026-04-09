import type { Metadata } from "next";
import Sectors from "@/components/Sectors";

export const metadata: Metadata = {
  title: "Sectors | Flintstone Associates",
  description: "Deep recruitment expertise across technology, financial services, healthcare, professional services, energy, and consumer sectors.",
};

export default function SectorsPage() {
  return <Sectors />;
}
