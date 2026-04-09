import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services | Flintstone Associates",
  description: "Executive search, contract staffing, and talent advisory. Three core recruitment services tailored to your needs.",
};

export default function ServicesPage() {
  return <Services />;
}
