import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Flintstone Associates",
  description: "Get in touch with Flintstone Associates. Whether you are looking to hire or exploring your next career move, we would love to hear from you.",
};

export default function ContactPage() {
  return <Contact />;
}
